import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { HiTrash } from "react-icons/hi";
import { ClipLoader } from "react-spinners";
import databaseService from "../appwrite/database";
import { showErrorToast, showSuccessToast } from "../conf/ToastConfig";

interface ITrash {
  id: string;
}

const Trash = ({ id }: ITrash) => {
  const [loader, setLoader] = useState(false);

  const queryClient = useQueryClient();

  const deleteAdviceMutation = useMutation({
    mutationFn: (documentId: string) => {
      setLoader(true);
      return databaseService.deleteAdvice(documentId);
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["favorite"] });
      setLoader(false);
      showSuccessToast("Advice deleted successfull!");
    },
    onError(error: unknown) {
      setLoader(false);
      showErrorToast((error as Error).message);
    },
  });

  const handleToggle = () => {
    deleteAdviceMutation.mutate(id);
  };

  return (
    <>
      {loader ? (
        <ClipLoader size={25} color="#4ac788" />
      ) : (
        <>
          <HiTrash size="25" fill="#fff" onClick={handleToggle} />
        </>
      )}
    </>
  );
};
export default Trash;
