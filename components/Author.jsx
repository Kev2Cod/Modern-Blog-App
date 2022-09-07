import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-6 relative rounded-lg bg-opacity-20 bg-black">
      <div className="absolute left-0 right-0 -top-11">
        <Image
          unoptimized
          src={author.photo.url}
          alt={author.name}
          height="80px"
          width="80px"
          className="align-middle rounded-full"
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
