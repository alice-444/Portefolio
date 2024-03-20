import Link from "next/link";

const Dashboard = () => {
  return (
    <main>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold text-red-300 sm:text-3xl">
                Welcome Back, <span className="text-red-400">hehehe</span> !
              </h1>
              <p className="text-gray-500 mt-1.5 text-md max-w-lg">
                View the statistics about your business. Also manage and add
                books.
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <Link
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 hover:bg-red-50 px-5 py-3 text-gray-500 transition hover:text-red-400 hover:border-red-300 focus:outline-none focus:ring"
                href={"/books"}
              >
                <span className="text-md font-medium"> View Books </span>
                {/* <GiBlackBook className="h-6 w-6" /> */}
              </Link>

              <button
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-red-300 hover:bg-red-50 px-5 py-3 text-red-300 transition hover:text-red-400 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-md font-medium"> View Shops </span>
                {/* <MdOutlineShoppingBag className="h-6 w-6" /> */}
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div className="h-32 rounded-lg bg-gray-200"></div>
        <div className="h-32 rounded-lg bg-gray-200"></div>
        <div className="h-32 rounded-lg bg-gray-200"></div>
        <div className="h-32 rounded-lg bg-gray-200"></div>
      </div>
      space dashboard
    </main>
  );
};

export default Dashboard;
