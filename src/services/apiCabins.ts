import supabase, { supabaseUrl } from "./supabase";
import type { Cabin, NewCabin } from "../types/types";

// ************************************************************************************************
// ************************************************************************************************

export async function getCabins(): Promise<Cabin[]> {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return (cabins ?? []) as Cabin[];
}

// ************************************************************************************************
// ************************************************************************************************

export async function createEditCabin(newCabin: NewCabin, id?: number) {
  const imageName =
    newCabin.image instanceof File
      ? `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "")
      : "";

  const imagePath =
    newCabin.image instanceof File
      ? `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
      : newCabin.image;

  const baseQuery = supabase.from("cabins");

  const query = id
    ? baseQuery.update({ ...newCabin, image: imagePath }).eq("id", id)
    : baseQuery.insert([{ ...newCabin, image: imagePath }]);

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error(
      id ? "Cabin could not be updated" : "Cabin could not be created",
    );
  }

  if (!(newCabin.image instanceof File)) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError && !id) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created",
    );
  }

  return data;
}
// ************************************************************************************************
// ************************************************************************************************

export async function deleteCabin(id: number) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
