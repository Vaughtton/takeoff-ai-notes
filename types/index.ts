"use server";

import { InsertProfile } from "@/db/schema/profiles-schema";
import { ActionState } from "@/types";

export async function createProfile(data: InsertProfile): Promise<ActionState> {
  try {
    const newProfile = await createProfile(data);
    return { status: "success", message: "Profile created successfully", data: newProfile };
  } catch (error) {
    return { status: "error", message: "Error creating profile" };
  }