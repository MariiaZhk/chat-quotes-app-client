import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  ErrorSpan,
  PassShowBtn,
  StyledSection,
  BtnLink,
  FormContainer,
} from "../../components/AuthForm/AuthForm.styled";
import PassEye from "../../assets/PassEye";
import OpenPassEye from "../../assets/OpenPassEye";
import {
  Form,
  FormBtn,
  FormHeading,
  FormInput,
  FormLabel,
} from "../CommonStyledComponents/CommonStyledComponents";
import { registerThunk, loginThunk } from "../../store/Auth/operations";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ type }) => {
  const navigate = useNavigate();
  const [eyePass, setEyePass] = useState({
    password: false,
  });

  const path = type === "signup" ? "/signin" : "/signup";

  const schema = yup
    .object({
      firstName:
        type === "signup"
          ? yup.string().required("First Name is required")
          : yup.mixed(),
      lastName:
        type === "signup"
          ? yup.string().required("Last Name is required")
          : yup.mixed(),
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const dispatch = useDispatch();

  const togglePasswordVisibility = (field) => {
    setEyePass((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const onSubmit = (data) => {
    const { email, password, firstName, lastName } = data;
    const normalizedEmail = email.toLowerCase();

    if (type === "signup") {
      dispatch(
        registerThunk({ email: normalizedEmail, password, firstName, lastName })
      )
        .unwrap()
        .then(() => {
          navigate("/home");
          toast.success("Registration successful. Please, login");
        })

        .catch(() => toast.error("Something went wrong. Please, try again"));
    } else {
      dispatch(loginThunk({ email: normalizedEmail, password }))
        .unwrap()
        .then(() => {
          navigate("/home");
          toast.success("Login successful");
        })
        .catch((err) => toast.error(err));
    }
  };

  return (
    <StyledSection>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormHeading>{type === "signup" ? "Sign Up" : "Sign In"}</FormHeading>

          {type === "signup" && (
            <>
              <FormLabel>
                <FormInput
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  {...register("firstName")}
                  $error={!!errors?.firstName}
                />
                {errors?.firstName && (
                  <ErrorSpan>{errors?.firstName?.message}</ErrorSpan>
                )}
              </FormLabel>

              <FormLabel>
                <FormInput
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  {...register("lastName")}
                  $error={!!errors?.lastName}
                />
                {errors?.lastName && (
                  <ErrorSpan>{errors?.lastName?.message}</ErrorSpan>
                )}
              </FormLabel>
            </>
          )}

          <FormLabel>
            <FormInput
              type="email"
              placeholder="Email"
              name="email"
              {...register("email")}
              $error={!!errors?.email}
              autoComplete="email"
            />
            {errors?.email && <ErrorSpan>{errors?.email?.message}</ErrorSpan>}
          </FormLabel>

          <FormLabel>
            <FormInput
              type={eyePass.password ? "text" : "password"}
              placeholder="Password"
              name="password"
              {...register("password")}
              $error={!!errors?.password}
              autoComplete="password"
            />
            {errors?.password && (
              <ErrorSpan>{errors?.password?.message}</ErrorSpan>
            )}
            <PassShowBtn
              type="button"
              onClick={() => togglePasswordVisibility("password")}
            >
              {eyePass.password ? <OpenPassEye /> : <PassEye />}
            </PassShowBtn>
          </FormLabel>

          <FormBtn type="submit">
            {type === "signup" ? "Sign Up" : "Sign In"}
          </FormBtn>
          {type === "signup" ? (
            <p>
              Already have an account?{" "}
              <BtnLink to={path}>
                <strong>Sign In</strong>
              </BtnLink>
            </p>
          ) : (
            <p>
              Don't have an account yet?{" "}
              <BtnLink to={path}>
                <strong>Sign Up</strong>
              </BtnLink>
            </p>
          )}
        </Form>
      </FormContainer>
    </StyledSection>
  );
};

export default AuthForm;
