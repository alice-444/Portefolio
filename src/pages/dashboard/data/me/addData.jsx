import Info from "@/components/Info.jsx";

const AddData = () => {
  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between py-3">
        <div className="text-center sm:text-left">
          <p className="text-gray-500 mt-1.5 text-xl max-w-lg">
            Let's data about me!
          </p>
        </div>
      </div>

      <hr className="h-px border-0 bg-gray-300" />

      <div className="my-10">
        <Info />
      </div>
    </div>
  );
};

export default AddData;
