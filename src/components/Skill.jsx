import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { IoCloudDownloadOutline } from "react-icons/io5";

const Skill = ({ _id, name: existingName, level: existingLevel }) => {
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();

  const [name, setName] = useState(existingName || "");
  const [level, setLevel] = useState(existingLevel || "");

  const createSkill = async (ev) => {
    const data = {
      name,
      level,
    };

    if (_id) {
      await axios.put("/api/skill", { ...data, _id });
    } else {
      await axios.post("/api/skill", data);
    }

    setRedirect(true);
  };

  if (redirect) {
    router.push("/dashboard");
    return null;
  }

  return (
    <div>
      <form onSubmit={createSkill} className="mx-auto max-w-screen-sm">
        <div className="my-4">
          <div>
            <label
              htmlFor="titleInput"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Name
            </label>
            <input
              type="text"
              id="titleInput"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder="Enter username"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
          </div>
        </div>
        <div className="my-4">
          <div>
            <label
              htmlFor="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Email
            </label>
            <input
              type="email"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder="Enter email"
              value={level}
              onChange={(ev) => setLevel(ev.target.value)}
            />
          </div>
        </div>

        <div class="mx-auto my-4">
          <button
            className="inline-block rounded border border-red-300 px-12 py-3 text-semibold font-d text-red-300 hover:bg-azure-radiance-400 hover:border-azure-radiance-300 hover:text-white focus:outline-none focus:ring active:bg-green-500 w-full"
            type="submit"
          >
            Add skill
          </button>
        </div>
      </form>
    </div>
  );
};

export default Skill;
