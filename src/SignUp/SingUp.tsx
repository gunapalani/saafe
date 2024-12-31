import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HashLoader } from 'react-spinners';

const SignUp: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [otpScreen, setOtpScreen] = useState(false);
    const [otp, setOtp] = useState<string[]>(['', '', '', '']);
    const [resendTimer, setResendTimer] = useState(30);
    const [dummyOtp] = useState(['1', '2', '3', '4']);
    const [selectedLanguage, setSelectedLanguage] = useState("English");

    useEffect(() => {
        if (resendTimer > 0 && otpScreen) {
            const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [resendTimer, otpScreen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!otpScreen) {
            setLoading(true);
            setTimeout(() => {
                console.log(`Phone Number: ${phoneNumber}`);
                setLoading(false);
                setOtpScreen(true);
                toast.success('OTP sent Successfully ');
            }, 2000);
        } else {
            if (otp.join('') === dummyOtp.join('')) {
                toast.success('OTP Verified Successfully!');
            } else {
                toast.error('Invalid OTP, please try again!');
            }
        }
    };

    const handleOtpChange = (index: number, value: string) => {
        if (value.match(/^\d?$/)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value && index < 3) {
                const nextInput = document.getElementById(`otp-${index + 1}`);
                nextInput?.focus();
            }
        }
    };

    const handleResendOtp = () => {
        if (resendTimer === 0) {
            setResendTimer(30);
            toast.info('OTP resent successfully!');
        }
    };

    const languages = ["English", "Spanish", "French", "German", "Chinese"];

    return (
        <div className="lap:h-[100vh] tab:bg-[#F2F4F7] lap:bg-[#F2F4F7]  items-center lap:flex justify-center lap:px-5 lg:px-0">
            {loading && (
                <div className="absolute inset-0 bg-black bg-opacity-80 z-10">
                    <div
                        role="status"
                        className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
                    >
                        <HashLoader color={'#008E9A'} loading={loading} size={50} />
                    </div>
                </div>
            )}
            <div className='tab:py-10 lap:py-0'>
                <div className="tab:shadow-2xl tab:bg-white lap:bg-white tab:mx-10 lap:mx-56  sm:rounded-lg lap:flex justify-center lap:flex-1">
                    <div className="bg-gradient-to-tr from-[#008E9A] to-[#00474D] tab:rounded-t-lg lap:rounded-l-lg text-center lap:flex lap:w-2/5 p-6 lap:p-0">

                        <div className='hidden mobile:block'>
                            <div className='flex gap-2 my-3'>
                                <div className="custom-border"></div>

                                <div className='border-b-4 border-[#D0D5DD33] w-32'></div>
                                <div className='border-b-4 border-[#D0D5DD33] w-32'></div>
                            </div>
                        </div>
                        <div className='hidden tab:block mb-2'>
                            <div className='flex justify-between'>
                                <div className='flex'><div><img src="/globe-white.svg" alt="globe" /></div><div><select
                                    className="w-full px-1 cursor-pointer rounded-lg font-medium text-sm focus:outline-none bg-transparent text-white focus:border-gray-400 focus:bg-white"
                                    value={selectedLanguage}
                                    onChange={(e) => setSelectedLanguage(e.target.value)}
                                >
                                    {languages.map((lang) => (
                                        <option key={lang} value={lang}>
                                            {lang}
                                        </option>
                                    ))}
                                </select></div></div>
                                <div><img className='-mt-2 cursor-pointer' src='close-white.svg' alt='close' /></div>
                            </div>
                        </div>
                        <div className='lap:my-10'>
                            <div className='text-white text-2xl font-semibold px-1 lap:p-6 text-left'>Share your financial information to ICICI Bank</div>
                            <div className="py-2 lap:p-5 text-white">
                                <div className="flex flex-col relative">
                                    <div className="relative mb-16">
                                        <div className="w-10 h-10 bg-white text-white rounded-full flex items-center justify-center text-lg z-10 relative">
                                            <img className='' src="/login.svg" alt="Step 1" />
                                        </div>
                                        <div className=" text-left ml-14 -mt-8">
                                            <p className='font-semibold text-base'>Log in/Sign up</p>
                                            <p className='text-xs mt-1'>Enter the OTP sent to your mobile.</p>
                                        </div>
                                        <div className="absolute left-5 top-5 h-24 w-px border border-dashed border-white z-0"></div>
                                    </div>
                                    <div className="relative mb-16">
                                        <div className="w-10 h-10 bg-white text-white rounded-full flex items-center justify-center text-lg z-10 relative">
                                            <img src="/login.svg" alt="Step 2" />
                                        </div>
                                        <div className=" text-left ml-14 -mt-8">
                                            <p className='font-semibold text-base'>Select accounts to share</p>
                                            <p className='text-xs mt-1'>Choose the accounts you'd like to share.</p>
                                        </div>
                                        <div className="absolute left-5 top-5 h-24 w-px border border-dashed border-white z-0"></div>
                                    </div>
                                    <div className="relative mb-16">
                                        <div className="w-10 h-10 bg-white text-white rounded-full flex items-center justify-center text-lg z-10 relative">
                                            <img src="/login.svg" alt="Step 3" />
                                        </div>
                                        <div className=" text-left ml-14 -mt-8">
                                            <p className='font-semibold text-base'>Review Consent</p>
                                            <p className='text-xs mt-1'>Approve or reject after reviewing the details.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lap:w-3/5 ">
                        <div className='hidden lap:block'>
                            <div className='flex justify-between'>
                                <div className='flex'><div><img src="/globe.svg" alt="globe" /></div><div><select
                                    className="w-full px-1 cursor-pointer rounded-lg font-medium text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    value={selectedLanguage}
                                    onChange={(e) => setSelectedLanguage(e.target.value)}
                                >
                                    {languages.map((lang) => (
                                        <option key={lang} value={lang}>
                                            {lang}
                                        </option>
                                    ))}
                                </select></div></div>
                                <div><img className='-mt-2 cursor-pointer' src='close.svg' alt='close' /></div>
                            </div>
                        </div>
                        <div className='pl-3 lap:pl-0 lap:mt-24'>
                            <div>
                                <div className="lap:text-center">
                                    <div className='lap:mx-auto flex justify-center lap:my-3'><img className='hidden lap:block' src="/branding.svg" alt="branding" /></div>
                                    <h1 className="text-xl xl:text-3xl font-semibold text-[#344054]">
                                        Sign up for saafe
                                    </h1>
                                    <p className="text-[12px] text-[#667085] my-2">
                                        {otpScreen
                                            ? `Enter the OTP we have sent to +91 ${phoneNumber}`
                                            : 'Enter your phone number'}
                                    </p>
                                </div>
                                <form className="w-full lap:flex-1 mt-3 lap:mt-8  transition-all duration-300 ease-in-out" onSubmit={handleSubmit}>
                                    <div className="lap:mx-auto lap:max-w-xs flex flex-col gap-4">
                                        {!otpScreen && (
                                            <input
                                                className="w-full px-5 py-3 rounded-lg font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                type="tel"
                                                name="phoneNumber"
                                                placeholder="Enter your phone number"
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                required
                                            />
                                        )}
                                        {otpScreen && (
                                            <div className="flex gap-5 lap:gap-8 lap:justify-center justify-start">
                                                {otp.map((digit, index) => (
                                                    <input
                                                        key={index}
                                                        id={`otp-${index}`}
                                                        className="w-10 h-10 text-center rounded-lg border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                                                        type="text"
                                                        value={digit}
                                                        maxLength={1}
                                                        onChange={(e) =>
                                                            handleOtpChange(index, e.target.value)
                                                        }
                                                    />
                                                ))}
                                            </div>
                                        )}
                                        {otpScreen && (
                                            <div className="text-left lap:ml-8 text-[#667085] text-[12px]">
                                                {resendTimer > 0 ? (
                                                    `Resend code in 00:${resendTimer < 10 ? `0${resendTimer}` : resendTimer}s`
                                                ) : (
                                                    <button
                                                        type="button"
                                                        onClick={handleResendOtp}
                                                        className="text-[#008E9A] hover:underline"
                                                    >
                                                        Resend OTP
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                        {otpScreen && (<div className='flex gap-1'>
                                            <input type="checkbox" checked className="accent-[#008E9A]" />
                                            <p className="text-[11px] text-[#667085]"> I agree to the <span className='text-[#008E9A] underline cursor-pointer'>Terms and Conditions</span> and <span className='text-[#008E9A] underline cursor-pointer'>Privacy Policy</span></p>
                                        </div>)}
                                        <button
                                            type="submit"
                                            className=" tracking-wide font-semibold bg-[#008E9A] text-gray-100 w-full py-4 rounded-lg hover:bg-[#fcb034] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                        >
                                            <span>{otpScreen ? 'Verify OTP' : 'Submit'}</span>
                                        </button>
                                        <div className='lap:hidden w-full'><div className=' w-full flex justify-center items-center lap:my-3 text-[#667085] text-xs'><div>Powerd By</div><div><img className=' w-4 h-4' src="/branding.svg" alt="branding" /></div><div className='text-[#008E9A]'>Saafe</div></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
