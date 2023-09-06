"use client";
import { Formik, FormikProps, Form, Field, ErrorMessage } from "formik";
import { useValidationSchema } from "@/hooks/useValidationSachema";
const { loginSchema } = useValidationSchema();
export default function Home() {
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={() => alert("submitted")}
      validationSchema={loginSchema}
    >
      {({ handleSubmit, touched, errors }: FormikProps<LoginValues>) => (
        <Form onSubmit={handleSubmit}>
          <Field name="email" type="text" placeholder="email" />
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
        </Form>
      )}
    </Formik>
  );
}
