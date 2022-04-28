const Nima = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
let FME = Config.WORKTYPE == 'public' ? false : true


    Nima.addCMD({pattern: 'nima', fromMe:FME,dontAddCMDList:true,deleteCommand: false }, (async (message, match) => {

            var video = await axios.get ('https://telegra.ph/file/037aea176fb5873eefb87.mp4', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (video.data), MessageType.audio, {mimetype: Mimetype.mp4Audio,quoted: message.data,ptt:true})

    }));
    
    
    Nima.addCMD({pattern: 'menu', fromMe:FME,dontAddCMDList:true,deleteCommand: false }, (async (message, match) => {

            var video = await axios.get ('https://telegra.ph/file/2d7afc1a3c2dc6c6c1f1f.mp4', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (video.data), MessageType.audio, {mimetype: Mimetype.mp4Audio,quoted: message.data,ptt:true})

    }));
