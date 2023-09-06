import * as yup from "yup";

export function useValidationSchema() {
  return {
    loginSchema: yup.object().shape({
      email: yup
        .string()
        .required()
        .matches(/^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/, {
          message: " your email is not recognizeable",
        }),
    }),
  };
}
///^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/
///^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/
