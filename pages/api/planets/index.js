import dbConnect from "../../../lib/dbConnect";
import planet from "../../../modules/planet";
dbConnect();
export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      {
        try {
          const data = await planet.find({});
          res.status(200).json({ success: true, data });
        } catch (error) {
          res.status(404).json({ success: false });
        }
      }
      break;
    case "POST":
      {
        try {
          const data = await planet.create(req.body);
          res.status(200).json({ success: true, data });
        } catch (error) {
          res.status(404).json({ success: false });
        }
      }
      break;
    case "DELETE":
      {
        try {
          const data = await planet.findByIdAndDelete(req.body._id);
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
