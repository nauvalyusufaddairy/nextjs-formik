import React from "react";
import Image from "next/image";
import { formatDistanceToNow, parseISO } from "date-fns";

export default function BlogCard({
  userName,
  organization,
  userPost,
  userImage,
  date,
  showImage,
  imgUrl,
}: BlogProps) {
  const titleChar = userPost.length;

  const time = "2023-06-24T13:36:50.038Z";
  const toISO = parseISO(time);
  const toNOW = formatDistanceToNow(toISO);
  const detailsTime = (t: string) => {
    const unwantedSymbol = /[:.].*$/g;
    const replaceUnwantedSymbol = t.replace(unwantedSymbol, "");
    const toArray = replaceUnwantedSymbol.split(" ");
    if (toNOW.includes("months") || toNOW.includes("years")) {
      return `${toArray[1]} ${toArray[2]}`;
    }
    return toNOW + " ago";
  };

  return (
    <div>
      {showImage ? (
        <div className="w-full flex flex-row justify-between">
          <div
            className={`-> w-full
            }  flex flex-col text-[16px] px-[16px] `}
          >
            {/* usr data */}
            <div className="w-full flex flex-row space-x-3 items-center text-[16px]">
              <div className="">
                <div
                  className={`w-[26px] bg-fill bg-center  h-[26px] rounded-[50%] relative overflow-hidden `}
                >
                  <img
                    className=" w-[28px]  bg-cover bg-center  h-[28px]  "
                    alt="deved"
                    src={`${userImage}`}
                  />
                </div>
              </div>
              <div className="flex w-full  flex-row space-x-1">
                <p className="text-[16px] font-[500]  line-clamp-1 overflow-hidden overflow-ellipsis">
                  {userName}
                </p>
                <p className="text-black/50">in</p>
                <p className="text-[16px] font-[500] line-clamp-1 overflow-hidden overflow-ellipsis ">
                  {organization?.orgName}
                </p>
              </div>
            </div>
            <div className="w-full mt-1 font-[500] text-[18px]">{userPost}</div>
            <div className="mt-1 text-[14px] text-black/50 font-[400] flex flex-row items-center gap-2">
              {detailsTime(toISO.toString())}{" "}
              <div className="h-full  flex flex-col  justify-center">.</div> 5
              min read
            </div>
          </div>
          <div className="w-[200px] h-[100px] ">
            <img className=" w-full h-full" src={`${imgUrl}`} />
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <div
            className={`-> ${
              showImage ? "w-full" : "w-[350px] "
            }  flex flex-col text-[16px] px-[16px] `}
          >
            {/* usr data */}
            <div className="w-full flex flex-row space-x-3 items-center text-[16px]">
              <div className="">
                <div
                  className={`w-[26px] bg-cover bg-center  h-[26px] rounded-[50%] relative overflow-hidden `}
                >
                  <img
                    className=" w-[26px] bg-cover bg-center  h-[26px]  "
                    alt="deved"
                    src={`${userImage}`}
                  />
                </div>
              </div>
              <div className="flex w-full  flex-row space-x-1">
                <p className="text-[16px] font-[500]  line-clamp-1 overflow-hidden overflow-ellipsis">
                  {userName}
                </p>
                <p className="text-black/50">in</p>
                <p className="text-[16px] font-[500] line-clamp-1 overflow-hidden overflow-ellipsis ">
                  {organization?.orgName}
                </p>
              </div>
            </div>
            <div className="w-full mt-1 font-[500] text-[18px]">{userPost}</div>
            <div className="mt-1 text-[14px] text-black/50 font-[400] flex flex-row items-center gap-2">
              {detailsTime(toISO.toString())}{" "}
              <div className="h-full  flex flex-col  justify-center">.</div> 5
              min read
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
