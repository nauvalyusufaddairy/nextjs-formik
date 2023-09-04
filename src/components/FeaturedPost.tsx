import React from "react";
import { AiFillPushpin } from "react-icons/ai";
import BlogCard from "./BlogCard";
import { User } from "@/data";

function FeaturedPost() {
  return (
    <div className="">
      <div className="w-full ">
        <div className="w-full flex flex-row justify-center flex-wrap gap-4">
          {User.map((v, i) => (
            <BlogCard
              date=""
              organization={v.organization}
              userId={v.userId}
              userImage={v.userImage}
              userPost={v.userPost[0].content}
              userName={v.userName}
              imgUrl={v.userPost[0].img[0].imgUrl}
              showImage={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedPost;
