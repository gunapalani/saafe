import React, { useState, useEffect } from "react";

const StepByStep = () => {
    const totalSteps = 3;
    const [visibleStep, setVisibleStep] = useState(1);
    const [isShowing, setIsShowing] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleStep((prev) => {
                if (isShowing) {
                    if (prev < totalSteps) return prev + 1;
                    setIsShowing(false);
                    return prev;
                } else {
                    if (prev > 1) return prev - 1;
                    setIsShowing(true);
                    return prev;
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isShowing]);

    return (
        <div className="flex flex-col relative">
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

            <div
                className={`absolute left-5 top-10 h-24 w-px border border-dashed border-white z-0 ${visibleStep >= 2 ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
            ></div>

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

            <div
                className={`absolute left-5 top-36 h-24 w-px border border-dashed border-white z-0 ${visibleStep >= 3 ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
            ></div>

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
