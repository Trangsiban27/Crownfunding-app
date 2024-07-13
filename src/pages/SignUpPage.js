import React, { useState } from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { authRegister } from "../store/auth/auth-slice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object({
  name: yup.string().required("This field is required!"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required!"),
  password: yup
    .string()
    .required("This field is required!")
    .min(8, "Password must be 8 character "),
});

const SignUpPage = () => {
  const [acceptTerm, setAcceptTerm] = useState(false);
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
  const handleSignUp = (values) => {
    dispatch(authRegister(values));
    reset({});
  };

  const handleToggleAcceptTerm = () => {
    setAcceptTerm(!acceptTerm);
  };

  return (
    <LayoutAuthentication
      heading="Sign Up"
      textLink="Already have an account"
      nameLink="Sign In"
      link="/login"
    >
      <p className="flex items-center justify-center mb-5 text-sm text-text2 dark:text-white">
        Or sign up with email
      </p>

      <form onSubmit={handleSubmit(handleSignUp)}>
        <TextInput
          label="Full name *"
          text="Jhon Doe"
          name="name"
          type="text"
          control={control}
          error={errors.name?.message}
        ></TextInput>
        <TextInput
          label="Email *"
          text="example@gmail.com"
          name="email"
          type="email"
          control={control}
          error={errors.email?.message}
        ></TextInput>
        <PasswordInput
          label="Password *"
          text="Create a password"
          name="password"
          control={control}
          error={errors.password?.message}
        ></PasswordInput>

        <div className="flex items-center gap-x-2">
          <Checkbox
            checked={acceptTerm}
            onClick={handleToggleAcceptTerm}
          ></Checkbox>
          <p className="my-6 text-xs pointer-events-none lg:text-sm dark:text-text3">
            I agree to the{" "}
            <span className="underline text-secondary dark:text-secondary">
              Terms of Use
            </span>{" "}
            and have read and understand the{" "}
            <span className="underline text-secondary dark:text-secondary">
              Privacy policy.
            </span>
          </p>
        </div>

        <Button className="w-full" type="submit">
          Create your account
        </Button>
      </form>
      <ToastContainer />
    </LayoutAuthentication>
  );
};

export default SignUpPage;
