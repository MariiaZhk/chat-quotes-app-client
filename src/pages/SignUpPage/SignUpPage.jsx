import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
// import { registerThunk } from "../../redux/auth/operations";
import * as yup from "yup";
import AuthForm from "../../components/AuthForm/AuthForm";
import Container from "../../components/Container/Container";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please write valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    repPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords don't match")
      .required("Password is required"),
  })
  .required();

const SignUpPage = () => {
  const dispatch = useDispatch();

  const submit = ({ email, password }) => {
    dispatch(registerThunk({ email, password }))
      .unwrap()
      .then(() => toast.success("Registration done!"))
      .catch(() => toast.error("Ooops... Something went wrong!"));
  };

  return (
    <Container>
      <AuthForm type="signup" onSubmit={submit} schema={schema} />{" "}
    </Container>
  );
};

export default SignUpPage;
