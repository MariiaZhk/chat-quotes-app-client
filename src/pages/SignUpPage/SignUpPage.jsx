import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
// import { registerThunk } from "../../redux/auth/operations";
import * as yup from "yup";
import AuthForm from "../../components/AuthForm/AuthForm";
import Container from "../../components/Container/Container";
import { registerThunk } from "../../store/operations";

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
      .min(8, "Password must be at least 8 characters")
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
      .then(() => toast.success("Registration done!"))
      .catch(() => toast.error("Ooops... Something went wrong!"));
  };
  //   const submit = async ({ email, password, firstName, lastName }) => {
  //     try {
  //       const result = await dispatch(
  //         registerThunk({ email, password, firstName, lastName })
  //       ).unwrap();
  //       toast.success("Registration done!");
  //       console.log("Registration result:", result);
  //     } catch (error) {
  //       toast.error("Ooops... Something went wrong!");
  //       console.error("Error during registration:", error);
  //     }
  //   };

  return (
    <Container>
      <AuthForm type="signup" onSubmit={submit} schema={schema} />{" "}
    </Container>
  );
};

export default SignUpPage;
