import Link from 'next/link';
import { useRouter } from 'next/router';
import React from "react";
export default function BeltItem({ name, icon, invite, memCount, team }: { name:string, icon?:StaticImageData, invite:string, memCount?:string, team?:boolean  }) {
    const router = useRouter();
    
    const toInvite = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        router.push(invite);
    }

    return (
		<>
            <style jsx>{`
                .ourteamItem {
                    display: flex;
                    background-color: rgba(255, 255, 255, 0.494);
                    border-radius: 10px;

                    padding: 10px 50px 10px 10px;
                    transition: all 0.3s ease-in-out;

                    animation: move 40s infinite ease-in-out;
                    position: relative;
                }

                .ourteamItem h3 {
                    font-weight: 400;
                    color: #fff;
                }

                .ourteamItem h2 {
                    font-weight: 500;
                    color: #111;
                    margin: 10px 0 0 10px;
                }

                .ourteamItem img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }

                .ourteamItem:hover {
                    background-color: rgba(255, 255, 255, 0.7);
                    cursor: pointer;
                }

                .staffbeltItem {
                    display: flex;
                    background-color: rgba(255, 255, 255, 0.494);
                    border-radius: 10px;

                    padding: 10px 50px 10px 10px;
                    transition: all 0.3s ease-in-out;

                    animation: move 40s infinite ease-in-out;
                    position: relative;
                }

                .staffbeltItem img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }

                .staffbeltItem h2 {
                    font-weight: 500;
                    color: #111;
                    margin: 10px 0 0 10px;
                }

                .staffbeltItem h3 {
                    font-weight: 400;
                    color: #fff;
                }

                .staffbeltItem:hover {
                    background-color: rgba(255, 255, 255, 0.7);
                    cursor: pointer;
                }

                @keyframes move {
                    0% {
                        left: -50%;
                    }
                    50% {
                        left: 60%;
                    }
                    100% {
                        left: -50%;
                    }
                }
            `}</style>

            <div onClick={(e) => {
                toInvite(e);   
            }} key={name + " display"} className={team? "ourteamItem" : "staffbeltItem"}>
                <img src={icon?.src} alt={"Dispatch Logo Image"} />
                <h2 style={{ textAlign: "center", fontSize: "1.5em" }}>{name}</h2>
            </div>
            
        </>
	);
}
