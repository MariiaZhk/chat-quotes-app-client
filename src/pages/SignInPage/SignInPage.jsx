import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import AuthForm from "../../components/AuthForm/AuthForm";
import Container from "../../components/Container/Container";
import { loginThunk } from "../../store/operations";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please write valid email")
      .matches(/^(?!.*@[^,]*,)/)
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 6 characters")
      .required("Password is required"),
  })
  .required();

const SignInPage = () => {
  const dispatch = useDispatch();

  const submit = ({ email, password }) => {
    const normalizedEmail = email.toLowerCase();
    dispatch(loginThunk({ email: normalizedEmail, password }))
      .unwrap()
      .then((res) => {
        toast.success(
          `Welcome ${res.user.name || res.user.email.split("@")[0]}`
        );
      })
      .catch((err) => toast.error(err));
  };

  return (
    <Container>
      <AuthForm type="signin" onSubmit={submit} schema={schema} />
    </Container>
  );
};

export default SignInPage;
