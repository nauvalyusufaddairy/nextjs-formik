"use client";
import React, { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { Field, Form, Formik, FormikProps, ErrorMessage } from "formik";
import { useValidationSchema } from "@/hooks/useValidationSchema";

export default function SignUpWithEmail() {
  const { registrationSchema } = useValidationSchema();
  const { signup, errorMessage } = useAuth();
  const initial = {
    email: false,
    password: false,
    confirm_password: false,
  };
  const initialUserValue: RegisterValues = {
    confirm_password: "",
    email: "",
    password: "",
  };
  const [onfocus, setOnfocus] = useState(initial);

  return (
    <Formik
      initialValues={initialUserValue}
      onSubmit={signup}
      validationSchema={registrationSchema}
    >
      {({
        isSubmitting,

        handleSubmit,
        errors,
        touched,
      }: FormikProps<RegisterValues>) => (
        <Form onSubmit={handleSubmit}>
          {" "}
          <div className="w-screen h-screen ">
            <div className="w-[350px] h-[568px] relative mx-auto mt-[77px] items-center flex flex-col rounded-lg px-[32px] py-[42px] shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
              <div className="text-3xl font-[500]">Email Registration</div>
              <div className="w-full mt-[36px] flex-col gap-y-8">
                <div
                  className={`w-full h-[42px] rounded-2xl ${
                    onfocus.email ? "border-teal-600 border-[2px]" : ""
                  } border-black border-[1.8px]  px-[2px] py-[2px] flex flex-row items-center gap-x-12 hover:cursor-pointer`}
                >
                  <Field
                    name="email"
                    onBlur={() => setOnfocus({ ...onfocus, email: false })}
                    onFocus={() => setOnfocus({ ...onfocus, email: true })}
                    placeholder="email"
                    type="text"
                    className="w-full h-full border-none outline-none px-4 py-2  rounded-2xl font-[500] text-black "
                  />
                </div>
                {errors.email && touched.email ? (
                  <>
                    {" "}
                    <ErrorMessage
                      component={"div"}
                      name="email"
                      className=" text-orange-300"
                    />
                  </>
                ) : null}
                <div
                  className={`w-full mt-4 h-[42px] rounded-2xl ${
                    onfocus.password ? "border-teal-600 border-[2px]" : ""
                  } border-black border-[1.8px]  px-[2px] py-[2px] flex flex-row items-center gap-x-12 hover:cursor-pointer`}
                >
                  <Field
                    name="password"
                    onBlur={() => setOnfocus({ ...onfocus, password: false })}
                    onFocus={() => setOnfocus({ ...onfocus, password: true })}
                    placeholder="password"
                    type="password"
                    className="w-full h-full border-none outline-none px-4 py-2  rounded-2xl font-[500] text-black "
                  />
                  {errors.password && touched.password ? (
                    <>
                      <ErrorMessage
                        component={"div"}
                        name="password"
                        className=" text-orange-300"
                      />
                    </>
                  ) : null}
                </div>
                <div
                  className={`w-full mt-4 h-[42px] rounded-2xl ${
                    onfocus.confirm_password
                      ? "border-teal-600 border-[2px]"
                      : ""
                  } border-black border-[1.8px]  px-[2px] py-[2px] flex flex-row items-center gap-x-12 hover:cursor-pointer`}
                >
                  <Field
                    name="confirm_password"
                    onBlur={() =>
                      setOnfocus({ ...onfocus, confirm_password: false })
                    }
                    onFocus={() =>
                      setOnfocus({ ...onfocus, confirm_password: true })
                    }
                    placeholder="confirm password"
                    type="password"
                    className="w-full h-full border-none outline-none px-4 py-2  rounded-2xl font-[500] text-black "
                  />
                </div>
                {errors.confirm_password || touched.confirm_password ? (
                  <>
                    {" "}
                    <ErrorMessage
                      component={"div"}
                      name="confirm_password"
                      className=" text-orange-300"
                    />
                  </>
                ) : null}
              </div>
              <div className="mt-6 w-full flex flex-row justify-center">
                <button
                  type="submit"
                  className="w-[100px] h-[36px] bg-teal-900 text-white text-xl rounded-2xl flex items-center justify-center"
                >
                  {" "}
                  submit
                </button>
              </div>

              {errorMessage.name !== "" ? (
                <div className="w-full h-fit space-y-2 flex flex-col text-orange-300 mt-4">
                  <span>error type : {errorMessage.name}</span>
                  <span>message : {errorMessage.message}</span>
                </div>
              ) : null}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
