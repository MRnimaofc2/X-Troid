const { MessageType, GroupSettingChange, ChatModification, WAConnectionTest } = require('@adiwajshing/baileys');
const XTroid = require('../events');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('artlist');

XTroid.addCMD({ pattern: 'artlist', fromMe: false, desc:Lang.ART_DESC, dontAddCMDList: false, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`*╭─────▢  ART LIST  ▢──────╮* 
│
│ *👨🏻‍💻 ᴍᴀᴅᴇ ʙʏ ᴍʀ ɴɪᴍᴀ*
│ *🐼 x ᴛʀᴏɪᴅ ɴɪᴍᴀ ᴇᴅɪᴛɪᴏɴ* 
│
*╰──────────────────╯*
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

🎭   .art1
🎭   .art2
🎭   .art3
🎭   .art4
🎭   .art5
🎭   .art6
🎭   .art7
🎭   .art8
🎭   .art9
🎭   .art010
🎭   .art011
🎭   .art012
🎭   .art013
🎭   .art014
🎭   .art015
🎭   .art016
🎭   .art017
🎭   .art018
🎭   .art019
🎭   .art020
🎭   .art021
🎭   .art022
🎭   .art023
🎭   .art024
🎭   .art025
🎭   .art026

═══════════
x-ᴛʀᴏɪᴅ ᴡᴀ ʙᴏᴛ ᴀʀᴛ ʟɪsᴛ 
═══════════
© ᴍʀ ɴɪᴍᴀ\n`);

    
}));


XTroid.addCMD({ pattern: 'art1', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n*🎭⚜️ ᴀʀᴛ 1 🎭⚜️*
    
▬▬▬..◙..▬▬▬
   ▂▄▄▄▓▄▄▂
◢◤█▀▀████▄▄▄▄     ◢◤
█▄ █ー  ███▀▀▀▀▀▀▀╬
◥█████◤
══╩══╩══\n `);
    
}));
    
XTroid.addCMD({ pattern: 'art2', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n*🎭⚜️ ᴀʀᴛ 2🎭⚜️* 
    
╔══╗
║██║
║(O)║♫ ♪ ♫ ♪
╚══╝
▄ █ ▄ █ ▄ ▄ █ ▄ █ ▄ █
Min- - - - - - - - - - - -●Max \n `);
   
   
}));

XTroid.addCMD({ pattern: 'art3', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n*🌬️🎭⚜️ ᴀʀᴛ 3 🎭⚜️*
    
 ╮╰╮╮▕╲╰╮╭╯╱▏╭╭╭╭
╰╰╮╰╭╱▔▔▔▔╲╮╯╭╯
┏━┓┏┫╭▅╲╱▅╮┣┓╭║║║
╰┳╯╰┫┗━╭╮━┛┣╯╯╚╬╝
╭┻╮╱╰╮╰━━╯╭╯╲┊   ║
╰┳┫▔╲╰┳━━┳╯╱▔┊   ║
┈┃╰━━╲▕╲╱▏╱━━━┬╨╮
┈╰━━╮┊▕╱╲▏┊╭━━┴╥╯\n `);

   

}));

XTroid.addCMD({ pattern: 'art4', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n*🎭⚜️ ᴀʀᴛ 4 🎭⚜️*
    
    ｡♥｡･ﾟ♡ﾟ･｡♥｡･｡･｡･｡♥｡･
    
╱╱╱╱╱╱╱╭╮╱╱╱╭╮╱╭╮╭╮
╭━┳━┳━┳╯┃╭━┳╋╋━┫╰┫╰╮
┃╋┃╋┃╋┃╋┃┃┃┃┃┃╋┃┃┃╭┫
┣╮┣━┻━┻━╯╰┻━┻╋╮┣┻┻━╯
╰━╯╱╱╱╱╱╱╱╱╱╱╰━╯

｡♥｡･ﾟ♡ﾟ･｡♥° ♥｡･ﾟ♡ﾟ･\n `);

   
}));

XTroid.addCMD({ pattern: 'art5', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n*🎭⚜️ ᴀʀᴛ 5 🎭⚜️*
    
┈┈┈┈┏┓┈┈┈┈☆┈┈┈┈┈
┈┈┈┈┣┫┈┈┈┈┈┈☆┈┈┈
┈┈┈╭╯╰╮┈┈☆┈┈┈┈┈┈
┈┈┈┃╭╮┃┈╭━☆╮┈┈┈┈
┈┈┈┃╳╳┃┈┣━━┣╮┈┈┈
╭━━┃╰╯┃━┃╲╲┣╯━━╮
┃╲╲╰━━╯╲╰━━╯╲╲╲┃ \n `);

}));

XTroid.addCMD({ pattern: 'art6', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n*🎭⚜️ ᴀʀᴛ 6 🎭⚜️*
    
♜♞♝♚♛♝♞♜
♟♟♟♟♟♟♟♟
▓░▓░▓░▓░▓░▓░
░▓░▓░▓░▓░▓░▓
▓░▓░▓░▓░▓░▓░
░▓░▓░▓░▓░▓░▓
♙♙♙♙♙♙♙♙
♖♘♗♔♕♗♘♖\n `);

   
}));

XTroid.addCMD({ pattern: 'art7', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n*🎭⚜️ ᴀʀᴛ 7 🎭⚜️*
    
   ♥ ♥♥ ✫¸.•°°•✫...
▄██▄██▄╔╗ ♥ ♥
▀█████▀║║╔═╦╦╦═╗▄██▄██▄
──▀█▀──║╚╣╬║║║╩╣▀█████▀
───────╚═╩═╩═╩═╝──▀█▀❤️‍🔥\n `);

   
}));

XTroid.addCMD({ pattern: 'art8', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage( `*🎭⚜️ ᴀʀᴛ 8 🎭⚜️*
    
 
 ⋱ ⋮ ⋰
⋯ ◯ ⋯ ︵ 　　　　　　^v^
 ︵︵( ░░ )︵.︵.︵
( ░░░░░░  ) ░░░ 
   　🎊       🎊
╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝
♪♫•*¨*•.˽ ❤ ˽ .•*¨*•♫♪\n `);

    

}));
    
XTroid.addCMD({ pattern: 'art9', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n*🎭⚜️ᴀʀᴛ 9 🎭⚜️*
    
  _.█████████████████
_ ██████████████████
████████████████████
█████████████████████
_█___________▄▄▄▄_ ▄▄▄▄_█
_█__█████_▐▓▓▌_▐▓▓▌_█
_█__█████_▐▓▓▌_▐▓▓▌_█
_█__█████_▐▓▓▌_▐▓▓▌_█
_█__█████_▀▀▀▀_ ▀▀▀▀ █✿ ✿
_█__█████_______________ █(\\|/)
_____________██ ______________██
_____________█
______________█
_______________██
_________________██
___________________██
__________________██
_________________███
______________████
___________█████
_________██████
_______██████
 මේ මොකක්ද කියලා හදපු මමවත් දන්නේ න.😂😂\n `);
 
  

}));   

XTroid.addCMD({ pattern: 'art010', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage( `*🎭⚜️ ᴀʀᴛ 10 🎭⚜️*
    


▂▂╱▔▔▔▔▔▔▔▔▔▔▔▔╲
╲▂┈╭╮┈┈╭━━╮╭╮┈┈▕
┈┈▏┃┃┈┈┃╭╮┃┃┃┈┈▕
┈┈▏┃╰━╮┃╰╯┃┃╰━╮▕
┈┈▏╰━━╯╰━━╯╰━━╯▕
┈┈╲▂▂▂▂▂▂▂▂▂▂▂▂╱\n `);

      

}));

XTroid.addCMD({ pattern: 'art011', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n*🎭⚜️ ᴀʀᴛ 11 🎭⚜️*



╔══╗♥
╚╗╔╝♥
╔╝╚╗♥
╚══╝♥
╔╗ ♥ღ♥ღ♥ღ♥
║║╔═╦╦╦╔╗
║╚╣║║║║╔╣
╚═╩═╩═╩═╝
╔╗╔╗♥
║║║║♥
║╚╝║♥
╚══╝♥\n `);

   
}));

XTroid.addCMD({ pattern: 'art012', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n*🎭⚜️ ᴀʀᴛ 12 🎭⚜️*


┏┓┏┓┊┊┊┊┊┊┊┊┊┊┊┊
┃┗┛┣━━┳━━┳━━┳┓┏┓
┃┛┗┃╭╮┃┛┛┃┗┗┃╰┛┃
┃╰╯┃┗┛┃╰╯┃╰╯┣━╮┃
┃┏┓┃┏┓┃┏━┫┏┳┻━╯┃
┗┛┗┻┛┗┻┛┊┗┛┗━━━
🎉🎊 𝘽𝙄𝙍𝙏𝙃 𝘿𝘼𝙔 🎊🎉\n `);
   

}));

XTroid.addCMD({ pattern: 'art013', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n *🎭⚜️ ᴀʀᴛ 13 🎭⚜️*


╭━━━━━━━╮
┃       ● ══    ┃
┃███████┃
┃███████┃
┃███████┃
┃███████┃
┃███████┃
┃███████┃
┃███████┃
┃███████┃
┃         ○        ┃
╰━━━━━━━╯\n `);

      

}));

XTroid.addCMD({ pattern: 'art014', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n *🎭⚜️ ᴀʀᴛ 14 🎭⚜️*
    
 . ___________________
▕╮╭┻┻╮╭┻┻╮╭▕╮╲
  ╯┃╭╮┃┃╭╮┃╰▕╯╭▏
▕╭┻┻┻┛┗┻┻┛   ▕  ╰▏
▕╰━━━┓┈┈┈╭╮▕╭╮▏
▕╭╮╰┳┳┳┳╯╰╯▕╰╯▏
▕╰╯┈┗┛┗┛┈╭╮▕╮┈▏

`);
   
   
}));

XTroid.addCMD({ pattern: 'art015', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n *🎭⚜️ ᴀʀᴛ 15 🎭⚜️*


█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█-----╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗-----█
█-----║║║╠─║─║─║║║║║╠─-----█
█-----╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝-----█
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█  

`);

    
    
})); 
   
XTroid.addCMD({ pattern: 'art016', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n *🎭⚜️ ᴀʀᴛ 16 🎭⚜️*


.          🎈🎈  ☁️
         🎈🎈🎈
 ☁️     🎈🎈🎈🎈
       🎈🎈🎈🎈
  ☁️    ⁣🎈🎈🎈
         \|/
         🏠   ☁️
   ☁️         ☁️
🌳🌹🏫🌳🏢🏢_🏢🏢🌳🌳 

`);

    

}));

XTroid.addCMD({ pattern: 'art017', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n *🎭⚜️ ᴀʀᴛ 17 🎭⚜️*

░░░░░░░░░░░░░▄▐░░░░
░░░░░░░▄▄▄░░▄██▄░░░
░░░░░░▐▀█▀▌░░░░▀█▄░
░░░░░░▐█▄█▌░░░░░░▀█▄
░░░░░░░▀▄▀░░░▄▄▄▄▄▀▀
░░░░░▄▄▄██▀▀▀▀░░░░░
░░░░█▀▄▄▄█░▀▀░░░░░░
░░░░▌░▄▄▄▐▌▀▀▀░░░░░
░▄░▐░░░▄▄░█░▀▀░░░░░
░▀█▌░░░▄░▀█▀░▀░░░░░
░░░░░░░░▄▄▐▌▄▄░░░░░
░░░░░░░░▀███▀█▄░░░░
░░░░░░░▐▌▀▄▀▄▀▐░░░░
░░░░░░░▐▀░░░░░░▐▌░░
░░░░░░░█░░░░░░░░█░░
░░░░░░▐▌░░░░░░░░░█░

`);

   

   

}));

XTroid.addCMD({ pattern: 'art018', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n *🎭⚜️ ᴀʀᴛ 18 🎭⚜️*


📔📚           📚
📓📚📖  😫  📚📚📓
📕📚📚  📝  📗💻📘
📖⁣📖📖📖📖📖📖📖📖

`);

   

   

}));

XTroid.addCMD({ pattern: 'art019', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n *🎭⚜️ ᴀʀᴛ 19 🎭⚜️*


😏/
/▌ 
/ \
████
╬╬
╬╬
╬╬
╬╬
╬╬
╬╬
╬╬\😦
╬╬/▌
╬╬/\

`);

   

   

}));

XTroid.addCMD({ pattern: 'art020', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n *🎭⚜️ ᴀʀᴛ 20 🎭⚜️*


......(\_/)
......( '_')
..../""""""""""""\======░ ▒▓▓█D
/"""""""""""""""""""\
\_@@@@@ /


පයර් 😂 \n`);

   

 }));

XTroid.addCMD({ pattern: 'art021', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n *🎭⚜️ ᴀʀᴛ 21 🎭⚜️*

▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ \n `);
    
     

}));

XTroid.addCMD({ pattern: 'art022', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n *🎭⚜️ ᴀʀᴛ 22  🎭⚜️*



─────────▄────
───────▐█▌────
───▄▄▄─▀─▄▄▄──
─▄█████▄█████▄
▐███████████▀─
▐██████████───
─███████████▄─
──███████████▀
───▀██▀─▀██▀──
──────────────
▀▐▀█▐────▄──▄▄
█▐▀▀▐█▐█▌▐█▌▌█
█▐──▐▐▐▄▌▐▐▌█▄ \n `);

   

   

}));

XTroid.addCMD({ pattern: 'art023', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n *🎭⚜️ ᴀʀᴛ 23 🎭⚜️*

░░░░░░░░░░█
░░░░░░░░▄▄█▄▄
░░░░▀▀▀██▀▀▀██▀▀▀
▄▄▄▄▄▄▄███████▄▄▄▄▄▄▄
░░█▄█░░▀██▄██▀░░█▄█  \n `);
   

}));


XTroid.addCMD({ pattern: 'art024', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n *🎭⚜️ ᴀʀᴛ 24  🎭⚜️*

🌞  

 

         ╱◥████◣
│田│▓ ∩│◥███◣
╱◥◣ ◥████◣田∩田│
│╱◥█◣║∩∩∩ 田∩田│
║◥███◣∩田∩ 田∩田│
│∩│ ▓ ║∩田│║▓田▓
🌹🌷🌹🌷🌹🍃🌷
✨ 𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶  ✨\n `);

   

   

}));


XTroid.addCMD({ pattern: 'art025', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n *🎭⚜️ ᴀʀᴛ 25  🎭⚜️*
    

🌙.     *°       ☄️*      
🌟   .         .         
 *.   .      🛰     .        ✨      .*
  .     *   SLEEP WELL        🚀     
      .              . . SWEET DREAMS 🌙
. *.       🌏 GOOD NIGHT         .*
                     🌙.     *       ☄️      
🌟   .  *       .         
  *.   .      🛰     .        ✨      .* \n `);

   

   

}));


XTroid.addCMD({ pattern: 'art026', fromMe: false, desc: 'MR NIMA ART LIST', dontAddCMDList: true, deleteCommand: false  }, (async (message, match) => {

    await message.sendMessage(`\n═══ ⛦⛦ ═══

╔╗╔╗  ╔══╗╔═╗╔═╗╔══╗╔══╗
╚╗╔╝  ╚╗╔╝║╬║║║║╚║║╝╚╗╗║
╔╝╚╗  ─║║─║╗╣║║║╔║║╗╔╩╝║
╚╝╚╝  ─╚╝─╚╩╝╚═╝╚══╝╚══╝

⚜️ X-TROID WA BOT ART LIST 
⚜️ CRATED BY MR NIMA 
⚜️ POWERED BY  *🇱🇰🎭 ALPHA TEAM 🇱🇰🎭* \n `);

   

 }));


