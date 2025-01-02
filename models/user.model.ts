import mongoose, { Schema, Document, Model } from "mongoose";

// Define an interface for the User document
export interface IUser extends Document {
  id: string; // Unique User ID
  emailAddress: string; // Primary email address
  createdAt: Date; // User creation timestamp
  updatedAt: Date; // User update timestamp
  firstName: string; // User's first name
  lastName: string; // User's last name
  profileImageUrl: string; // URL for the user's profile image
}

// Create a schema for the User model
const UserSchema: Schema<IUser> = new Schema(
  {
    id: { type: String, required: true, unique: true }, // Unique User ID
    emailAddress: { type: String, required: true, unique: true }, // Email address
    createdAt: { type: Date, default: Date.now }, // Created at timestamp
    updatedAt: { type: Date, default: Date.now }, // Updated at timestamp
    firstName: { type: String, required: true }, // First name
    lastName: { type: String, required: true }, // Last name
    profileImageUrl: { type: String, required: false }, // Profile image URL (optional)
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
  }
);

// Create a Mongoose model
const UserModel: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default UserModel;
