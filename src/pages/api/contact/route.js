import Contact from "@/db/models/Contact.js";
import MongooseConnect from "@/db/mongoose.js";

export default async function handle(req, res) {
  const { method } = req;

  try {
    await MongooseConnect();

    if (method === "POST") {
      return handlePost(req, res);
    }

    if (method === "GET") {
      return handleGet(req, res);
    }

    res.status(405).json({ error: `Method ${method} Not Allowed` });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}

async function handlePost(req, res) {
  try {
    const {} = req.body;

    const infoDoc = await Info.create({});

    res.status(201).json(infoDoc);
  } catch (error) {
    res.status(500).json({ error: "Error creating info" });
  }
}

async function handleGet(req, res) {
  try {
    if (req.query?.id) {
      const info = await Info.findById(req.query.id);

      if (!info) {
        return res.status(404).json({ error: "Information not found" });
      }

      res.json(info);
    } else {
      const infos = await Info.find();
      res.json(infos);
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching infos" });
  }
}
