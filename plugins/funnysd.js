const Nima = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const config = require('../config');
const axios = require('axios');
const ytmp3 = require('../mrnima/ytmp3');
const Config = require('../config');
const yts = require( 'yt-search' )


Nima.addCMD({pattern: 'song ?(.*)', fromMe: false,desc:'Download your song' dontAddCommandList: true, deleteCommand: false}, (async (message, match) => { 
        
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,'කිසිවක් සොයාගත නොහැකි විය.*' ,MessageType.text, {quoted: message.data});
       var load = await message.client.sendMessage(message.jid,Config.SONG_DOWN_TEXT,MessageType.text, {quoted: message.data});
        
        let title = arama[0].title.replace(/ /gi, '+');
        let title2 = arama[0].title
        let url = arama[0].url
        let stream = await ytmp3(url);
        const song = await axios.get(stream.mp3 ,{responseType: 'arraybuffer'});
        
      var up = await message.client.sendMessage(message.jid,'Config.SONG_UP_TEXT',MessageType.text, {quoted: message.data});
                 await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true}) ; 
                await message.client.sendMessage(message.jid,Buffer.from(song.data), MessageType.audio, {filename: title2 + '.mp3', mimetype:Mimetype.mp4Audio, ptt: false, quoted: message.data});
                await message.client.deleteMessage(message.jid, {id: up.key.id, remoteJid: message.jid, fromMe: true}) ;


}));
