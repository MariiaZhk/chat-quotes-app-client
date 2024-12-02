import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Form,
  BtnLink,
  ErrorSpan,
  FormBtn,
  FormHeading,
  FormLabel,
  PassShowBtn,
  StyledInput,
  StyledSection,
} from "../../components/AuthForm/AuthForm.styled";
import PassEye from "../../assets/PassEye";
import OpenPassEye from "../../assets/OpenPassEye";

function AuthForm({ type, onSubmit, schema }) {
  const [eyePass, setEyePass] = useState({
    password: false,
    repPassword: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const path = type === "signup" ? "/signin" : "/signup";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const togglePasswordVisibility = (field) => {
    setEyePass((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <StyledSection>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormHeading>{type === "signup" ? "Sign Up" : "Sign In"}</FormHeading>

        {type === "signup" && (
          <>
            <FormLabel>
              <StyledInput
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
              <StyledInput
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
          <StyledInput
            type="email"
            placeholder="Email"
            name="email"
            {...register("email")}
            $error={!!errors?.email}
          />
          {errors?.email && <ErrorSpan>{errors?.email?.message}</ErrorSpan>}
        </FormLabel>

        <FormLabel>
          <StyledInput
            type={eyePass.password ? "text" : "password"}
            placeholder="Password"
            name="password"
            {...register("password")}
            $error={!!errors?.password}
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

        {/* {type === "signup" && (
          <FormLabel>
            <StyledInput
              type={eyePass.repPassword ? "text" : "password"}
              placeholder="Repeat password"
              name="repPassword"
              {...register("repPassword")}
              $error={!!errors?.repPassword}
            />
            {errors?.repPassword && (
              <ErrorSpan>{errors?.repPassword?.message}</ErrorSpan>
            )}
            <PassShowBtn
              type="button"
              onClick={() => togglePasswordVisibility("repPassword")}
            >
              {eyePass.repPassword ? <OpenPassEye /> : <PassEye />}
            </PassShowBtn>
          </FormLabel>
        )} */}

        <FormBtn type="submit">
          {type === "signup" ? "Sign Up" : "Sign In"}
        </FormBtn>
      </Form>

      <BtnLink to={path}>{type === "signup" ? "Sign In" : "Sign Up"}</BtnLink>
    </StyledSection>
  );
}

export default AuthForm;
