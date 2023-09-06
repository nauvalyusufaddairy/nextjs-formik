import * as yup from "yup";

export function useValidationSchema() {
  return {
    handleSubmit: ({
      setSubmitting,

      data = { email: "", password: "" },
    }: {
      setSubmitting: any;
      data: { email: string; password: string };
    }) => {
      if (data.email === "" || data.password === "") {
        setSubmitting(false);
      }
      alert("hello " + data.email);

      setSubmitting(true);
    },
    loginSchema: yup.object().shape({
      email: yup
        .string()
        .required()
        .matches(/^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/, {
          message: "*email is not recognizeable",
        }),
      password: yup
        .string()
        .required()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          {
            message:
              "*Password at least length of 8 contain at least one or more Number, Uppercase also Lowercase and contain at least one or more special character @$!%*?&",
          }
        ),
    }),
  };
}
