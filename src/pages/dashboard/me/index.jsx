import axios from "axios";
import Link from "next/link";
import { GoTrash } from "react-icons/go";
import { useEffect, useState } from "react";
import { FiEdit3, FiPlusCircle } from "react-icons/fi";

const Me = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios.get("/api/infoPerso/route").then((res) => {
      setDatas(res.data);
    });
  }, []);

  return (
    <div>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold text-azure-radiance-400 sm:text-3xl">
                General Details
              </h1>
              <p className="text-gray-500 mt-1.5 text-md max-w-lg">
                Let's add data !
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <Link
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-red-300 px-5 py-3 text-red-300 transition hover:border-azure-radiance-400 hover:text-azure-radiance-400 focus:outline-none focus:ring"
                href={"/dashboard/me/addData"}
              >
                <span className="text-md font-medium">add Data</span>
                <FiPlusCircle className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <hr className="my-1 h-px border-0 bg-gray-300" />
      <div className="mx-auto max-w-screen-2xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8 overflow-x-auto">
        {datas.length === 0 ? (
          <p className="text-gray-700 font-semibold">No data found</p>
        ) : (
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
            <table className="w-full whitespace-nowrap border-collapse bg-white text-left text-sm text-gray-500">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Username
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Phone
                  </th>
                </tr>
              </thead>

              {datas.map((data, index) => (
                <tbody
                  className="divide-y divide-gray-100 border-t border-gray-100"
                  key={data._id}
                >
                  <tr className="hover:bg-gray-50">
                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div className="text-sm">
                        <div className="font-medium text-gray-700">
                          {data.username}
                        </div>
                        <div className="text-gray-400">{data.email}</div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{data.images}</td>
                    <td className="px-6 py-4 truncate max-w-sx">
                      {data.description}
                    </td>
                    <td className="px-6 py-4 truncate max-w-sx">
                      {data.phone}
                    </td>

                    <td className="px-6 py-4">
                      <td className="flex justify-end gap-4 px-6 py-4 font-xl">
                        <Link
                          className="text-red-400  h-8 w-8"
                          href={"/dashboard/me/delete/" + data._id}
                        >
                          {" "}
                          <GoTrash />
                        </Link>
                        <Link
                          className="text-red-400 h-8 w-8"
                          href={"/dashboard/me/edit/" + data._id}
                        >
                          <FiEdit3 />
                        </Link>
                      </td>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Me;
