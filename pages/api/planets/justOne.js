import dbConnect from "../../../lib/dbConnect";
import planet from "../../../modules/planet";
dbConnect();
export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST":
      {
        try {
          const data = await planet.findById(req.body.id );
          res.status(200).json({ success: true, data });
        } catch (error) {
          res.status(404).json({ success: false });
        }
      }
      break;

    default:
      res.status(404).json({ success: false });
      break;
  }
};
