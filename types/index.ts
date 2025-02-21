"use server";

import { InsertProfile } from "@/db/schema/profiles-schema";
import { ActionState } from "@/types";

export async function createProfile(data: InsertProfile): Promise<ActionState> {
  try {
    const newProfile = await createProfile(data);
    return { status: "success", message: "Profile created successfully", data: newProfile };
  } catch (error) {
    console.error("Error creating profile:", error);
    if (error instanceof Error) {
      return { status: "error", message: error.message };
    }
    return { status: "error", message: "Error creating profile" };
  }
}