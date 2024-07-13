import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { useForm } from "react-hook-form";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { authLogin } from "../store/auth/auth-slice";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character"),
});

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = (values) => {
    dispatch(authLogin(values));
    reset({});
    navigate("/");
  };

  return (
    <LayoutAuthentication
      heading="Welcome Back!"
      textLink="Dont have an account?"
      nameLink="Sign up"
      link="/register"
    >
      <form onSubmit={handleSubmit(handleSignIn)}>
        <TextInput
          name="email"
          type="email"
          label="Email *"
          text="example@gamil.com"
          control={control}
          error={errors.email?.message}
        ></TextInput>
        <PasswordInput
          control={control}
          label="Password *"
          name="password"
          text="Enter password"
          error={errors.password?.message}
        ></PasswordInput>
        <p className="my-5 text-sm font-medium text-right cursor-pointer text-primary">
          Forgot password
        </p>
        <Button className="w-full" type="submit">
          Sign in
        </Button>
      </form>
      <ToastContainer />
    </LayoutAuthentication>
  );
};

export default SignInPage;
