import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import AuthForm from "../../components/AuthForm/AuthForm";
import { loginThunk } from "../../store/Auth/operations";
import { selectUserFirstName } from "../../store/selectors";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please write valid email")
      .matches(/^(?!.*@[^,]*,)/)
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  })
  .required();

function SignInPage() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserFirstName);

  const submit = ({ email, password }) => {
    const normalizedEmail = email.toLowerCase();
    dispatch(loginThunk({ email: normalizedEmail, password }))
      .unwrap()
      .then(() => {
        toast.success(`Welcome ${userName}`);
      })
      .catch((err) => toast.error(err));
  };

  return <AuthForm type="signin" onSubmit={submit} schema={schema} />;
}

export default SignInPage;
