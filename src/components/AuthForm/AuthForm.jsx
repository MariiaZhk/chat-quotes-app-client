import { FormWrapper, FormHeading, BtnLink, FormEl } from "./AuthForm.styled";

const AuthForm = ({ children, on, handleSubmit, submit, errors }) => {
  const path = on ? `signup` : "signin";
  return (
    <FormWrapper>
      <FormHeading>{on ? "signIn" : "signUp"}</FormHeading>
      <FormEl
        onSubmit={handleSubmit(submit)}
        $errorEmail={errors?.email}
        $errorPassword={errors?.password}
        $errorRepPassword={errors?.repPassword}
      >
        {children}
      </FormEl>
      <BtnLink to={path}>{on ? "signUp" : "signIn"}</BtnLink>
    </FormWrapper>
  );
};

export default AuthForm;
