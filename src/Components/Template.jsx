import React from "react";
import frame from "../assets/frame.png";
import SignupForm from "./SignupForm.jsx";
import LoginForm from "./LoginForm.jsx";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div className="flex w-full max-w-full pr-8 pl-8 py-12 mx-auto gap-y-0 pb-6 overflow-x-hidden overflow-y-auto justify-between bg-richblack-900"> {/* Changed bg-richblack-900 to bg-gray-900 */}
      <div className="w-11/12 max-w-[450px] mx-0 text-white">
        <h1 className="text-gray-100 font-semibold text-[1.875rem] leading-[2.375rem]">{title} {/* Changed text-richblack-5 to text-gray-100 */}
        </h1>
        <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
          <span className="text-gray-400">{desc1}</span> {/* Changed text-richblack-100 to text-gray-400 */}
          <span className="text-blue-200 italic">{desc2}</span> {/* Changed text-blue-100 to text-blue-200 */}
        </p>

        {formType === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-gray-700"></div> {/* Changed bg-richblack-700 to bg-gray-700 */}
          <p className="text-gray-700 font-medium leading-[1.375rem]" style={{ color: 'white' }}>OR</p> {/* Changed text-richblack-700 to text-gray-700 */}
          <div className="h-[1px] w-full bg-gray-700"></div> {/* Changed bg-richblack-700 to bg-gray-700 */}
        </div>

        <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-gray-200 border-gray-700 border px-[12px] py-[8px] gap-x-2 mt-6"> {/* Changed text-richblack-100 and border-richblack-700 to text-gray-200 and border-gray-700 */}
          <FcGoogle />
          <p style={{ color: 'white' }}>Sign Up with Google</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frame}
          alt="pattern"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="pattern"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4 "
        />
      </div>
    </div>
  );
};

export default Template;
