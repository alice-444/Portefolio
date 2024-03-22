import Skill from "@/db/models/Skill.js";
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
    const {} = req.body;

    const skillDoc = await Skill.create({});

    res.status(201).json(skillDoc);
  } catch (error) {
    res.status(500).json({ error: "Error creating skill" });
  }
}

async function handleGet(req, res) {
  try {
    if (req.query?.id) {
      const skill = await Skill.findById(req.query.id);

      if (!skill) {
        return res.status(404).json({ error: "Skill not found" });
      }

      res.json(skill);
    } else {
      const skills = await Skill.find();
      res.json(skills);
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching skills" });
  }
}

async function handlePut(req, res) {
  try {
    const { _id } = req.body;

    const existingSkill = await Skill.findById(_id);

    if (!existingSkill) {
      return res.status(404).json({ error: "Skill not found" });
    }
    await Skill.updateOne({ _id }, {});

    res.status(200).json({ message: "Skill updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error updating skill" });
  }
}

async function handleDelete(req, res) {
  try {
    const skillId = req.query?.id;
    if (skillId) {
      const skillToDelete = await Skill.findById(skillId);

      if (!skillToDelete) {
        return res.status(404).json({ error: "Skill not found" });
      }

      await Skill.deleteOne({ _id: skillId });
      res.status(200).json({ message: "skill deleted successfully" });
    } else {
      res.status(400).json({ error: "Missing skill ID in the request" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting skill" });
  }
}
