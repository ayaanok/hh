const { Client } = require("discord.js");
const client = new Client({ intents: 37627 });

client.on("ready", () => {
    console.log(`[!]: Logged in as ${client.user.tag}`)
});

if(!message.member.hasPermission(["MANAGE_ROLES"]) && !ownerID.includes(message.author.id)) return message.channel.send("You dont have permission to perform this command!")

client.on("mesageCreate", (message) => {
    if (message.content.startsWith("official")) {
        const user = message.mentions.members.first();
        if (!user) {
             message.channel.send({ content: "mention someone first" });
        } else {
           member.roles.add("952185539476488232")
           message.channel.send({ content: "added a role to them" });
        }
    }
});

client.login('OTQxOTQzMjk2OTIwNTI2ODcw.YgdTDg.jKUPvICHWgFE6Xr13c9vsF6MLoE');      
