import BeltItem from "components/DispatchPage/BeltItem";
import Faq from "components/DispatchPage/Faq";
import Footer from "components/Footer"
import Head from "next/head";
import React, {useState} from "react";

import { DaniLogo, BreadLogo, PepeLogo, PhotographyLogo, RythmLogo, MarioKartLogo, WorldLogo, StreamlabsLogo, WooshiLogo, CreaviteLogo, HangoutCafeLogo, EgirlLogo, SquidGameLogo, DispatchLogo } from "utils/Images";

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
                        animation: moveBlock 13s linear 3s infinite;
                    }

                    .div3 {
                        display: inline-block;
                        left: -500px;
                        position: absolute;
                        animation: moveBlock 13s linear 6s infinite;
                    }

                    .div4 {
                        display: inline-block;
                        left: -500px;
                        position: absolute;
                        animation: moveBlock 13s linear 9s infinite;
                    }

                    .div5 {
                        display: inline-block;
                        left: -500px;
                        position: absolute;
                        animation: moveBlock 13s linear 11s infinite;
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
                        <h1>Our Staff Are Experienced</h1>
                        <p>Below is a list of the communities our staff have moderated. That's a guarantee of our quality and professionalism.</p>
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
                    </div>

                    <div className="conveyor-container">
                        <div className="div1">
                            <BeltItem name={"Dani's Basement"} icon={DaniLogo} invite={"https://discord.gg/Dani"} memCount={"161k+"}/>
                        </div>

                        <div className="div2">
                            <BeltItem name={"Bread"} icon={BreadLogo} invite={"https://discord.gg/bread"} memCount={"6500+"}/>
                        </div>

                        <div className="div3">
                            <BeltItem name={"Pepe Server"} icon={PepeLogo} invite={"https://discord.gg/pepe"} memCount={"472k+"}/>
                        </div>

                        <div className="div4">
                            <BeltItem name={"Photography Lounge"} icon={PhotographyLogo} invite={"https://discord.gg/photography"} memCount={"4300+"}/>
                        </div>
                    </div>

                    <div style={{paddingTop: "65px", paddingBottom: "15px"}}className="top">
                        <h1>Previous Clients</h1>
                        <p>Below is a list of the communities that our staff have been dispatched to. These communities vary in needs and sizes, rest assured, our team handled all the requests without any stress.</p>
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
                            <BeltItem name={"E-Girl Heaven"} icon={EgirlLogo} invite={"https://discord.gg/egirls"} memCount={"90k+"}/>
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


