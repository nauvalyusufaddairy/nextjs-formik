import Link from "next/link";
import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

export default function Signin() {
  return (
    <div className="w-screen h-screen ">
      <div className="w-[300px] h-[568px] relative mx-auto mt-[144px] items-center flex flex-col">
        <div className="text-3xl font-[500]"> Join Postpal</div>
        <div className="w-full mt-[77px] flex-col gap-y-8">
          <div className="w-full h-[42px] rounded-2xl border-black border-[1.8px] px-[8px] py-[3px] flex flex-row items-center gap-x-12 hover:cursor-pointer">
            <div className="text-xl">
              {" "}
              <BsGoogle />
            </div>
            <div> Sign up with Google</div>
          </div>
          <div className="mt-4 w-full h-[42px] rounded-2xl border-black border-[1.8px] px-[8px] py-[3px] flex flex-row items-center gap-x-12 hover:cursor-pointer">
            <div className="text-xl">
              {" "}
              <BsGithub />
            </div>
            <div> Sign up with Github</div>
          </div>
          <div className="mt-4 w-full h-[42px] rounded-2xl border-black border-[1.8px] px-[8px] py-[3px] flex flex-row items-center gap-x-12 hover:cursor-pointer">
            <div className="text-xl">
              {" "}
              <GrMail />
            </div>
            <Link href={"/signup/email"}>
              <div> Sign up with Email</div>
            </Link>
          </div>
        </div>
        <div className="mt-6">
          Already have an account?{" "}
          <span className="text-teal-600 font-[500] hover:cursor-pointer">
            signin
          </span>{" "}
        </div>
      </div>
    </div>
  );
}
