import React, { useState, useEffect } from 'react';
// import './Editor.css';
import axios from 'axios';
import { useUser } from './UserContext';
import PersonalDetails from './components/LoanForm/PersonalDetails';
import CollateralDetails from './components/LoanForm/CollateralDetails';
import PredictionScore from './components/LoanForm/PredictionScore';
import OutputData from './components/LoanForm/OutputData';
import { useLocation, useNavigate } from 'react-router-dom';

//import makeApiCall from '../../api/cloudconnect';



const LoanApplicationForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(
    location.search.split('=')[1] || 'personalDetails'
  );

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [panCardNumber, setPanCardNumber] = useState('');
  const [aadharCardNumber, setAadhaarCardNumber] = useState('');
  const [propertyValue, setPropertyValue] = useState('');
  const [equipValue, setEquipValue] = useState('');
  const [inventoryValue, setInventoryValue] = useState('');
  const [landValue, setLandValue] = useState('');
  const [aadhaarData, setAadhaarData] = useState({});
  const [panData, setPanData] = useState({});
  const [cropyieldscore, setcropyieldscore] = useState('');
  const [assessmentscore, setassessmentscore] = useState('');
  const [creditWorthinessScore, setCreditWorthinessScore] = useState(null);
  const [image1Visible, setImage1Visible] = useState(false);
  const [image2Visible, setImage2Visible] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create an object with form data
      const formData = {
        name,
        age,
        panCardNumber,
        aadharCardNumber,
        propertyValue,
        equipValue,
        inventoryValue,
        landValue,
        cropyieldscore,
        assessmentscore,
      };

      // Send the form data to your backend for database storage
      const response = await axios.post('http://localhost:4000/', formData);

      // Handle the response if needed
      console.log(response.data.message);

      // Clear form fields after submission
      setName('');
      setAge('');
      setPanCardNumber('');
      setAadhaarCardNumber('');
      //setLivestockValue("");
      setLandValue('');
      setPropertyValue('');
      setEquipValue('');
      setInventoryValue('');
      setassessmentscore('');
      setcropyieldscore('');

      // Fetch data after submitting the form
      setImage1Visible(true);
      setImage2Visible(true);

      const calculateCreditWorthiness = async () => {
        // const x =
        //   0.35 * panData.annualIncome +
        //   0.5 *
        //     (aadhaarData.livestockValue +
        //       Number(inventoryValue) +
        //       Number(propertyValue) +
        //       Number(equipValue) +
        //       Number(landValue)) +
        //   0.15 * panData.investments;

        // const RC = ((x - 110112) * 100) / (489558 - 110112);

        // const calculatedScore =
        //   300 +
        //   0.6 *
        //     (0.15 * Number(assessmentscore) +
        //       0.3 * Number(cropyieldscore) +
        //       0.3 * RC +
        //       0.2 * Number(panData.netCashFlow) -
        //       0.05 * Number(panData.taxPaymentViolations)) *
        //     0.05;

        let data = {
          
          income: panData.annualIncome,
          collateral:
            aadhaarData.livestockValue +
            Number(inventoryValue) +
            Number(propertyValue) +
            Number(equipValue) +
            Number(landValue),
          investments: panData.investments,
          netcashflow: panData.netCashFlow,
          cropyieldscore: cropyieldscore,
          latepayments: panData.lateTaxPayments,
          assessmentscore: assessmentscore,
        };
        let datanew={
          "instances": [
            {
              "Annual_Income": Number(panData.annualIncome),
              "Assessment_Score": assessmentscore.toString(),
              "Collateral": Number(aadhaarData.livestockValue +
              Number(inventoryValue) +
              Number(propertyValue) +
              Number(equipValue) +
              Number(landValue)),
              "Crop_Yield_Score": Number(cropyieldscore),
              "Investments": Number(panData.investments),
              "Late_Payments": panData.lateTaxPayments.toString(),
              "Net_Cash_Flow": Number(panData.netCashFlow)
            }
          ]
        };

       //await makeApiCall(datanew).then((res) => {setCreditWorthinessScore(res)});

        const modelRes = await axios
          .post(`http://localhost:4000/recommend`, datanew)
          .then((res) => {
            console.log(res.data);
            return res.data;
          });

        // Set the calculated score to the state
        setCreditWorthinessScore(modelRes)
        
      };
      calculateCreditWorthiness();
      fetchData();
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  const fetchData = async () => {
    let aadhaarData, panData; // Declare at the beginning

    try {
      const aadhaarResponse = await axios.get(
        `http://localhost:4000/get-aadhaar-data/${aadharCardNumber}`
      );
      console.log('Fetched aadhaar data successfully');
      aadhaarData = aadhaarResponse.data;
      console.log(`live stock value us ${aadhaarData.livestockValue}`);
    } catch (error) {
      console.log(error);
      console.log('Aadhaar data not fetched');
    }

    try {
      const panResponse = await axios.get(
        `http://localhost:4000/get-pan-data/${panCardNumber}`
      );
      console.log('Fetched pan data successfully');
      panData = panResponse.data;
    } catch (error) {
      console.log(error);
      console.log('Pan data not found');
    }

    // Set state with retrieved data
    setAadhaarData(aadhaarData);
    setPanData(panData);
    setName(aadhaarData?.name || panData?.name || '');
    setAge(aadhaarData?.age || panData?.age || '');
    // ... Set other fields based on retrieved data
  };

  useEffect(() => {
    if (aadharCardNumber && panCardNumber) {
      fetchData();
    }
  }, [aadharCardNumber, panCardNumber, fetch]);

  useEffect(() => {
    if (location.search.split('=')[1]) {
      setActiveTab(location.search.split('=')[1]);
    }
  }, [location.search]);

  return (
    <div className="w-full min-h-screen  text-gray-700 mx-auto bg-gradient  ">
      <div className="h-3" />
      <header className="rounded-3xl mx-20  bg-black text-gray-300 mb-10 text-xl flex justify-center items-center font-bold text-center p-2 px-10">
        <h2 className="text-gradient font-bold text-2xl text-center py-3  ">
          Loan Application Form
        </h2>
      </header>
      <div className="max-w-6xl mx-auto  pb-20">
        <div className="grid grid-cols-3 gap-10">
          <div
            className={`
          ${
            activeTab === 'outputDetails'
              ? 'col-span-3 max-w-3xl mx-auto'
              : 'col-span-2'
          }
          `}
          >
            <div className="container">
              <form onSubmit={handleSubmit}>
                {activeTab === 'personalDetails' && (
                  <PersonalDetails
                    name={name}
                    setName={setName}
                    age={age}
                    setAge={setAge}
                    panCardNumber={panCardNumber}
                    setPanCardNumber={setPanCardNumber}
                    aadharCardNumber={aadharCardNumber}
                    setAadhaarCardNumber={setAadhaarCardNumber}
                  />
                )}

                {activeTab === 'predictionScore' && (
                  <PredictionScore
                    cropyieldscore={cropyieldscore}
                    setcropyieldscore={setcropyieldscore}
                    assessmentscore={assessmentscore}
                    setassessmentscore={setassessmentscore}
                  />
                )}

                {activeTab === 'collateralDetails' && (
                  <CollateralDetails
                    landValue={landValue}
                    setLandValue={setLandValue}
                    propertyValue={propertyValue}
                    setPropertyValue={setPropertyValue}
                    inventoryValue={inventoryValue}
                    setInventoryValue={setInventoryValue}
                    equipmentValue={equipValue}
                    setEquipmentValue={setEquipValue}
                    liveStockValue={aadhaarData?.livestockValue}
                    annualIncome={panData?.annualIncome}
                    annualExpenditure={panData?.annualExpenditure}
                    netCashFlow={panData?.netCashFlow}
                    taxPaymentsDue={panData?.taxPaymentsDue}
                    lateTaxPayments={panData?.lateTaxPayments}
                    taxPaymentViolations={panData?.taxPaymentViolations}
                    investments={panData?.investments}
                  />
                )}

                {activeTab === 'outputDetails' && (
                  <OutputData
                    creditWorthinessScore={creditWorthinessScore}
                    image1Visible={image1Visible}
                    image2Visible={image2Visible}
                  />
                )}
              </form>
            </div>
          </div>
          {activeTab !== 'outputDetails' && (
            <div className="col-span-1">
              <>
                {/* Timeline */}
                <div>
                  {/* Heading */}
                  <div className="ps-2 my-2 first:mt-0">
                    <h3 className="text-xs font-medium uppercase text-gray-800">
                      Start
                    </h3>
                  </div>
                  {/* End Heading */}
                  {/* Item */}
                  <div
                    onClick={() => {
                      setActiveTab('personalDetails');
                      navigate('/editor?tab=personalDetails');
                    }}
                    className="flex gap-x-3 cursor-pointer"
                  >
                    {/* Icon */}
                    <div
                      className={`relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] ${
                        activeTab === 'personalDetails' ||
                        activeTab === 'collateralDetails' ||
                        activeTab === 'predictionScore'
                          ? 'after:bg-purple-400'
                          : 'after:bg-gray-200'
                      } `}
                    >
                      <div className="relative z-10 size-7 flex justify-center items-center">
                        <span
                          className={`size-7 flex justify-center items-center flex-shrink-0 ${
                            activeTab === 'personalDetails' ||
                            activeTab === 'collateralDetails' ||
                            activeTab === 'predictionScore'
                              ? 'bg-purple-400 text-white'
                              : 'bg-gray-100 text-gray-800'
                          } font-medium  rounded-full `}
                        >
                          1
                        </span>
                      </div>
                    </div>
                    {/* End Icon */}
                    {/* Right Content */}
                    <div className="grow pt-0.5 pb-8">
                      <h3 className="flex gap-x-1.5 font-semibold text-gray-800 ">
                        <svg
                          className="flex-shrink-0 size-4 mt-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1={16} x2={8} y1={13} y2={13} />
                          <line x1={16} x2={8} y1={17} y2={17} />
                          <line x1={10} x2={8} y1={9} y2={9} />
                        </svg>
                        Personal Information
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                    {/* End Right Content */}
                  </div>
                  <div
                    onClick={() => {
                      setActiveTab('collateralDetails');
                      navigate('/editor?tab=collateralDetails');
                    }}
                    className="flex gap-x-3 cursor-pointer"
                  >
                    {/* Icon */}
                    <div
                      className={`relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] ${
                        activeTab === 'collateralDetails' ||
                        activeTab === 'predictionScore'
                          ? 'after:bg-purple-400'
                          : 'after:bg-gray-200'
                      } `}
                    >
                      <div className="relative z-10 size-7 flex justify-center items-center">
                        <span
                          className={`size-7 flex justify-center items-center flex-shrink-0 ${
                            activeTab === 'collateralDetails' ||
                            activeTab === 'predictionScore'
                              ? 'bg-purple-400 text-white'
                              : 'bg-gray-100 text-gray-800'
                          } font-medium text-gray-800 rounded-full `}
                        >
                          2
                        </span>
                      </div>
                    </div>
                    {/* End Icon */}
                    {/* Right Content */}
                    <div className="grow pt-0.5 pb-8">
                      <h3 className="flex gap-x-1.5 font-semibold text-gray-800 ">
                        <svg
                          className="flex-shrink-0 size-4 mt-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1={16} x2={8} y1={13} y2={13} />
                          <line x1={16} x2={8} y1={17} y2={17} />
                          <line x1={10} x2={8} y1={9} y2={9} />
                        </svg>
                        Collateral Details
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                    {/* End Right Content */}
                  </div>
                  <div
                    onClick={() => {
                      setActiveTab('predictionScore');
                      navigate('/editor?tab=predictionScore');
                    }}
                    className="flex gap-x-3 cursor-pointer"
                  >
                    {/* Icon */}
                    <div
                      className={`relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] ${
                        activeTab === 'predictionScore'
                          ? 'after:bg-purple-400'
                          : 'after:bg-gray-200'
                      } `}
                    >
                      <div className="relative z-10 size-7 flex justify-center items-center">
                        <span
                          className={`size-7 flex justify-center items-center flex-shrink-0 ${
                            activeTab === 'predictionScore'
                              ? 'bg-purple-400 text-white'
                              : 'bg-gray-100 text-gray-800'
                          } font-medium text-gray-800 rounded-full `}
                        >
                          3
                        </span>
                      </div>
                    </div>
                    {/* End Icon */}
                    {/* Right Content */}
                    <div className="grow pt-0.5 pb-8">
                      <h3 className="flex gap-x-1.5 font-semibold text-gray-800 ">
                        <svg
                          className="flex-shrink-0 size-4 mt-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1={16} x2={8} y1={13} y2={13} />
                          <line x1={16} x2={8} y1={17} y2={17} />
                          <line x1={10} x2={8} y1={9} y2={9} />
                        </svg>
                        Prediction Scores
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                    {/* End Right Content */}
                  </div>

                  <div className="ps-2 my-2 first:mt-0">
                    <h3 className="text-xs font-medium uppercase text-gray-800">
                      End
                    </h3>
                  </div>
                  {/* End Heading */}
                  {/* Item */}

                  {/* End Item */}
                </div>
                {/* End Timeline */}
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanApplicationForm;
