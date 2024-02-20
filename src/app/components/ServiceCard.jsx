import React from "react";
import Image from "next/image";

const ServiceCard = ({ index, src, alt, title, summary, points }) => {
  let order = "";
  if (index % 2 === 1) {
    order = "order-first";
  }

  return (
    <section
      className="text-white border border-[#33353F] rounded-xl my-6"
      id="about"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 md:py-16 xl:px-16">
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          className="rounded-xl"
        />
        <div
          className={`mt-4 md:mt-0 text-left flex flex-col h-full justify-center ${order}`}
        >
          <h3 className="text-2xl font-bold text-white mb-6 md:mb-10">
            {title}
          </h3>
          <p className="text-base lg:text-lg">{summary}</p>
          <div className="my-4 pl-2">{points}</div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
