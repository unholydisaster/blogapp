import { UserNotes } from "@/backend/models/schema";
import { UserModel } from "@/backend/models/users";
import dbConnect from "@/backend/utils/dbConnect";

dbConnect();

export default async(req, res)=> {
  const { userID } = req.query;

  switch (method) {
    case "GET":
      try {
        const user=await UserModel.findById(userID)
        res.json({savednotes:user?.savednotes});

      } catch (error){
        res.status(400).json(error);
      }
      break;
    default:
      res.status(400).json("an error occured");
      break;
  }
};


