import React from "react";

const CLIENTS = [
  {
    name: "RekrutKlin",
    img: "/images/clients/124bcf6e-7338-42b9-9290-f1f013121c49.png",
    height: "h-9 sm:h-10",
  },
  {
    name: "Farasha Clinical Research Partners",
    img: "/images/clients/0af52846-8719-46b3-93e4-08f45d62c5f5.png",
    height: "h-9 sm:h-[42px]",
  },
  {
    name: "Prime Site Academy",
    img: "/images/clients/f8e67b78-10dc-4388-ad41-58e62f0be2ec.png",
    height: "h-8 sm:h-[38px]",
  },
  {
    name: "Seasteel Marine",
    img: "/images/clients/54ed7e08-97cb-4825-a672-2f7e0e285b0d.png",
    height: "h-12 sm:h-[58px]",
  },
  {
    name: "Adar Limited",
    isText: true,
  },
];

export const ClientMarquee = () => {
  return (
    <section
      aria-label="Clients"
      className="w-full bg-[#E4E4E2] py-7 sm:py-8 overflow-hidden select-none"
    >
      <div className="ap-marquee flex items-center whitespace-nowrap">
        {/* Track 1 */}
        <div className="flex items-center gap-16 sm:gap-24 pr-16 sm:pr-24 flex-shrink-0">
          {CLIENTS.map((client, idx) => (
            <div key={`client-1-${idx}`} className="flex items-center justify-center">
              {client.isText ? (
                <span className="font-tight font-semibold text-2xl sm:text-[26px] tracking-[-0.01em] text-[#1F2A37]">
                  {client.name}
                </span>
              ) : (
                <img
                  src={client.img}
                  alt={client.name}
                  loading="lazy"
                  className={`${client.height} w-auto object-contain brightness-95 contrast-105`}
                  draggable={false}
                />
              )}
            </div>
          ))}
        </div>

        {/* Track 2 (exact duplicate for seamless continuous loop) */}
        <div
          aria-hidden="true"
          className="flex items-center gap-16 sm:gap-24 pr-16 sm:pr-24 flex-shrink-0"
        >
          {CLIENTS.map((client, idx) => (
            <div key={`client-2-${idx}`} className="flex items-center justify-center">
              {client.isText ? (
                <span className="font-tight font-semibold text-2xl sm:text-[26px] tracking-[-0.01em] text-[#1F2A37]">
                  {client.name}
                </span>
              ) : (
                <img
                  src={client.img}
                  alt=""
                  loading="lazy"
                  className={`${client.height} w-auto object-contain brightness-95 contrast-105`}
                  draggable={false}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
