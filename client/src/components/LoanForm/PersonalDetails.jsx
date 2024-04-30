import { LucideChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PersonalDetails({
  name,
  setName,
  age,
  setAge,
  panCardNumber,
  setPanCardNumber,
  aadharCardNumber,
  setAadhaarCardNumber,
}) {
  const naviate = useNavigate();
  return (
    <section
      id="personal-details"
      className="flex space-y-2 flex-col p-5 bg-black text-gray-400 rounded-xl  shadow-xl "
    >
      <div className="p-3">
        <div className="flex justify-between items-center ">
          <label htmlFor="full-name" className="block text-md font-normal">
            Full Name
          </label>
        </div>
        <input
          type="text"
          id="full-name"
          className="py-3 px-4 block border  w-full text-gray-600 border-gray-200  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
          placeholder="Your Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center">
          <label htmlFor="age" className="block text-md font-normal">
            Age
          </label>
        </div>
        <input
          type="number"
          id="age"
          className="py-3 px-4 block border  w-full border-gray-200  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none text-gray-600"
          placeholder="Your Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center">
          <label htmlFor="pancard-number" className="block text-md font-normal">
            PAN Card Number
          </label>
        </div>
        <input
          type="text"
          id="pancard-number"
          className="py-3 px-4 block border  w-full border-gray-200  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none text-gray-600"
          placeholder="Your PAN Card Number"
          value={panCardNumber}
          onChange={(e) => setPanCardNumber(e.target.value)}
        />
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center">
          <label
            htmlFor="pan-card-number"
            className="block text-md font-normal"
          >
            Aadaar Card Number
          </label>
        </div>
        <input
          type="number"
          id="pan-card-number"
          className="py-3 px-4 block border  w-full border-gray-200  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none text-gray-600"
          placeholder="Your Aadhaar Card Number"
          value={aadharCardNumber}
          onChange={(e) => setAadhaarCardNumber(e.target.value)}
        />
      </div>

      <div className="flex items-center space-x-2 pt-5 p-3">
        <button
          onClick={() => {
            naviate('/editor?tab=collateralDetails');
          }}
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  group"
        >
          <span>Next</span>
          <LucideChevronRight className="w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
