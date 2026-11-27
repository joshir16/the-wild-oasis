import supabase, { supabaseUrl } from "./supabase";
import type { Cabin, NewCabin } from "../types/types";

export async function getCabins(): Promise<Cabin[]> {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return (cabins ?? []) as Cabin[];
}

export async function createCabin(newCabin: NewCabin) {
  const isNewFile = newCabin.image instanceof File;

  const imageName =
    newCabin.image instanceof File
      ? `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "")
      : "";

  const imagePath = isNewFile
    ? `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
    : newCabin.image;

  // 1. Create cabin row
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select()
    .single();

  if (error) {
    throw new Error("Cabin could not be created");
  }

  // 2. Skip upload if reusing an existing image URL string
  if (!(newCabin.image instanceof File)) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin")
    .upload(imageName, newCabin.image);

  // 3. Roll back cabin row if storage upload fails
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created",
    );
  }

  return data;
}
export async function deleteCabin(id: number) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
