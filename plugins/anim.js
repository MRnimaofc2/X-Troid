const XTroid = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const CPK = "\n⚛》》》》》◆《《《《《⚛\n*🍭 ꪖ᭢ỉꪑꫀ ꪶỉకᡶ 🍭*\n\n┃\n┝🫐 *.rloli\n┃\n┝🫐 *.rwifu*\n┃\n┝🫐 *.rwolf*\n┃\n┝🫐 *.rshin*\n┃\n┝🫐 *.rwtc*\n┃\n╚⏤⏤⏤⏤╗❀╔⏤⏤⏤⏤╝\n"
const Config = require('../config')
const Ln = "Cpack Logo"
let FM = Config.WORKTYPE == 'public' ? false : true


XTroid.addCMD({pattern: 'listanimextro', fromMe: FM, deleteCommand: false, desc: Ln,}, (async (message, match) => {await message.client.sendMessage(message.jid,CPK, MessageType.text);}));
