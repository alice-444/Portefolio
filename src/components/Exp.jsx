import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { IoCloudDownloadOutline } from "react-icons/io5";

const Info = ({
  _id,
  title: existingTitle,
  company: existingCompany,
  companyLogo: existingCompanyLogo,
  location: existingLocation,
  startDate: existingStartDate,
  endDate: existingEndDate,
  tasks: existingTasks,
}) => {
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();

  const [title, setTitle] = useState(existingTitle || "");
  const [company, setCompany] = useState(existingCompany || "");
  const [companyLogo, setCompanyLogo] = useState(existingCompanyLogo || []);
  const [location, setLocation] = useState(existingLocation || "");
  const [startDate, setStartDate] = useState(existingStartDate || "");
  const [endDate, setEndDate] = useState(existingStartDate || "");
  const [tasks, setTasks] = useState(existingTasks || "");

  const createExp = async (ev) => {
    const data = {
      title,
      company,
      companyLogo,
      location,
      startDate,
      endDate,
      tasks,
    };

    if (_id) {
      await axios.put("/api/experience", { ...data, _id });
    } else {
      await axios.post("/api/experience", data);
    }

    setRedirect(true);
  };

  if (redirect) {
    router.push("/dashboard");
    return null;
  }

  return (
    <div>
      <form onSubmit={createExp} className="mx-auto max-w-screen-sm">
        <div className="my-4">
          <div>
            <label
              htmlFor="titleInput"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              title
            </label>
            <input
              type="text"
              id="titleInput"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder="Enter title"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
            />
          </div>
        </div>
        <div className="my-4">
          <div>
            <label
              htmlFor="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Company
            </label>
            <input
              type="email"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder="Enter company name"
              value={company}
              onChange={(ev) => setCompany(ev.target.value)}
            />
          </div>
        </div>

        <div class="mx-auto my-4">
          <div class="mx-auto">
            <label class="mb-1 block text-lg font-medium text-gray-700 py-1">
              Logo
            </label>
            <label class="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-azure-radiance-300 p-6 transition-all hover:border-primary-300">
              <div class="space-y-1 text-center">
                <div class="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                  <IoCloudDownloadOutline />
                </div>
                <div class="text-gray-600">
                  <Link
                    href="#"
                    class="font-medium text-primary-500 hover:text-primary-700"
                  >
                    Click to upload
                  </Link>{" "}
                  or drag and drop
                </div>
                <p class="text-sm text-gray-500">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                accept="image/*"
                multiple
                value={companyLogo}
              />
            </label>
          </div>
        </div>

        <div className="my-4">
          <div>
            <label
              htmlFor="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              location
            </label>
            <input
              type="text"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder="Enter location"
              value={location}
              onChange={(ev) => setLocation(ev.target.value)}
            />
          </div>
        </div>

        <div className="my-4">
          <div>
            <label
              htmlFor="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Start date
            </label>
            <input
              type="date"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder="Enter start date"
              value={startDate}
              onChange={(ev) => setStartDate(ev.target.value)}
            />
          </div>
        </div>

        <div className="my-4">
          <div>
            <label
              htmlFor="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              End date
            </label>
            <input
              type="date"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder="Enter end date"
              value={endDate}
              onChange={(ev) => setEndDate(ev.target.value)}
            />
          </div>
        </div>

        <div class="mx-auto my-4">
          <div>
            <label
              htmlFor="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Tasks
            </label>
            <textarea
              rows={5}
              type="text"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder=" Enter description of tasks"
              value={tasks}
              onChange={(ev) => setTasks(ev.target.value)}
            />
          </div>
        </div>
        <div class="mx-auto my-4">
          <button
            className="inline-block rounded border border-red-300 px-12 py-3 text-semibold font-d text-red-300 hover:bg-azure-radiance-400 hover:border-azure-radiance-300 hover:text-white focus:outline-none focus:ring active:bg-green-500 w-full"
            type="submit"
          >
            Add data
          </button>
        </div>
      </form>
    </div>
  );
};

export default Info;
