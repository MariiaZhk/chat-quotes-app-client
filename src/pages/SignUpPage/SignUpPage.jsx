import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import AuthForm from "../../components/AuthForm/AuthForm";
import { registerThunk } from "../../store/Auth/operations";

const schema = yup
  .object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup
      .string()
      .email("Please write valid email")
      .matches(/^(?!.*@[^,]*,)/)
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    // repPassword: yup
    //   .string()
    //   .oneOf([yup.ref("password")], "Passwords don't match")
    //   .required("Password is required"),
  })
  .required();

const SignUpPage = () => {
  const dispatch = useDispatch();

  const submit = ({ email, password, firstName, lastName }) => {
    const normalizedEmail = email.toLowerCase();
    dispatch(
      registerThunk({ email: normalizedEmail, password, firstName, lastName })
    )
      .unwrap()
      .then(() => toast.success("Registration successful"))
      .catch(() => toast.error("Something went wrong. Please, try again"));
  };

  return <AuthForm type="signup" onSubmit={submit} schema={schema} />;
};

export default SignUpPage;
