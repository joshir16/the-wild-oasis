export interface Cabin {
  id: number;
  created_at: string;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string | null;
  image: string;
}

export type CabinFormValues = Omit<Cabin, "id" | "created_at" | "image"> & {
  image: FileList | string;
};

export type NewCabin = Omit<Cabin, "id" | "created_at" | "image"> & {
  image: File | string;
};

export interface Settings {
  id: number;
  created_at: string;
  minBookingLength: number;
  maxBookingLength: number;
  maxGuestPerBooking: number;
  breakfastPrice: number;
}

export type SettingsFormValues = Omit<Settings, "id" | "created_at">;
export type UpdateSettingPayload = Partial<Omit<Settings, "id" | "created_at">>;
