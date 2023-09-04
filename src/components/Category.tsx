import React from "react";
import styles from "./category.module.css";

type props = {
  data: Category[];
};

export default function Category({ data }: props) {
  console.log(data[0].color);
  return (
    <div className={`w-fit flex flex-row flex-wrap gap-4  font-500`}>
      {data &&
        data.map((v, i) => (
          <div className=" px-[5px] py-[2px] rounded-md bg-teal-200">
            <p key={i} className={` text-teal-800/95 hover:cursor-pointer `}>
              {v.category}
            </p>
          </div>
        ))}
      {}
    </div>
  );
}
