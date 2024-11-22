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
  const [userId, setUserId] = useState<string | null>(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userData = await userInfo();
      if (userData?.status) {
        setUserId(userData.$id);
      }
    };
    fetchUserInfo();
  }, []);

  const { data: myFavorite } = useQuery({
    queryKey: ["favorite"],
    queryFn: () => databaseService.getAdvices(),
  });

  const isFavorite = myFavorite?.some((adviceId) => adviceId.id === id);

  const deleteAdviceMutation = useMutation({
    mutationFn: (documentId: string) =>
      databaseService.deleteAdvice(documentId),
    onSuccess() {
      showSuccessToast("Advice removed from saved!");
      queryClient.invalidateQueries({ queryKey: ["favorite"] });
    },
    onError(error: unknown) {
      showErrorToast((error as Error).message);
    },
  });

  const saveAdviceMutation = useMutation({
    mutationFn: (IAdvice: {
      id: number;
      advice: string;
      status: string;
      userId: string;
    }) => databaseService.saveAdvice(IAdvice),
    onSuccess() {
      showSuccessToast("Advice saved!");
      queryClient.invalidateQueries({ queryKey: ["favorite"] });
    },
    onError(error: unknown) {
      showErrorToast((error as Error).message);
    },
  });

  const handleToggle = async () => {
    if (!userId) {
      showInfoToast("Please log in to save this Advice.");
      return;
    }

    if (isFavorite) {
      const documentToDelete = myFavorite?.find(
        (documentId) => documentId.id === id
      );
      if (documentToDelete) {
        return deleteAdviceMutation.mutate(documentToDelete.$id as string);
      }
    } else {
      return saveAdviceMutation.mutate({
        id,
        advice,
        status: "true",
        userId,
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
