import Link from 'next/link';
import { useRouter } from 'next/router';
import React from "react";

import styles from "../../styles/dispatch.module.scss";

export default function BeltItem({ name, icon, invite, memCount, team }: { name:string, icon?:StaticImageData, invite:string, memCount?:string, team?:boolean  }) {
    const router = useRouter();
    
    const toInvite = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        router.push(invite);
    }

    return (
		<>
            <div className={team ? styles.ourteamItem : styles.clienteleItem} onClick={(e) => {
                toInvite(e);   
            }} key={name + " display"}>
                <img src={icon?.src} alt={"Dispatch Logo Image"} />
                <h2>{name}</h2>
            </div>
            
        </>
	);
}
