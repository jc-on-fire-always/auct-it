/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";


import User from "@/models/user.model";
import { connectToDatabase } from "../database/mongoose";

// CREATE
export async function createUser(user: any) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
