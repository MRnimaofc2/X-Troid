const XTroid = require('../events');
const fs = require('fs'); 
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const chalk = require('chalk'); 
const axios = require('axios'); 


XTroid.addCMD({pattern: 'bot', fromMe: false, OnlyGroup: true,dontAddCMDList:true}, (async (message, match) => {

    await message.sendMessage('\n*HELO !*\n\n');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('\n *ɪ ᴀᴍ x-ᴛʀᴏɪᴅ*\n');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('\n Get my all command type *.menu*\n');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('\n\n *ɪғ ʏᴏᴜ ᴡᴀɴᴛ ᴊᴏɪɴ* \n     ☃⛓️Ոɿɱค ૦ԲԲɿ८ɿคՆ ᶜᴿᴱᵂ 🕯️❖ \n *Respect rules* \n\n');
    await new Promise(r => setTimeout(r, 1000));
    await message.client.sendMessage(message.jid,'\n*https://chat.whatsapp.com/Fs5ZpTLA3u64JN5a6K3a44*\n',MessageType.text, {quoted: message.data});   
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('\n*if you want special help please wait 🎭*\n');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('\n*ɴᴏᴛ ғʀᴏ ᴘᴜʙʟɪᴄ ᴏɴʟʏ ᴍʏ ᴜsᴇ 🪄*\n ');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage ('\n *Happy new year 🪄* \n');
}));
