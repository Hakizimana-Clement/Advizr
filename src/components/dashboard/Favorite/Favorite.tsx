import { useQuery } from "@tanstack/react-query";
import React from "react";
import databaseService from "../../../appwrite/database";
import NotAdviceFound from "../../Pages/NotAdviceFound";
import Trash from "../../Trash";
interface Props {
  isVisible: boolean;
}

const FavoriteLayout = ({ isVisible }: Props) => {
  const { data: myFavorite } = useQuery({
    queryKey: ["favorite"],
    queryFn: () => databaseService.getAdvices(),
  });

  return (
    <>
      <div
        className={`place-content-center h-screen transition-all duration-300 overflow-y-scroll  ${
          isVisible ? "col-span-5" : "col-span-5"
        } lg:col-span-4`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 py-0 px-3 lg:py-0">
          {Array.isArray(myFavorite) && myFavorite.length > 0 ? (
            myFavorite?.map((fav) => (
              <div className="relative" key={fav.id}>
                {/* start bookmark */}
                <div className="drop-shadow-md absolute top-4 right-3 hover:cursor-pointer">
                  <Trash id={fav.$id as string} />
                </div>
                {/* end bookmark */}
                <div
                  className="bg-D_gray-Dark_grayish_blue text-center px-3 py-4 rounded-lg"
                  key={fav.id}
                >
                  <p className="text-D_gray-Neon_green text-sm tracking-widest md:text-lg">
                    Advice #<span>{fav.id}</span>
                  </p>
                  <h2 className="text-D_gray-Ligth_cyan text-base md:text-lg my-8 mx-1 font-Manrope">
                    {fav.advice}
                  </h2>
                </div>
              </div>
            ))
          ) : (
            <div className="grid col-span-5 overscroll-y-none">
              <NotAdviceFound />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default FavoriteLayout;
