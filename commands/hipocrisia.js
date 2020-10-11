const Jimp = require('jimp')
const c = require('../config.json')
const Discord = require('discord.js')

module.exports = {
	name: 'hipocrisia',
	aliases: [''],
  run: async (client, message, args) => {


        if (message.content.split(' ').slice(1).join(' ').length < 1) {
            message.channel.send('<a:errado:753245066965024871> **|** Você não escreveu nada.')
        } else {
            if (message.content.split(' ').slice(1).join(' ').length > 50) {
                message.channel.send('<a:errado:753245066965024871> **|** Você ultrapassou o limite de 50 caracteres. Você não quer uma edição feia ne?')
            } else {
                if (message.member.hasPermission('ATTACH_FILES')) {
                    var authorMessage = message
                    message.channel.send('<a:loading:753391174202425364> **|** Processando...').then(message => {
                        Jimp.read(`https://cdn.discordapp.com/attachments/759155689733226517/764677448423309322/76b59f362b7f2d57bc6539b37cb54985.png`, function (err, image) {
                            if (err) message.channel.send('<a:errado:753245066965024871> **|** Ocorreu um erro ao criar a imagem.')
                            Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function (font) {
                                image.print(font, 50, 100, authorMessage.content.split(' ').slice(1).join(' '), 700)
                                var aguardeMessage = message
                                image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                                    const attachment = new Discord.MessageAttachment(buffer, 'hipocrisia.png')
                                    message.channel.send(attachment).then(message => {
                                        aguardeMessage.delete()
                                    })
                                })
                            })
                        })
                    })
                }
            }
        }
    }
}