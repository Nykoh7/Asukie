const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    const number = Math.floor(Math.random() * 6) +1;

    message.channel.send(`<a:Dado:764302636349915196> **|** O dado que você jogou caiu em: \`${number}\``)

}

exports.help = {
    name: 'dado',
    aliases: ['dice']
}