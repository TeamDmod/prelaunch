import Link from 'next/link';
import Head from 'next/head'
import { useState } from 'react';
import FaqQuestion from './FaqQuestion';

export default function Faq() {

    let discordCommunityLink = <a href="https://dmod.gg/discord">Discord Community</a>

	return (
		<>
            <style jsx>{`
                .topRow {
                    display: block;
                    margin: auto;
                    word-break: break-all;
                }

                .topRow > a {
                    text-decoration: underline;
                }

                span:hover {
                    cursor: pointer;
                }
            `}</style>
            
            <h1 style={{marginBottom: "25px", marginTop: "50px"}}>FAQ</h1>
            {/* Left */}
            <span style={{paddingBottom: "2px"}}className="topRow"><FaqQuestion question="How do I request a Dispatch? " answer={<div>If you're a community owner looking to request a dispatch, please visit our <a style={{color: "lightblue"}} href="https://discord.gg/moderate">Discord Server</a> & open up a ticket in our <a style={{color: "lightblue"}} href="https://discord.com/channels/791278367960858635/809494449780424744">Support Channel</a>. We'll get back to you ASAP!</div>} /></span>
            <span className="topRow middle"><FaqQuestion question="How do I apply to become a Dispatch moderator? " answer={<div> If you would like to become a Dispatch moderator, please apply <a style={{color: "lightblue"}} href="https://forms.gle/uQdKBgpXW9CHhFsD8">here</a>. We'll review your application, and if you pass, we can move onto the interview process. </div>} /></span>

            <span className="topRow"><FaqQuestion question="What are your community acceptance guidelines? " answer={<div>In order to maintain the level of high-quality work that we want to achieve, we accept Dispatch requests based off of our own rules & regulations as well as Discord's. <a style={{color: "lightblue"}} href="https://dmod.super.site/dispatch/community-acceptance-guidelines">Our full acceptance guidelines can be found here</a></div>} /></span>
            <span className="topRow middle"><FaqQuestion question="Does Dmod ever dispatch moderators for free? " answer={<div>We do! While we tend to work under paid contracts, we are open to dispatching to communities that can’t afford to compensate us financially.</div>} /></span>
            


            {/* Middle */}
            <div className="container-mid">
                
            </div>
        </>
	);
}