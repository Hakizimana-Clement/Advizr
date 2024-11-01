import React from "react";
import Trash from "../../Trash";

const FavoriteLayout = () => {
  const myFavorite = [
    {
      id: 4,
      advice:
        "You spend half your life asleep or in bed. It's worth spending money on a good mattress, decent pillows and a comfy duvet.",
    },
    {
      id: 14,
      advice:
        "Lorem ipsum dolor sit amet consectetur, sunt illo laudantium delectus, maiores nisi tenetur sint? Voluptatibus.",
    },
    {
      id: 45,
      advice: "Lorem  maiores nisi tenetur sint? Voluptatibus.",
    },
    {
      id: 94,
      advice: ", maiores nisi tenetur sint? Voluptatibus.",
    },
    {
      id: 44,
      advice:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis tenetur itaque  eserunt veniam praesentium? Quae optio nihil recusandae ducimus perferendis facilis, sunt illo laudantium delectus, maiores nisi tenetur sint? Voluptatibus.",
    },
    {
      id: 90,
      advice:
        "When painting a room, preparation is key. The actual painting should account for about 40% of the work.",
    },
    {
      id: 10,
      advice:
        "If you cannot unscrew the lid of a jar, try placing a rubber band around its circumference for extra grip.",
    },
    {
      id: 91,
      advice:
        "If you cannot unscrew the lid of a jar, try placing a rubber band around its circumference for extra grip.",
    },
  ];

  return (
    <>
      <div className="col-span-5 lg:col-span-4 mt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-2 px-3 lg:py-0 ">
          {myFavorite.map((fav) => (
            <div className="relative" key={fav.id}>
              {/* start bookmark */}
              <div className="drop-shadow-md absolute top-4 right-3 hover:cursor-pointer">
                <Trash onClick={() => console.log("clicked")} />
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
          ))}
        </div>
      </div>
    </>
  );
};
export default FavoriteLayout;
