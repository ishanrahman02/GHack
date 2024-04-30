import { LucidePlay } from 'lucide-react';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

export default function OutputData({
  creditWorthinessScore,
  image1Visible,
  image2Visible,
}) {
  const [leftValue, setLeftValue] = useState(
    Math.round((creditWorthinessScore / 1000) * 100)
  );

  useEffect(() => {
    setLeftValue(Math.round((creditWorthinessScore / 1000) * 100));
  }, [creditWorthinessScore]);
  return (
    <section
      id="output-details"
      className="flex flex-col p-5 space-y-2 text-gray-400 shadow-xl bg-black rounded-xl "
    >
      <div>
        <h2 className="text-2xl font-semibold text-center">Credit Score</h2>
        <span className="flex flex-col items-center justify-center pt-5 pb-8 space-y-2 text-6xl font-bold">
          <CountUp end={creditWorthinessScore} duration={5} />

          <div className="relative pt-5 w-72 ">
            <LucidePlay
              className={`w-5 h-5 rotate-90 text-white absolute -bottom-2 transform -translate-x-1/2 -translate-y-1/2 `}
              style={{ left: leftValue + '%' }}
            />
            <div className="h-2 w-72 rounded-xl bg-gradient-to-r from-red-500 via-orange-400 to-green-500" />
          </div>
        </span>

        {image1Visible && (
          <div className="image-container">
            <figure>
              <img
                src="image1.png"
                alt="Credit Worthiness Score Prediction"
                className="rounded-md image"
              />
              <figcaption>Credit Worthiness Prediction</figcaption>
            </figure>
          </div>
        )}

        {image2Visible && (
          <div className="image-container">
            <figure>
              <img
                src="image2.png"
                alt="Anomalies Detected in the Account"
                className="rounded-md image"
              />
              <figcaption>Anomalies Dectected in account</figcaption>
            </figure>
          </div>
        )}
        <a
          href="/Contract_Portal.html"
          className="inline-flex items-center justify-center px-4 py-3 mt-5 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none group"
        >
          Contract Generation
        </a>
      </div>
    </section>
  );
}
