import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required elements
ChartJS.register(ArcElement, Tooltip, Legend);

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTenure, setLoanTenure] = useState(1);

  const calculateEMI = () => {
    const monthlyInterestRate = interestRate / 12 / 100;
    const tenureMonths = loanTenure * 12;
    const emi =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, tenureMonths)) /
      (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);
    const totalPayment = emi * tenureMonths;
    const totalInterest = totalPayment - loanAmount;

    return { emi, totalInterest, totalPayment };
  };

  const { emi, totalInterest, totalPayment } = calculateEMI();

  const data = {
    labels: ["Principal Loan Amount", "Total Interest"],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ["#4CAF50", "#FF8C00"],
      },
    ],
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">
        EMI Calculator
      </h2>

      {/* Loan Amount */}
      <div className="mb-6">
        <label className="block font-medium mb-2">Home Loan Amount</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
        <input
          type="range"
          min="0"
          max="200000000"
          step="1000000"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          className="w-full mt-2"
        />
      </div>

      {/* Interest Rate */}
      <div className="mb-6">
        <label className="block font-medium mb-2">Interest Rate (%)</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
        <input
          type="range"
          min="5"
          max="20"
          step="0.1"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="w-full mt-2"
        />
      </div>

      {/* Loan Tenure */}
      <div className="mb-6">
        <label className="block font-medium mb-2">Loan Tenure (Years)</label>
        <input
          type="number"
          value={loanTenure}
          onChange={(e) => setLoanTenure(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
        <input
          type="range"
          min="0"
          max="30"
          value={loanTenure}
          onChange={(e) => setLoanTenure(Number(e.target.value))}
          className="w-full mt-2"
        />
      </div>

      {/* EMI and Total Payment Display */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-xl font-semibold">Loan EMI</h3>
          <p className="text-2xl font-bold text-green-600">
            ₹ {emi.toFixed(0)}
          </p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-xl font-semibold">Total Interest Payable</h3>
          <p className="text-2xl font-bold text-orange-600">
            ₹ {totalInterest.toFixed(0)}
          </p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-xl font-semibold">
            Total Payment (Principal + Interest)
          </h3>
          <p className="text-2xl font-bold text-blue-600">
            ₹ {totalPayment.toFixed(0)}
          </p>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="mt-8 p-4 bg-white rounded shadow">
        <h3 className="text-xl font-semibold text-center">
          Break-up of Total Payment
        </h3>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default EmiCalculator;
