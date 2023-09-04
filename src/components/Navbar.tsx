import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="w-full h-[77px] z-10 fixed top-0 bg-gray-500/20 backdrop-blur-sm flex flex-row items-center justify-between px-[56px] ">
      <div className="w-[10%] h-full text-teal-950 flex justify-center items-center text-3xl font-burton font-[800]">
        Postpal
      </div>

      <div className="md:w-[40%] h-full flex flex-row items-center justify-end gap-4 text-[16px] font-[500]">
        <div className="hidden md:block">Our Story</div>
        <div className="hidden md:block ">Sign in</div>

        <div className="px-[5px] py-[3px] rounded-md bg-teal-950 text-white">
          <Link href={"/signup"}> Get started</Link>
        </div>
      </div>
    </div>
  );
}
