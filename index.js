const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix =  "-";

Client.on("ready", () => {
    console.log("Bot allumé");
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Merci de mentionner un utilisateur.");
            }
            else {
                if(mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName + " a bien été banni.");
                }
                else {
                    message.reply("Erreur : Impossible de bannir cet utilisateur.")
                }
            }
        }
        else if(message.content.startsWith(prefix +"kick")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Merci de mentionner un utilisateur.");
            }
            else {
                if(mention.kickable){
                    mention.kick();
                    message.channel.send(mention.displayName + " a bien été kick.");
                }
                else {
                    message.reply("Erreur : Impossible de kick cet utilisateur.");
                }
            }
        }
        else if(message.content.startsWith(prefix + "mute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Merci de mentionner un utilisateur.")
            }
            else {
                mention.roles.add("744966448862068937");
                message.channel.send(mention.displayName + " a bien été mute.");
            }
        }
        else if(message.content.startsWith(prefix + "unmute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Merci de mentionner un utilisateur.")
            }
            else {
                mention.roles.remove("744966448862068937");
                message.channel.send(mention.displayName + " a bien été unmute.");
            }

        }
        else if(message.content.startsWith(prefix + "tempmute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Merci de mentionner un utilisateur.");
            }
            else {
                let args = message.content.split(" ");

                mention.roles.remove("744644039638253668");
                mention.roles.add("744966448862068937");
                message.channel.send(mention.displayName + " a bien été tempmute.");
                setTimeout(function() {
                    mention.roles.remove("744966448862068937");
                    mention.roles.add("744644039638253668");
                    message.channel.send("<@" + mention.id + "> tu peux à nouveau parler !");
                }, args[2] * 1000);
            }
        }
    }
});


Client.login("NzQ0NTQ1NzgxMzgxNTk1MTc4.XzkySw.b36YnVOjOWMvKRPfVj3jarVup3A");