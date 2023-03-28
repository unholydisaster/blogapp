import { UserNotes } from "@/backend/models/schema";
import dbConnect from "@/backend/utils/dbConnect";

dbConnect();

export default async(req, res)=> {
  const { title } = req.query;

  switch (method) {
    case "GET":
      try {
        const note=await UserNotes.findById(title)
        res.json({notebytitle:note.note});
        console.log(note)

      } catch{
        res.status(400).json("an error occured");
      }
      break;
    default:
      res.status(400).json("an error occured");
      break;
  }
};

