import BeltItem from "components/DispatchPage/BeltItem";
import Faq from "components/DispatchPage/Faq";
import Footer from "components/Footer"
import Head from "next/head";
import React, {useState} from "react";

import { NZXTLogo, FallGuysLogo, DankMemerLogo, ValorantLogo, RizeLogo, ENSLogo, DaniLogo, PepeLogo, RythmLogo, MarioKartLogo, WorldLogo, StreamlabsLogo, WooshiLogo, CreaviteLogo, HangoutCafeLogo, DispatchLogo } from "utils/Images";

class DispatchPage extends React.Component {
    render(){
        return (
            <>
                <style jsx>{`
                    * {
                        overflow: hidden;
                    }

                    #dispatch-program-header {
                        float: left;
                        line-height: normal;
                    }
                    
                    #dmod-header {
                        color: #FF63F7;
                        font-size: 35px;
                        font-weight: 500;
                    }

                    #dispatch-info {
                        float: left;
                        position: relative;
                        padding: 20px;
                    }

                    .conveyor-container {
                        height: 50px;
                        display: inline-block;
                        position: relative;
                        overflow: hidden;
                        padding-bottom: 120px;
                    }

                    @keyframes moveBlock {
                        to { left: 100%; }
                    }

                    .div1 {
                        display: inline-block;
                        left: -500px;
                        position: absolute;
                        animation: moveBlock 13s linear infinite;
                        z-index: 100;
                    }

                    .div2 {
                        display: inline-block;
                        left: -500px;
                        position: absolute;
                        animation: moveBlock 13s linear 2.5s infinite;
                    }

                    .div3 {
                        display: inline-block;
                        left: -500px;
                        position: absolute;
                        animation: moveBlock 13s linear 5s infinite;
                    }

                    .div4 {
                        display: inline-block;
                        left: -500px;
                        position: absolute;
                        animation: moveBlock 13s linear 7.5s infinite;
                    }

                    .div5 {
                        display: inline-block;
                        left: -500px;
                        position: absolute;
                        animation: moveBlock 13s linear 10.25s infinite;
                    }

                    @media only screen and (max-width: 600px) {
                        #dispatch-logo {
                        left: 64%;
                        top: 32%;
                        position: absolute; 
                        }

                        .div1 {
                            animation: moveBlock 10s linear infinite;
                            display: inline-flex;
                        }
                        .div2 {
                            animation: moveBlock 10s linear 5s infinite;
                        }
                        .div3 {
                            animation: moveBlock 10s linear 10s infinite;
                        }
                        .div4 {
                            animation: moveBlock 10s linear 15s infinite;
                        }
                        .div5 {
                            animation: moveBlock 10s linear 20s infinite;
                        }
                    }
                `}</style>

                <Head>
                 {/* <Metatags title="Dispatch Page" description="nice description" /> */}
                 <link rel='canonical' href='https://dmod.gg' />
                </Head>
                <main>
                    <div>
                        <h2 id="dmod-header">Dmod</h2>
                        <h1 id="dispatch-program-header">Dispatch
                        Program</h1>
                        <img style={{marginLeft: "10px"}} src={DispatchLogo.src} alt="dispatch logo" id="dispatch-logo" />
                    </div>
                    <br />
                    <div className="top" style={{paddingTop: "50px"}}>
                        <h1>Our Team</h1>
                        <p>Below is a list of the communities our staff members have experience working at.</p>
                    </div>

                    {/* Conveyor Belts */}
                    <div className="conveyor-container">
                        <div className="div1">
                            <BeltItem name={"Jet's Dream World"} icon={WorldLogo} invite={"https://discord.gg/world"} memCount={"480k+"} />
                        </div>

                        <div className="div2">
                            <BeltItem name={"Streamlabs"} icon={StreamlabsLogo} invite={"https://discord.gg/stream"} memCount={"252k+"}/>
                        </div>

                        <div className="div3">
                            <BeltItem name={"Mario Kart"} icon={MarioKartLogo} invite={"https://discord.gg/mariokart"} memCount={"19k+"}/>
                        </div>

                        <div className="div4">
                            <BeltItem name={"Rythm"} icon={RythmLogo} invite={"https://discord.gg/rythm"} memCount={"386k+"} />
                        </div>

                        <div className="div5">
                            <BeltItem name={"NZXT"} icon={NZXTLogo} invite={"https://discord.gg/nzxt"} memCount={"113k+"} />
                        </div>
                    </div>

                    <div className="conveyor-container">
                        <div className="div1">
                            <BeltItem name={"Dani's Basement"} icon={DaniLogo} invite={"https://discord.gg/Dani"} memCount={"161k+"}/>
                        </div>

                        <div className="div2">
                            <BeltItem name={"VALORANT"} icon={ValorantLogo} invite={"https://discord.gg/valorant"} memCount={"799,999k"}/>
                        </div>

                        <div className="div3">
                            <BeltItem name={"Pepe Server"} icon={PepeLogo} invite={"https://discord.gg/pepe"} memCount={"472k+"}/>
                        </div>

                        <div className="div4">
                            <BeltItem name={"Fall Guys"} icon={FallGuysLogo} invite={"https://discord.gg/fallguys"} memCount={"227k+"}/>
                        </div>

                        <div className="div5">
                            <BeltItem name={"Dank Memer"} icon={DankMemerLogo} invite={"https://discord.gg/memers"} memCount={"371k+"}/>
                        </div>
                    </div>

                    <div style={{paddingTop: "65px", paddingBottom: "15px"}}className="top">
                        <h1>Clientele</h1>
                        <p>Whether you’re a community focused on competitive gaming, a server for your Web3 company, we'll cover your needs with reliability and care.</p>
                    </div>
                    
                    <div className="conveyor-container">
                        <div className="div1">
                            <BeltItem name={"Wooshi.World"} icon={WooshiLogo} invite={"https://discord.gg/wooshi"} memCount={"38k+"}/>
                        </div>

                        <div className="div2">
                            <BeltItem name={"creavite.co"} icon={CreaviteLogo} invite={"https://discord.gg/creavite"} memCount={"20k+"}/>
                        </div>

                        <div className="div3">
                            <BeltItem name={"Hangout Cafe"} icon={HangoutCafeLogo} invite={"https://discord.gg/message"} memCount={"107k+"}/>
                        </div>

                        <div className="div4">
                            <BeltItem name={"ENS"} icon={ENSLogo} invite={"https://discord.gg/ens"} memCount={"38k+"}/>
                        </div>

                        <div className="div5">
                            <BeltItem name={"Rize"} icon={RizeLogo} invite={"https://discord.gg/gh7rTyEfWm"} memCount={"277+"}/>
                        </div>
                    </div>
                    
                    <Faq />
                    <div style={{marginBottom: "50px"}}></div>
                    <Footer />
                </main>
            </>
        )
    }
}

export default DispatchPage;


