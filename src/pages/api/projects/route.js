import Project from "@/db/models/Project.js";
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

    const projectDoc = await Project.create({});

    res.status(201).json(projectDoc);
  } catch (error) {
    res.status(500).json({ error: "Error creating project" });
  }
}

async function handleGet(req, res) {
  try {
    if (req.query?.id) {
      const project = await Project.findById(req.query.id);

      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }

      res.json(project);
    } else {
      const projects = await Project.find();
      res.json(projects);
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching projects" });
  }
}

async function handlePut(req, res) {
  try {
    const { _id } = req.body;

    const existingProject = await Project.findById(_id);

    if (!existingProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    await Project.updateOne({ _id }, {});

    res.status(200).json({ message: "Project updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error updating project" });
  }
}

async function handleDelete(req, res) {
  try {
    const projectId = req.query?.id;
    if (projectId) {
      const projectToDelete = await Project.findById(projectId);

      if (!projectToDelete) {
        return res.status(404).json({ error: "Project not found" });
      }

      await Project.deleteOne({ _id: projectId });
      res.status(200).json({ message: "project deleted successfully" });
    } else {
      res.status(400).json({ error: "Missing project ID in the request" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting project" });
  }
}
