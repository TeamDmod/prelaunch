import Link from 'next/link';
import { useRouter } from 'next/router';
import React from "react";

export default function BeltItem({ name, icon, invite, memCount }: { name:string, icon?:StaticImageData, invite:string, memCount?:string }) {
    const router = useRouter();
    
    const toInvite = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        router.push(invite);
    }

    return (
		<>
            <style jsx>{`
                * {
                    overflow: hidden;
                }

                #container {
                    background-color: #fff;
                    height: 7vh;
                    width: 20vw;
                    border-radius: 2rem;

                    display: inline-flex;
                    align-items: center;
                    text-align: center;

                    white-space: nowrap;
                    margin: 40px;

                    will-change: transform;
                }
                
                #container img {
                    justify-content: center;
                    align-items: center;
                }

                #container:hover {
                    cursor: pointer;
                }

                .h2-memcount {
                    float: left;
                    color: #111;
                    position: absolute;
                    top: -15%;
                    left: 30%;
                }

                .h2-nomemcount {
                    float: left;
                    color: #111;
                }

                img {
                    justify-content: center;
                    align-items: center;
                    height: 6vh;
                    border-radius: 100px;
                    float: left;
                    margin-right: 1vw;
                    margin-left: 5px;
                }

                @media only screen and (max-width: 600px) {
                    #container {
                        width: 70vw;
                    }
                }

                @media only screen and (max-width: 800px) and (min-width: 600px) {
                    #container {
                        width: 32vw;
                    }
                }

                h4 {
                    color: #111;
                    position: absolute;
                    top: 30%;
                    left: 35%;
                    opacity: 0.75;
                }
            `}
            </style>

            <div id="container" onClick={(e) => toInvite(e)}>
                <img src={icon?.src} alt={"server logo" + name} />
                <h2 className={memCount ? 'h2-memcount': 'h2-nomemcount'}>{name}</h2>
                {memCount && (
                    <div style={{paddingTop: "25px"}}>
                        <h4>{memCount} members</h4>
                    </div>
                )}
            </div>
            

        </>
	);
}
