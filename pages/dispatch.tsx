import { DispatchLogo, SquidGameLogo, WendysLogo } from 'utils/Images';
import { useState } from 'react';
import BeltItem from 'components/DispatchPage/BeltItem';

import { dslLogo, BughaLogo, FallGuysLogo, NZXTLogo, DankMemerLogo, DaniLogo, G2Logo, ENSLogo, RizeLogo, WooshiLogo, CreaviteLogo, PanthersLogo, HangoutLogo, EGirlLogo } from 'utils/Images';

export default function Dispatch() {

    const clients = [
        {
            name: 'Rize',
            url: 'discord.gg/gh7rTyEfWm',
            members: "1000",
            logo: RizeLogo
        },
        {
            name: 'Wooshi World',
            url: 'https://discord.gg/wooshi',
            members: "1000",
            logo: WooshiLogo
        },
        {
            name: 'Creavite',
            url: 'https://discord.gg/creavite',
            members: "1000",
            logo: CreaviteLogo
        },
        {
            name: 'Faded Panthers',
            url: 'https://discord.gg/JKtDeJDXJn',
            members: "1000",
            logo: PanthersLogo
        },
        {
            name: 'Hangout Cafe',
            url: 'https://discord.gg/message',
            members: "1000",
            logo: HangoutLogo
        },
        {
            name: 'E-Girl Heaven',
            url: 'https://discord.gg/egirls',
            members: "1000",
            logo: EGirlLogo
        },
        {
            name: 'Squid Game',
            url: 'https://discord.gg/squidgame',
            members: "1000",
            logo: SquidGameLogo
        },
    ];

    const ourTeam = [
        {
            name: 'Fall Guys',
            url: 'https://discord.gg/fallguys',
            members: "1000",
            logo: FallGuysLogo
        },
        {
            name: 'G2 Esports',
            url: 'https://discord.gg/g2esports',
            members: "1000",
            logo: G2Logo
        },
        {
            name: 'Dank Memer',
            url: 'https://discord.gg/memers',
            members: "1000",
            logo: DankMemerLogo
        },
        {
            name: 'NZXT',
            url: 'https://discord.gg/nzxt',
            members: "1000",
            logo: NZXTLogo
        },
        {
            name: 'Wendy\'s',
            url: 'https://discord.gg/wendys',
            members: "1000",
            logo: WendysLogo
        },
        {
            name: 'Discords.com',
            url: 'https://discord.gg/dsl',
            members: "1000",
            logo: dslLogo
        },
    ]



    return (
        <>
        <style jsx>{`
            .faq {
                width: 100%;
                max-width: 800px;
                margin: 0 auto;
                padding: 0 15px;
            }
            
            .question {
                background-color: #283042;
                border-radius: 9px;
                margin-bottom: 10px;
                padding: 10px;
                box-shadow: 5px 2px 5px rgba(0, 0, 0, 0.1);
            }
            
            .questionlink {
                font-size: 1.6rem;
                color: rgba(255, 255, 255, 0.8);
                text-decoration: none;
                background-color: #283042;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 0;
            }
            
            .answer {
                max-height: 0;
                overflow: hidden;
                position: relative;
                background-color: #212838;
                transition: max-height 650ms ease-in-out;
            }
            
            .answer::before {
                content: "";
                position: absolute;
                width: 6px;
                height: 90%;
                background-color: #091831;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
            }
            
            .answer p {
                font-size: 14px;
                color:rgba(255, 255, 255, 0.6);
                padding: 20px;
            }
            
            .question:target .answer {
                max-height: 200px;
            }


        `}</style>
        <div style={{ background: "linear-gradient(180deg, #061021 0%, #0b2041 100%)", minHeight: "min-height: calc(100vh - 6rem)", display: "grid" }}>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontWeight: 500, color: "#fff", marginTop: "25px" }}>Dispatch Program</h1>
            </div>
            <div className='top'>
                <h1 style={{ opacity: "0.75", marginTop: "60px", color: "#fff", fontSize: "2.6em", textAlign: "center", fontWeight: 400, position: "relative" }}>Clientele</h1>
                <p style={{ marginBottom: "35px", fontSize: "1.7em" }}>Whether your community is focused on competitive gaming, Web3, or a university, we'll cover your needs with reliability and care.</p>  
            </div>
            
            <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "center", alignItems: "stretch", alignContent: "center", gap: "20px", overflow: "hidden", margin: "0px 18vw 0 18vw" }}>
                {clients.map((client, index:number) => (
                    <BeltItem name={client.name} icon={client.logo} invite={client.url} team={false} />
                ))}
            </div>
            
            <div className="top">
                <h1 style={{ opacity: "0.75", marginTop: "40px", color: "#fff", fontSize: "2.6em", textAlign: "center", fontWeight: 400, position: "relative" }}>Our Team</h1>
                <p style={{ fontSize: "1.7em" }}>Below are some of the communities our staff members have experience working with.</p>
            </div>
            
            <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "center", alignItems: "stretch", alignContent: "center", gap: "20px", overflow: "hidden", margin: "0px 18vw 0 18vw" }}>
                {ourTeam.map((client, index:number) => (
                    <BeltItem name={client.name} icon={client.logo} invite={client.url} team={true}/>
                ))}
            </div>
            <div style={{marginTop: "75px"}}/>
            
            {/* FAQ */}
            <h1 style={{ opacity: "0.75", marginBottom: "40px"}}>FAQ</h1>

            <div className="faq">
                <div className="question" id="question1">
                    <a className="questionlink" href="#question1">
                        How do I request a Dispatch?
                    </a>
                    <div className="answer">
                        <p>
                             If you're a community owner looking to request a dispatch, please visit our Discord community <a href="https://discord.gg/moderate" style={{color: "lightblue"}}>https://discord.gg/moderate</a> & open up a ticket in our support channel. We'll get back to you ASAP! 
                        </p>  
                    </div>
                </div>

                <div className="question" id="question2">
                    <a className="questionlink" href="#question2">
                        How do I apply to become a Dispatch moderator? 
                    </a>
                    <div className="answer">
                        <p>
                             If you would like to become a Dispatch moderator, please apply <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPVHja-oy-ausc4UcPFA3jE-apA0FDEy4hm-cklKFSnVlkQw/viewform" style={{color: "lightblue"}}>here</a>. We'll review your application, and if you pass, we can move onto the interview process.
                        </p> 
                    </div>
                </div>
                
                <div className="question" id="question3">
                    <a className="questionlink" href="#question3">
                        What are your community acceptance guidelines? 
                    </a>
                    <div className="answer">
                        <p>
                             In order to maintain the level of high-quality work that we want to achieve, we accept Dispatch requests based off of our own rules & regulations as well as Discord's. <a style={{color: "lightblue"}} href="https://dmod.super.site/dispatch/community-acceptance-guidelines">Our full acceptance guidelines can be found here</a>
                        </p>
                    </div>
                </div>

                <div className="question" id="question4">
                    <a className="questionlink" href="#question4">
                        Does Dmod ever dispatch moderators for free? 
                    </a>
                    <div className="answer">
                        <p>
                            We do! While we tend to work under paid contracts, we are open to dispatching to communities that can’t afford to compensate us financially.
                        </p>  
                    </div>
                </div>
            </div>
            <div style={{marginTop: "400px"}}/> 
        </div>
        </>
    )
}