"use client";
import "../app/globals.css";
import { Variant, Variants, motion, useInView } from "framer-motion";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Formik, FormikProps, Form, Field, ErrorMessage } from "formik";
import { useValidationSchema } from "@/hoosks/useValidationSachema";
import { useEffect, useRef, useState } from "react";
const { loginSchema, handleSubmit } = useValidationSchema();
export default function Home() {
  const [stop, setStop] = useState(false);
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(a, v) =>
        handleSubmit({
          data: { email: a.email, password: a.password },

          setSubmitting: v.setSubmitting,
        })
      }
      validationSchema={loginSchema}
    >
      {({
        handleSubmit,
        touched,
        errors,
        isSubmitting,
        values,
      }: FormikProps<LoginValues>) => (
        <div className="w-screen h-screen flex flex-row items-center justify-center bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
          <Form
            onSubmit={handleSubmit}
            className="w-[300px] h-[500px] bg-white/90 flex flex-col py-[16px] px-[18px] "
          >
            <div className="mt-[24px] mb-[32px] w-full text-2xl text-center font-[500]">
              Login Form
            </div>
            <div className="flex flex-col gap-6">
              {" "}
              <div
                className={`w-full h-[36px]    justify-center leading-3 items-center  ${
                  errors.email && touched.email
                    ? "border-[2px] border-red-500 bg-red-300/20"
                    : "border-[2px] border-teal-500 bg-teal-300/20"
                }`}
              >
                <Field
                  name="email"
                  type="text"
                  placeholder="email"
                  className="outline-none border-none px-[16px] bg-transparent h-full w-full"
                />
              </div>
              <div
                className={`w-full h-[36px] justify-center leading-3 items-center  ${
                  errors.password && touched.password
                    ? "border-[2px] border-red-500 bg-red-300/20"
                    : "border-[2px] border-teal-500 bg-teal-300/20"
                }`}
              >
                <Field
                  name="password"
                  type="password"
                  placeholder="password"
                  className="outline-none border-none   px-[16px]  bg-transparent h-full w-full"
                />
              </div>
              <button
                type="submit"
                disabled={
                  values.email === "" || values.password === "" ? true : false
                }
                className={`w-full h-[36px] mt-4 px-[8px]  flex justify-center items-center ${
                  values.email === "" || values.password === ""
                    ? " bg-blue-500/60 text-white cursor-not-allowed "
                    : " bg-blue-500 text-white "
                }                 
                `}
              >
                submit
              </button>
            </div>
            <div>
              {errors.email && touched.email ? (
                <ErrorMessage
                  key={"email"}
                  component="div"
                  name="email"
                  className="text-red-500"
                />
              ) : (
                ""
              )}
              {errors.password && touched.password ? (
                <ErrorMessage
                  key={"password"}
                  component="div"
                  name="password"
                  className="text-red-500"
                />
              ) : (
                ""
              )}
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
