"use server";

import { createProfile, deleteProfile, getAllProfiles, getProfileByUserId, updateProfile } from "../db/queries/profiles-queries";
import { InsertProfile } from "../db/schema/profiles-schema";
import { ActionState } from "../types";
import { revalidatePath } from "next/cache";

export async function createProfileAction(data: InsertProfile): Promise<ActionState> {
  try {
    const newProfile = await createProfile(data);
    console.log("New profile created", newProfile);
    revalidatePath("/");
    return { status: "success", message: "Profile created successfully", data: newProfile };
  } catch (error) {
    return { status: "error", message: "Error creating profile" };
  }
}

export async function getProfileByUserIdAction(userId: string): Promise<ActionState> {
  try {
    const profile = await getProfileByUserId(userId);
    if (!profile) {
      return { status: "error", message: "Profile not found" };
    }
    return { status: "success", message: "Profile retrieved successfully", data: profile };
  } catch (error) {
    return { status: "error", message: "Failed to get profile" };
  }
}

export async function getAllProfilesAction(): Promise<ActionState> {
  try {
    const profiles = await getAllProfiles();
    return { status: "success", message: "Profiles retrieved successfully", data: profiles };
  } catch (error) {
    return { status: "error", message: "Failed to get profiles" };
  }
}

export async function updateProfileAction(userId: string, data: Partial<InsertProfile>): Promise<ActionState> {
  try {
    const updatedProfile = await updateProfile(userId, data);
    revalidatePath("/profile");
    return { status: "success", message: "Profile updated successfully", data: updatedProfile };
  } catch (error) {
    return { status: "error", message: "Failed to update profile" };
  }
}

export async function deleteProfileAction(userId: string): Promise<ActionState> {
  try {
    await deleteProfile(userId);
    revalidatePath("/profile");
    return { status: "success", message: "Profile deleted successfully" };
  } catch (error) {
    return { status: "error", message: "Failed to delete profile" };
  }
}