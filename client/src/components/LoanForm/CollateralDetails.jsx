import {
  LucideCheckCircle,
  LucideChevronLeft,
  LucideChevronRight,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';

export default function CollateralDetails({
  landValue,
  setLandValue,
  propertyValue,
  setPropertyValue,
  inventoryValue,
  setInventoryValue,
  equipmentValue,
  setEquipmentValue,
  liveStockValue,
  annualIncome,
  annualExpenditure,
  netCashFlow,
  taxPaymentsDue,
  lateTaxPayments,
  taxPaymentViolations,
  investments,
}) {
  const navigate = useNavigate();
  return (
    <section>
      <section className="flex items-center flex-col space-y-2 pt-5">
        <div className="p-4 bg-black relative z-10 border-black border shadow-xl rounded-xl md:p-10 ">
          <h3 className="text-xl font-bold text-gray-300 ">Aadhaar Data</h3>
          <div className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            dui at mi posuere aliquam. Donec sit amet felis sed metus
          </div>

          <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
            {/* List */}
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="flex space-x-3 items-center">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                  <LucideCheckCircle className="w-5 h-5" />
                </span>
                <span className="text-gray-300 whitespace-nowrap">
                  Live Stock Value
                </span>
                <span className="text-gray-200 text-xl ">
                  <CountUp
                    end={liveStockValue}
                    decimals={2}
                    prefix="₹"
                    separator=","
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4 bg-black relative z-10 border-black border shadow-xl rounded-xl md:p-10 ">
          <h3 className="text-xl font-bold text-gray-300 ">PAN Card Data</h3>
          <div className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            dui at mi posuere aliquam. Donec sit amet felis sed metus
          </div>

          <div className="mt-5  py-4 first:pt-0 last:pb-0 ">
            {/* List */}
            <ul className="space-y-2 w-full grid sm:grid-cols-2 gap-y-2 sm:gap-x-6  text-sm sm:text-base">
              <li className="flex space-x-3 items-center">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                  <LucideCheckCircle className="w-5 h-5" />
                </span>
                <span className="text-gray-300 whitespace-nowrap ">
                  Annual Income
                </span>
                <span className="text-gray-200 text-xl ">
                  <CountUp
                    end={annualIncome}
                    decimals={2}
                    prefix="₹"
                    separator=","
                  />
                </span>
              </li>
              <li className="flex space-x-3 items-center">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                  <LucideCheckCircle className="w-5 h-5" />
                </span>
                <span className="text-gray-300 whitespace-nowrap ">
                  Annual Expenditure
                </span>
                <span className="text-gray-200 text-xl ">
                  <CountUp
                    end={annualExpenditure}
                    decimals={2}
                    prefix="₹"
                    separator=","
                  />
                </span>
              </li>
              <li className="flex space-x-3 items-center">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                  <LucideCheckCircle className="w-5 h-5" />
                </span>
                <span className="text-gray-300 whitespace-nowrap ">
                  Net Cash Flow
                </span>
                <span className="text-gray-200 text-xl ">
                  <CountUp
                    end={netCashFlow}
                    decimals={2}
                    prefix="₹"
                    separator=","
                  />
                </span>
              </li>
              <li className="flex space-x-3 items-center">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                  <LucideCheckCircle className="w-5 h-5" />
                </span>
                <span className="text-gray-300 whitespace-nowrap ">
                  Tax Payments Due
                </span>
                <span className="text-gray-200 text-xl ">
                  <CountUp
                    end={taxPaymentsDue}
                    decimals={2}
                    prefix="₹"
                    separator=","
                  />
                </span>
              </li>
              <li className="flex space-x-3 items-center">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                  <LucideCheckCircle className="w-5 h-5" />
                </span>
                <span className="text-gray-300 whitespace-nowrap ">
                  Late Tax Payments
                </span>
                <span className="text-gray-200 text-xl ">
                  <CountUp end={lateTaxPayments} />
                </span>
              </li>
              <li className="flex space-x-3 items-center">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                  <LucideCheckCircle className="w-5 h-5" />
                </span>
                <span className="text-gray-300 whitespace-nowrap ">
                  Tax Payment Violations
                </span>
                <span className="text-gray-200 text-xl ">
                  <CountUp end={taxPaymentViolations} />
                </span>
              </li>
              <li className="flex space-x-3 items-center">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                  <LucideCheckCircle className="w-5 h-5" />
                </span>
                <span className="text-gray-300 whitespace-nowrap ">
                  Investments
                </span>
                <span className="text-gray-200 text-xl ">
                  <CountUp
                    end={investments}
                    decimals={2}
                    prefix="₹"
                    separator=","
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        id="personal-details"
        className="flex space-y-2  my-5 flex-col p-5 bg-black text-gray-400 rounded-xl  shadow-xl "
      >
        <div className="p-3">
          <div className="flex justify-between items-center">
            <label htmlFor="land-value" className="block text-md font-normal">
              Land Value
            </label>
          </div>
          <input
            type="number"
            id="land-value"
            className="py-3 px-4 block border  w-full border-gray-200  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none text-gray-600"
            placeholder="Land Value"
            value={landValue}
            onChange={(e) => setLandValue(e.target.value)}
          />
        </div>
        <div className="p-3">
          <div className="flex justify-between items-center">
            <label
              htmlFor="property-value"
              className="block text-md font-normal"
            >
              Property Value
            </label>
          </div>
          <input
            type="number"
            id="property-value"
            className="py-3 px-4 block border  w-full border-gray-200  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none text-gray-600"
            placeholder="Property Value"
            value={propertyValue}
            onChange={(e) => setPropertyValue(e.target.value)}
          />
        </div>
        <div className="p-3">
          <div className="flex justify-between items-center">
            <label
              htmlFor="inventory-value"
              className="block text-md font-normal"
            >
              Inventory Value
            </label>
          </div>
          <input
            type="number"
            id="inventory-value"
            className="py-3 px-4 block border  w-full border-gray-200  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none text-gray-600"
            placeholder="Inventory Value"
            value={inventoryValue}
            onChange={(e) => setInventoryValue(e.target.value)}
          />
        </div>
        <div className="p-3">
          <div className="flex justify-between items-center">
            <label
              htmlFor="equipment-value"
              className="block text-md font-normal"
            >
              Equipment Value
            </label>
          </div>
          <input
            type="number"
            id="equipment-value"
            className="py-3 px-4 block border  w-full border-gray-200  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none text-gray-600"
            placeholder="Equipment Value"
            value={equipmentValue}
            onChange={(e) => setEquipmentValue(e.target.value)}
          />
        </div>

        <div className="flex items-center space-x-2 pt-5 p-3">
          <button
            type="button"
            onClick={() => {
              navigate('/editor?tab=personalDetails');
            }}
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none group "
          >
            <LucideChevronLeft className="w-5 h-5 group-hover:transform group-hover:-translate-x-1 transition-transform" />
            <span>Previous</span>
          </button>
          <span className="bg-black" />
          <button
            onClick={() => {
              navigate('/editor?tab=predictionScore');
            }}
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  group"
          >
            <span>Next</span>
            <LucideChevronRight className="w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </section>
  );
}
