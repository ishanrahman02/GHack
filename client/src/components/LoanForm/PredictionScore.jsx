import { LucideCheck, LucideChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PredictionScore({
  cropyieldscore,
  setcropyieldscore,
  assessmentscore,
  setassessmentscore,
}) {
  const navigate = useNavigate();
  return (
    <section
      id="personal-details"
      className="flex space-y-2 flex-col p-5 bg-black text-gray-400 rounded-xl  shadow-xl "
    >
      <div className="p-3">
        <div className="flex justify-between items-center">
          <label htmlFor="land-value" className="block text-md font-normal">
            Crop Yield Prediction Score Achieved
          </label>
        </div>
        <input
          type="number"
          id="land-value"
          className="py-3 px-4 block border  w-full border-gray-200  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none text-gray-600"
          placeholder="Crop Yield Prediction Score Achieved"
          value={cropyieldscore}
          onChange={(e) => setcropyieldscore(e.target.value)}
        />
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center">
          <label htmlFor="age" className="block text-md font-normal">
            Assesment Score Achieved
          </label>
        </div>
        <input
          type="number"
          id="age"
          className="py-3 px-4 block border  w-full border-gray-200  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none text-gray-600"
          placeholder="Assesment Score Achieved"
          value={assessmentscore}
          onChange={(e) => setassessmentscore(e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-2 pt-5 p-3">
        <button
          type="button"
          onClick={() => {
            navigate('/editor?tab=collateralDetails');
          }}
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  group"
        >
          <LucideChevronLeft className="w-5 h-5 group-hover:transform group-hover:-translate-x-1 transition-transform" />
          <span>Previous</span>
        </button>
        <span className="bg-black" />
        <button
          onClick={() => {
            navigate('/editor?tab=outputDetails');
          }}
          type="submit"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-green-400 bg-green-500 text-white shadow-sm hover:bg-green-400 disabled:opacity-50 disabled:pointer-events-none  group"
        >
          <span>Submit</span>
          <LucideCheck className="w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
