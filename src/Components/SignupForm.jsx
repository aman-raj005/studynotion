import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };
    console.log(accountData);

    navigate("/dashboard");
  }

  return (
    <div  className="h-full">
      <div className="flex bg-gray-800 p-1 gap-x-1 rounded-full max-w-max">
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-gray-900 text-gray-100"
              : "bg-transparent text-gray-400"
          } py-2 px-5 rounded-full transition-all`}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-gray-900 text-gray-100"
              : "bg-transparent text-gray-400"
          } py-2 px-5 rounded-full transition-all`}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4">
          <label htmlFor="firstName" className="w-full">
            <p className="text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-500">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter First Name"
              onChange={changeHandler}
              value={formData.firstName}
              name="firstName"
              id="firstName"
              className="bg-gray-800 rounded-[0.75rem] w-full p-[12px] text-gray-100"
            />
          </label>

          <label htmlFor="lastName" className="w-full">
            <p className="text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-500">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={formData.lastName}
              name="lastName"
              id="lastName"
              className="bg-gray-800 rounded-[0.75rem] w-full p-[12px] text-gray-100"
            />
          </label>
        </div>

        <label htmlFor="email" className="w-full">
          <p className="text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem]">
            Email Address
            <sup className="text-pink-500">*</sup>
          </p>
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={formData.email}
            onChange={changeHandler}
            className="bg-gray-800 rounded-[0.75rem] w-full p-[12px] text-gray-100"
            name="email"
            id="email"
          />
        </label>

        <div className="flex gap-x-4">
          <label htmlFor="createPassword" className="w-full relative">
            <p className="text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem]">
              Create Password
              <sup className="text-pink-500">*</sup>
            </p>
            <input
              type={showCreatePass ? "text" : "password"}
              required
              placeholder="Enter Password"
              onChange={changeHandler}
              value={formData.password}
              name="password"
              id="createPassword"
              className="bg-gray-800 rounded-[0.75rem] w-full p-[12px] text-gray-100"
            />
            <span
              onClick={() => setShowCreatePass(!showCreatePass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showCreatePass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label htmlFor="confirmPassword" className="w-full relative">
            <p className="text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem]">
              Confirm Password
              <sup className="text-pink-500">*</sup>
            </p>
            <input
              type={showConfirmPass ? "text" : "password"}
              required
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={formData.confirmPassword}
              name="confirmPassword"
              id="confirmPassword"
              className="bg-gray-800 rounded-[0.75rem] w-full p-[12px] text-gray-100"
            />
            <span
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showConfirmPass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button
          className="py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-gray-900 w-full"
          style={{ backgroundColor: "yellow" }}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
