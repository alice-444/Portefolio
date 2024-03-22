import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

const Project = ({
  _id,
  title: existingTitle,
  description: existingDescription,
}) => {
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();

  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");

  const createProject = async (ev) => {
    const data = {
      title,
      description,
    };

    if (_id) {
      await axios.put("/api/projects/route", { ...data, _id });
    } else {
      await axios.post("/api/projects/route", data);
    }

    setRedirect(true);
  };

  if (redirect) {
    router.push("/dashboard");
    return null;
  }

  return (
    <div>
      <form onSubmit={createProject} className="mx-auto max-w-screen-sm">
        <div className="my-4">
          <div>
            <label
              htmlFor="titleInput"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Title
            </label>
            <input
              type="text"
              id="titleInput"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder="Enter username"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
            />
          </div>
        </div>
        <div class="mx-auto my-4">
          <div>
            <label
              htmlFor="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Description
            </label>
            <textarea
              rows={5}
              type="text"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder=" Enter description"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
          </div>
        </div>

        <div class="mx-auto my-4">
          <button
            className="inline-block rounded border border-red-300 px-12 py-3 text-semibold font-d text-red-300 hover:bg-azure-radiance-400 hover:border-azure-radiance-300 hover:text-white focus:outline-none focus:ring active:bg-green-500 w-full"
            type="submit"
          >
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default Project;
