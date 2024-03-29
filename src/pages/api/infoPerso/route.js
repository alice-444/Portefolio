import Me from "@/db/models/Info.js";
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

    if (method === "PUT") {
      return handlePut(req, res);
    }

    if (method === "DELETE") {
      return handleDelete(req, res);
    }

    res.status(405).json({ error: `Method ${method} Not Allowed` });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}

async function handlePost(req, res) {
  try {
    const { username, email, profileImage, description, phone } = req.body;

    const infoDoc = await Me.create({
      username,
      email,
      profileImage,
      description,
      phone,
    });

    res.status(201).json(infoDoc);
  } catch (error) {
    res.status(500).json({ error: "Error creating info" });
  }
}

async function handleGet(req, res) {
  try {
    if (req.query?.id) {
      const info = await Me.findById(req.query.id);

      if (!info) {
        return res.status(404).json({ error: "Information not found" });
      }

      res.json(info);
    } else {
      const infos = await Me.find();
      res.json(infos);
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching infos" });
  }
}

async function handlePut(req, res) {
  try {
    const { _id } = req.body;

    const existingInfo = await Me.findById(_id);

    if (!existingInfo) {
      return res.status(404).json({ error: "Information not found" });
    }
    await Me.updateOne({ _id }, {});

    res.status(200).json({ message: "Information updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error updating information" });
  }
}

async function handleDelete(req, res) {
  try {
    const infoId = req.query?.id;
    if (infoId) {
      const infoToDelete = await Me.findById(infoId);

      if (!infoToDelete) {
        return res.status(404).json({ error: "Information not found" });
      }

      await Me.deleteOne({ _id: infoId });
      res.status(200).json({ message: "Information deleted successfully" });
    } else {
      res.status(400).json({ error: "Missing information ID in the request" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting Information" });
  }
}
