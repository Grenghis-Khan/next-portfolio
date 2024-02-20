import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        // style={{
        //   background: `url(${imgUrl})`,
        //   backgroundSize: "contain",
        //   backgroundRepeat: "no-repeat",
        //   marginLeft: "auto",
        //   marginRight: `${imgUrl === "/oneCTRL.png" ? "auto" : 0}`,
        //   width: `${imgUrl === "/oneCTRL.png" ? "36%" : ""}`,
        // }}
      >
        <Image
          src={imgUrl}
          alt="oneCTRL Image"
          // width={300}
          // height={300}
          fill={true}
          className="rounded-t-xl object-cover"
        />
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={previewUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#161923] py-6 px-4">
        <h5 className="font-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] md:h-28 lg:h-16">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
