import Link from "next/link";
import { MdWork } from "react-icons/md";
import { TbSchool, TbUserFilled } from "react-icons/tb";
import { LuComponent } from "react-icons/lu";
import { AiFillProject } from "react-icons/ai";

const links = [
  {
    href: "/dashboard/me/",
    text: "View about me",
    icon: <TbUserFilled className="h-8 w-8" />,
  },
  {
    href: "/dashboard/skills/",
    text: "View skill(s)",
    icon: <LuComponent className="h-8 w-8" />,
  },
  {
    href: "/dashboard/projects/",
    text: "View project(s)",
    icon: <AiFillProject className="h-8 w-8" />,
  },
  {
    href: "/dashboard/education/",
    text: "View education(s)",
    icon: <TbSchool className="h-8 w-8" />,
  },
  {
    href: "/dashboard/experiences/",
    text: "View experience(s)",
    icon: <MdWork className="h-8 w-8" />,
  },
];

const Dashboard = () => {
  return (
    <main>
      <header className="bg-white mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between text-center sm:text-left">
          <div>
            <h1 className="text-3xl font-bold text-azure-radiance-300 sm:text-3xl">
              Welcome Back,{" "}
              <span className="text-azure-radiance-400">hehehe</span> !
            </h1>
            <p className="text-gray-500 mt-1.5 text-md max-w-lg">
              View all about your information, ...
            </p>
            <p className="text-gray-500 mt-1.5 text-md max-w-lg">
              Also manage and add data.
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-red-300 px-5 py-3 text-red-300 transition hover:border-azure-radiance-400 hover:text-azure-radiance-400 focus:outline-none focus:ring"
              >
                <span className="text-md font-medium">{link.text}</span>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="h-32 rounded-lg bg-gray-200"></div>
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
