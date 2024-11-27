import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import {
  ForgotPasswordSchema,
  ForgotPasswordSchemaType,
} from "../../utils/validations/auth/ForgottonPassword.validation";
import Button from "../Button";
import FormInput from "../Forms/InputText";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  // const { mutate, isPending } = useMutation({
  //   mutationFn: (userinfo: {
  //     email: string;
  //     name: string;
  //     password: string;
  //   }) => {
  //     return authService.createAccount(userinfo);
  //   },
  //   onSuccess: () => {
  //     showSuccessToast("Account created successfull");
  //     navigate("/users/login");
  //   },
  //   onError: (error: unknown) => {
  //     const typeError = error as Error;
  //     if (
  //       typeError.message ===
  //       "A user with the same id, email, or phone already exists in this project."
  //     ) {
  //       showErrorToast("User already exists");
  //     }
  //   },
  // });

  const onSubmit = (data: ForgotPasswordSchemaType) => {
    console.log(data);
    // try {
    //   const { email, username, password } = data;
    //   mutate({ email, name: username, password });
    // } catch (error: unknown) {
    //   const typeError = error as Error;
    //   showErrorToast(typeError.message);
    // }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        type="email"
        placeholder="Enter your email here"
        {...register("email")}
        error={errors.email}
      />
      <Button
        buttonType="submit"
        styles="py-1 my-5 px-3 mb-8 flex justify-center"
      >
        {/* {isPending ? (
          <span className="flex items-center gap-3">
            <ClipLoader size={25} color="#fff" />
            {"Authenticating...."}
          </span>
        ) : ( */}
        <span>Send password reset link</span>
        {/* )} */}
      </Button>
    </form>
  );
};
export default ForgotPasswordForm;
