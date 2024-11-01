import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  LoginSchema,
  LoginSchemaType,
} from "../../utils/validations/auth/Login.validation";
import Button from "../Button";
import FormInput from "../Forms/InputText";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: LoginSchemaType) => {
    console.log("login data", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <Button buttonType="submit" styles="py-3 md:py-2 my-5 px-3 mb-8">
        Login
      </Button>
    </form>
  );
};
export default LoginForm;
