import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function BeltItem({
  name,
  icon,
  invite,
  members,
}: {
  name: string;
  icon?: string;
  invite: string;
  members?: number;
}) {
  const router = useRouter();

  const toInvite = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    router.push(invite);
  };

  return (
    <>
      <style jsx>{`
        .item {
          display: inline-flex;
          background-color: rgba(255, 255, 255, 0.494);
          border-radius: 10px;

          padding: 10px 50px 10px 10px;
          position: relative;
          width: 340px;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .item h3 {
          font-weight: 400;
          color: #fff;
        }

        .item h2 {
          font-weight: 500;
          color: #111;
          margin: 10px 0 0 10px;
        }

        .item img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        .item:hover {
          background-color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
        }
      `}</style>

      <div
        onClick={(e) => {
          toInvite(e);
        }}
        key={name + " display"}
        className={"item"}
      >
        <img src={icon} alt="" />
        <h2 style={{ textAlign: "center", fontSize: "1.5em" }}>{name}</h2>
      </div>
    </>
  );
}
