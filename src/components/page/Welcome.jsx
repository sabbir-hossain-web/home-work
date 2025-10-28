import { useState } from "react";
import { useNavigate } from "react-router";

export default function Welcome() {
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    if (agree) {
      navigate("/Login");
    } else {
      setError(true);
    }
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-lg p-30 w-200 text-center">
      
        <div className="flex justify-center mb-4">
          <h6 className="rounded-full text-[50px] text-white bg-blue-500">logo</h6>
        </div>

       
        <h2 className="text-[40px] font-bold mb-6">Welcome to Post-Man</h2>

    
        <div className="flex items-center justify-center mb-6">
          <input
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={() => {
              setAgree(!agree);
              setError(false);
            }}
            className="w-5 h-5 accent-blue-600 mr-2"
          />
          <label
            htmlFor="agree"
            className={`text-[20px] ${
              error ? "text-red-600 font-semibold" : "text-gray-800"
            }`}
          >
            I agree with all terms and conditions
          </label>
        </div>

      
        <button
          onClick={handleStart}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}