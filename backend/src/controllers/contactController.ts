import { Request, Response } from "express"
import { Contact } from "../models/contactModel"

export const submitContact = async (req: Request, res: Response) => {
  try {
    const contact = new Contact(req.body)
    await contact.save()
    res.status(201).json({ success: true, message: "Contact saved" })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false, message: "Failed to save contact" })
  }
}
