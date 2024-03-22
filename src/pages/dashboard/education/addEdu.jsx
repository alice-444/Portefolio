import Edu from "@/components/Edu.jsx";

const AddEdu = () => {
  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between py-3">
        <div className="text-center sm:text-left">
          <p className="text-gray-500 mt-1.5 text-xl max-w-lg">
            Let's talk about education!
          </p>
        </div>
      </div>

      <hr className="h-px border-0 bg-gray-300" />

      <div className="my-10">
        <Edu />
      </div>
    </div>
  );
};

export default AddEdu;
