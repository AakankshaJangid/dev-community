import Image from "next/image";
import Link from "next/link";
import React from "react";

const RoadmapsPreview = () => {
  return (
    <div className="flex justify-between items-center gap-6 px-8 py-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl">Roadmaps ?</h1>
        <p className="text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
          architecto provident voluptas fuga maiores non ullam! Esse, illum
          obcaecati? Doloremque excepturi aut, aliquid temporibus asperiores
          veniam repudiandae deserunt fugiat vero?
        </p>
        <Link href={"/roadmap"}>
          {" "}
          <span className="bg-[#F96D00] rounded-md text-white p-2 w-2/6">
            Go to roadmaps...
          </span>
        </Link>
      </div>
      <div>
        <Image
          src="/Innovation-amico.png"
          width={1000}
          height={1200}
          alt="logo-img"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default RoadmapsPreview;
