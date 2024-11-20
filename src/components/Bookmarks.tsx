import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { HiOutlineBookmark } from "react-icons/hi";
import databaseService from "../appwrite/database";
import {
  showErrorToast,
  showInfoToast,
  showSuccessToast,
} from "../conf/ToastConfig";
import userInfo from "../utils/userDetails";
interface IAdvice {
  id: number;
  advice: string;
  status?: "true" | "false";
  userId?: string | undefined;
}

const Bookmarks = ({ id, advice }: IAdvice) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const queryClient = useQueryClient();

  const { data: myFavorite } = useQuery({
    queryKey: ["favorite"],
    queryFn: () => databaseService.getAdvices(),
  });

  const isFavorite = myFavorite?.some((adviceId) => adviceId.id === id);

  const saveAdviceMutation = useMutation({
    mutationFn: (IAdvice: {
      id: number;
      advice: string;
      status: string;
      userId: string;
    }) => {
      return databaseService.saveAdvice(IAdvice);
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["favorite"] });
      showSuccessToast("Advice saved!");
    },
    onError(error: unknown) {
      const typeError = error as Error;
      showErrorToast(typeError.message);
    },
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userData = await userInfo();
      setIsLoggedIn(!!userData?.status);
    };
    fetchUserInfo();
  }, []);

  const handleToggle = async () => {
    const data = await userInfo();

    if (!isLoggedIn) {
      showInfoToast("Please log in to save this Advice.");
      return;
    }

    if (isFavorite) {
      //TODO: detele advice in database

      showErrorToast("Advice removed from saved!");
    } else {
      return saveAdviceMutation.mutate({
        id,
        advice,
        status: "true",
        userId: data?.$id as string,
      });
    }
  };

  return (
    <HiOutlineBookmark
      size="40"
      fill={isFavorite ? "#54cf91" : "#cee3e9"}
      color={isFavorite ? "#54cf91" : "#cee3e9"}
      onClick={handleToggle}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Bookmarks;
