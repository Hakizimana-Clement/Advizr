import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { AdviceApi } from "../../api/AdviceApi";
import {
  dice_button,
  pattern_divider_desktop,
  pattern_divider_mobile,
} from "../../utils/Images";
import Bookmarks from "../Bookmarks";

const CardLayout = () => {
  const {
    data: advices,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["advices"],
    queryFn: AdviceApi,
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleClick = async () => {
    refetch();
  };

  return (
    <>
      <main className="flex justify-center">
        <div className="bg-D_gray-Dark_grayish_blue text-center py-6 px-5 rounded-lg relative w-[93%] sm:w-[65%] md:w-[55%] lg:w-[50%] xl:w-[34%]">
          <div className="drop-shadow-md absolute -top-1 right-3 hover:cursor-pointer">
            <Bookmarks />
          </div>
          {isLoading ? (
            <>
              <ScaleLoader color="#fff" />
            </>
          ) : (
            <>
              <p className="text-D_gray-Neon_green text-base tracking-widest md:text-lg">
                Advice #<span>{advices?.id}</span>
              </p>
              <h2 className="text-D_gray-Ligth_cyan text-2xl my-8 mx-1 font-Manrope">
                {advices?.advice}
              </h2>
            </>
          )}

          {/* Divider */}
          <div className="mt-5 mb-10 flex justify-center lg:hidden">
            <img
              src={pattern_divider_mobile}
              alt="pattern divider mobile image"
            />
          </div>
          <div className="mt-5 mb-10 hidden lg:flex lg:justify-center">
            <img
              src={pattern_divider_desktop}
              alt="pattern divider desktop image"
            />
          </div>

          {/* Random button */}
          <div
            className="absolute inset-x-2 -bottom-10 cursor-pointer"
            onClick={handleClick}
          >
            <button
              className={
                "p-5 bg-D_gray-Neon_green rounded-full transform transition hover:shadow-glow"
              }
            >
              <img
                src={dice_button}
                alt="random button"
                className={isFetching ? "rotate" : ""}
              />
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
export default CardLayout;
