import React from "react";
import img from "../assets/badak-logo.png";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./formAuth/FormikControl";
import { Link } from "react-router-dom";

function Registercard() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().label("Enter first name").required("Required"),
    lastName: Yup.string().label(" Enter last name ").required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto w-20 h-20 w-auto" src={img} alt="Workflow" />
          <h2 className=" text-center text-xl leading-9 font-bold text-gray-900">
            Create a new account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return <Form>
                  <div>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <FormikControl
                        control="input"
                        type="firstName"
                        name="firstName"
                        placeholder="first name"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                      <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <FormikControl
                        control="input"
                        type="lastName"
                        name="lastName"
                        placeholder="last name"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                      <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <FormikControl
                        control="input"
                        type="email"
                        name="email"
                        placeholder="user@example.com"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5
                "
                      />
                      <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="mt-1 rounded-md shadow-sm">
                      <FormikControl
                        control="input"
                        type="password"
                        name="password"
                        placeholder="password"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="mt-1 rounded-md shadow-sm">
                      <FormikControl
                        control="input"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="mt-2 ">
                    <span className="block w-full rounded-md shadow-sm">
                      <button
                        type="submit"
                        disabled={!formik.isValid}
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                      >
                        <Link to="/login">Register</Link>
                      </button>
                    </span>
                    <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                      Or
                      <br />
                      <Link
                        to="/login"
                        className="text-sm text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                      >
                        login to your account
                      </Link>
                    </p>
                  </div>
                </Form>;
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registercard;
