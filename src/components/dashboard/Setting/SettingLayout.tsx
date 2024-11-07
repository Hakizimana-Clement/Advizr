import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { loginImg } from "../../../utils/Images";
import {
  ProfileSchema,
  ProfileSchemaType,
} from "../../../utils/validations/Profile/Profile.validation";
import Button from "../../Button";
import FormInput from "../../Forms/InputText";
interface Props {
  isVisible: boolean;
}
const SettingLayout = ({ isVisible }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileSchemaType>({
    resolver: zodResolver(ProfileSchema),
  });

  const onSubmit = (data: ProfileSchemaType) => {
    console.log("login data", data);
  };
  return (
    <>
      <div
        className={`place-content-center h-screen transition-all duration-300 ${
          isVisible ? "col-span-5" : "col-span-5"
        } lg:col-span-4`}
      >
        <div className="grid grid-cols-1 place-items-center gap-5 md:gap-6">
          <h2 className="text-center text-2xl text-D_gray-Ligth_cyan font-medium my-3 capitalize">
            My Setting
          </h2>
          <div className="h-20 w-20 overflow-hidden rounded-full flex justify-center items-center border">
            <img src={loginImg} alt="profile image" />
          </div>
          <form
            className="w-full md:w-3/5 lg:w-1/3"
            onSubmit={handleSubmit(onSubmit)}
          >
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
              disabled
            />
            <FormInput
              type="password"
              placeholder="Password"
              {...register("password")}
              error={errors.password}
            />
            <FormInput
              type="password"
              placeholder="Confirm password"
              {...register("confirmPassword")}
              error={errors.password}
            />
            <Button buttonType="submit" styles="py-1  my-5 px-3 mb-8">
              Save
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
export default SettingLayout;
