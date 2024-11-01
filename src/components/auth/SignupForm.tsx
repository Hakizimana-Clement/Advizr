import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  SignupSchema,
  SignupSchemaType,
} from "../../utils/validations/auth/Signup.validation";
import Button from "../Button";
import FormInput from "../Forms/InputText";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit = (data: SignupSchemaType) => {
    console.log("signup data", data);
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
      <Button buttonType="submit" styles="py-3 md:py-2 my-5 px-3 mb-8">
        Register Now
      </Button>
    </form>
  );
};
export default SignupForm;
