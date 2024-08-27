import mongoose, { Document, Schema, Model, CallbackError } from 'mongoose';
import bcrypt from 'bcrypt';

// Interface for the User Document
export interface IUser extends Document {
  username: string;
  password: string;
}

// Define the User Schema
const UserSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
},  { collection: 'vocabulary_mogul_users' });

// Pre-save middleware to hash the password before saving
UserSchema.pre<IUser>('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    } catch (err) {
      return next(err as CallbackError);
    }
  }
  next();
});

// Create and export the User model
const User: Model<IUser> = mongoose.model<IUser>('VocabularyMogulUser', UserSchema);

export default User;
