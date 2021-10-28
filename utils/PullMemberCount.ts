import axios from "axios";

export default function pullMemberCount(serverid:string) {
    console.log(process.env.BOT_TOKEN);
    axios.get(`https://discord.com/api/guilds/${serverid}?withCounts=true`, {
        headers: {
            // Pass headers to the API request to authenticate, later did Codeize realise the Discord API is a bit of a pain, so he abandoned it because the bot cannot access a guild it is not in, if any Discord REST API wizards are reading this we would love to hear your solution @ https://dmod.gg/discord.
            // Dan agreed with the comment above, this is the reason we ended up hard coding it in. :) We aren't lazy, we're smart, we swear. This isn't a bug, its a feature.
            "Authorization": `Bot ${process.env.BOT_TOKEN}`
        }
    }).then(res => {
        console.log(res.data.approximate_member_count);
    }).catch(err => {
        console.log(err);
    });



    


}