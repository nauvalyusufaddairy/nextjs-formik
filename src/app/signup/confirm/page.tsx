"use client";
import React, { useState } from "react";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
export default function ConfirmSignup() {
  const [data, setData] = useState("");
  const initial = {
    email: false,
    password: false,
    confirm_password: false,
  };
  const searchParams = useSearchParams();
  const email = searchParams.get("email") as string;
  const router = useRouter();

  const [onfocus, setOnfocus] = useState(initial);
  const handleSubmit = async (email: string, code: string) => {
    await fetch("/api/confirm_signup", {
      method: "POST",
      body: JSON.stringify({ email, code }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (v) => {
        if (v.status === 200) {
          router.push("/signin");
        }
      })
      .catch((err) => {
        console.log("eerr", err);
      });
  };
  console.log("data", data);

  return (
    <div className="w-screen h-screen ">
      <div className="w-[350px] h-[568px] relative mx-auto mt-[77px] items-center flex flex-col rounded-lg px-[32px] py-[42px] shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
        <div className="text-2xl font-[500]">Confirm Registration</div>
        <div className="w-full mt-[36px] flex-col gap-y-8">
          <div
            className={`w-full h-[42px] rounded-2xl ${
              onfocus.email ? "border-teal-600 border-[2px]" : ""
            } border-black border-[1.8px]  px-[2px] py-[2px] flex flex-row items-center gap-x-12 hover:cursor-pointer`}
          >
            <input
              onChange={(v) => setData(v.target.value)}
              onBlur={() => setOnfocus({ ...onfocus, email: false })}
              onFocus={() => setOnfocus({ ...onfocus, email: true })}
              placeholder="code"
              type="text"
              className="w-full h-full border-none outline-none px-4 py-2  rounded-2xl font-[500] text-black "
            />
          </div>
        </div>

        <div className="mt-6 w-full flex flex-row justify-center">
          <button
            onClick={() => handleSubmit(email, data)}
            className="w-[100px] h-[36px] bg-teal-900 text-white text-xl rounded-2xl flex items-center justify-center"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { useSearchParams } from "next/navigation";
// import { useState } from "react";

// export default function ConfirmSignup() {
//   const searchParams = useSearchParams();
//   const email = searchParams.get("email");

//   const [data, setData] = useState("");
//   const handleSubmit = async () => {
//     await fetch("/api/confirm_signup", {
//       method: "POST",
//       body: JSON.stringify({ code: data, email }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then((v) => {
//       console.log("anjayyy", v.status);
//     });
//   };
//   return (
//     <>
//       <div className="w-full flex flex-row items-center justify-center bg-slate-400 gap-4">
//         <input onChange={(v) => setData(v.target.value)} />
//         <button onClick={handleSubmit}>submit</button>
//       </div>
//     </>
//   );
// }
