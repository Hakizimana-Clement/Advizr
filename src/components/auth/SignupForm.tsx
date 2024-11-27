import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { ClipLoader } from "react-spinners";
import authService from "../../appwrite/auth";
import { showErrorToast, showSuccessToast } from "../../conf/ToastConfig";
import {
  SignupSchema,
  SignupSchemaType,
} from "../../utils/validations/auth/Signup.validation";
import Button from "../Button";
import FormInput from "../Forms/InputText";

const SignupForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(SignupSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (userinfo: {
      email: string;
      name: string;
      password: string;
    }) => {
      return authService.createAccount(userinfo);
    },
    onSuccess: () => {
      showSuccessToast("Account created successfull");
      navigate("/users/login");
    },
    onError: (error: unknown) => {
      const typeError = error as Error;
      if (
        typeError.message ===
        "A user with the same id, email, or phone already exists in this project."
      ) {
        showErrorToast("User already exists");
      }
    },
  });

  const onSubmit = (data: SignupSchemaType) => {
    try {
      const { email, username, password } = data;
      mutate({ email, name: username, password });
    } catch (error: unknown) {
      const typeError = error as Error;
      showErrorToast(typeError.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        type="text"
        placeholder="Username"
        {...register("username")}
        error={errors.username}
      />
      <FormInput
        type="text"
        placeholder="Email"
        {...register("email")}
        error={errors.email}
      />
      <FormInput
        type="password"
        placeholder="Password"
        {...register("password")}
        error={errors.password}
      />
      <FormInput
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
        error={errors.confirmPassword}
      />
      <Button
        buttonType="submit"
        styles="py-2 my-5 px-3 mb-8 flex justify-center"
      >
        {isPending ? (
          <span className="flex items-center gap-3">
            <ClipLoader size={25} color="#fff" />
            {"Authenticating...."}
          </span>
        ) : (
          <span>Register Now</span>
        )}
      </Button>
    </form>
  );
};
export default SignupForm;
