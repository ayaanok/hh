const { Client } = require("discord.js");
const client = new Client({ intents: 37627 });

client.on("ready", () => {
    console.log(`[!]: Logged in as ${client.user.tag}`)
});

client.on("mesageCreate", (message) => {
    if (message.content.startsWith(".official")) {
        const user = message.mentions.members.first();
        if (!user) {
             message.channel.send({ content: "mention someone first" });
        } else {
           member.roles.add("ROLE ID HERE")
           message.channel.send({ content: "added a role to them" });
        }
    }
});

client.login(process.env.token);      
