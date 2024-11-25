import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ClipLoader } from "react-spinners";
import authService from "../../appwrite/auth";
import { showErrorToast, showSuccessToast } from "../../conf/ToastConfig";
import { login } from "../../redux/features/authSlice";
import {
  LoginSchema,
  LoginSchemaType,
} from "../../utils/validations/auth/Login.validation";
import Button from "../Button";
import FormInput from "../Forms/InputText";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (userInfo: { email: string; password: string }) => {
      return authService.login(userInfo);
    },
    onSuccess: (data) => {
      showSuccessToast("Login successfully");
      dispatch(login({ userData: data }));
      navigate("/users/dashboard");
    },
    onError: (error: unknown) => {
      const typeError = error as Error;
      showErrorToast(typeError.message);
    },
  });

  const onSubmit = (data: LoginSchemaType) => {
    try {
      const { email, password } = data;
      mutate({ email, password });
    } catch (error: unknown) {
      const typeError = error as Error;
      showErrorToast(typeError.message);
    }
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
      <>
        <Button
          buttonType="submit"
          styles="py-3 md:py-2 my-5 px-3 mb-8 flex justify-center"
        >
          {isPending ? (
            <span className="flex items-center gap-3">
              <ClipLoader size={25} color="#fff" />
              {"Authenticating...."}
            </span>
          ) : (
            <span>Login</span>
          )}
        </Button>
      </>
    </form>
  );
};
export default LoginForm;
