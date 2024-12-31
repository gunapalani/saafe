import React, { useState, useEffect } from "react";

const StepByStep = () => {
    const totalSteps = 3; // Total number of steps
    const [visibleStep, setVisibleStep] = useState(1); // Controls current step visibility
    const [isShowing, setIsShowing] = useState(true); // Toggles between show and hide phase

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleStep((prev) => {
                if (isShowing) {
                    if (prev < totalSteps) return prev + 1; // Show next step
                    setIsShowing(false); // Switch to hiding phase
                    return prev;
                } else {
                    if (prev > 1) return prev - 1; // Hide previous step
                    setIsShowing(true); // Switch to showing phase
                    return prev;
                }
            });
        }, 1000); // Interval for showing/hiding each step

        return () => clearInterval(timer); // Cleanup on component unmount
    }, [isShowing]);

    return (
        <div className="flex flex-col relative">
            {/* Step 1 */}
            <div
                className={`relative mb-16 transform transition-all duration-500 ${visibleStep >= 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            >
                <div className="w-10 h-10 bg-white text-white rounded-full flex items-center justify-center text-lg z-10 relative">
                    <img src="/login.svg" alt="Step 1" />
                </div>
                <div className="text-left ml-14 -mt-8">
                    <p className="font-semibold text-base">Log in/Sign up</p>
                    <p className="text-xs mt-1">Enter the OTP sent to your mobile.</p>
                </div>
            </div>

            {/* Border for Step 1 */}
            <div
                className={`absolute left-5 top-10 h-24 w-px border border-dashed border-white z-0 ${visibleStep >= 2 ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
            ></div>

            {/* Step 2 */}
            <div
                className={`relative mb-16 transform transition-all duration-500 ${visibleStep >= 2 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            >
                <div className="w-10 h-10 bg-white text-white rounded-full flex items-center justify-center text-lg z-10 relative">
                    <img src="/login.svg" alt="Step 2" />
                </div>
                <div className="text-left ml-14 -mt-8">
                    <p className="font-semibold text-base">Select accounts to share</p>
                    <p className="text-xs mt-1">Choose the accounts you'd like to share.</p>
                </div>
            </div>

            {/* Border for Step 2 */}
            <div
                className={`absolute left-5 top-36 h-24 w-px border border-dashed border-white z-0 ${visibleStep >= 3 ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
            ></div>

            {/* Step 3 */}
            <div
                className={`relative mb-16 transform transition-all duration-500 ${visibleStep >= 3 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            >
                <div className="w-10 h-10 bg-white text-white rounded-full flex items-center justify-center text-lg z-10 relative">
                    <img src="/login.svg" alt="Step 3" />
                </div>
                <div className="text-left ml-14 -mt-8">
                    <p className="font-semibold text-base">Review Consent</p>
                    <p className="text-xs mt-1">Approve or reject after reviewing the details.</p>
                </div>
            </div>
        </div>
    );
};

export default StepByStep;
