import mongoose from "mongoose"

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    socialMedia: { type: String },
    website: { type: String },
    message: { type: String, required: true },
  },
  { timestamps: true }
)

export const Contact = mongoose.model("Contact", contactSchema)
