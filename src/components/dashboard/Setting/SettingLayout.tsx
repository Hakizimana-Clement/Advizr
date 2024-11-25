import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";
import authService from "../../../appwrite/auth";
import { showSuccessToast } from "../../../conf/ToastConfig";
import { loginImg } from "../../../utils/Image";
import userInfo from "../../../utils/userDetails";
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
    setValue,
  } = useForm<ProfileSchemaType>({
    resolver: zodResolver(ProfileSchema),
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userData = await userInfo();
      if (userData) {
        setValue("username", userData?.name);
        setValue("email", userData?.email);
      }
    };
    fetchUserInfo();
  }, [setValue]);

  const { mutate, isPending } = useMutation({
    mutationFn: (username: string) => {
      return authService.updateName(username);
    },
    onSuccess() {
      showSuccessToast("Username updated successfully!");
    },
    onError() {
      showSuccessToast(
        "An error occurred while updating the username. Please try again."
      );
    },
  });

  const onSubmit = (data: ProfileSchemaType) => {
    mutate(data.username as string);
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
            My Profile
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
              otherStyles="text-white"
              error={errors.email}
              disabled
            />
            <Button buttonType="submit" styles="py-1  my-5 px-3 mb-8">
              {isPending ? (
                <div className="flex items-center justify-center gap-3 ">
                  <ClipLoader size={18} color="#fff" />
                  <span>updating...</span>
                </div>
              ) : (
                <>Save</>
              )}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
export default SettingLayout;
