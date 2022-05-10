const XTroid = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
let FM = Config.WORKTYPE == 'public' ? false : true
const hrs = new Date().getHours({ timeZone: Config.TIME_ZONE })

XTroid.addCMD({pattern: 'alive', fromMe: FM, deleteCommand: true,}, (async (message, match) => {
var time = new Date().toLocaleString('HI', { timeZone: Config.STIME_ZONE }).split(' ')[1]
var wish = ''
if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌇*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🪐*'

var nima = '╭───────────────╮\n├─ *🐺 x ᴛʀᴏɪᴅ ɴɪᴍᴀ ᴇᴅɪᴛɪᴏɴ 🐺*\n├─  ⌚ ɴᴏᴡ ᴀᴛ :'+time+'\n├─  📡 ʜᴀɴᴅʟᴇʀs : '+'*'+Config.HANDLERS+'*'+'\n├─*'+wish+'*\n╰───────────────╯'



var lasi = await axios.get(`${Config.ALIVEIMG}`, { responseType: 'arraybuffer' })
await new Promise(r=> setTimeout(r,2000));
await message.client.sendMessage(message.jid, Buffer.from(lasi.data), MessageType.image, {mimetype: Mimetype.png, caption: nima+ '\n\n' +Config.ALIVETEXT+'\n\n*x-ᴛʀᴏɪᴅ ᴛᴇsᴛ ᴇᴅɪᴛɪᴏɴ | ᴍʀ ɴɪᴍᴀ*'})
    }));
