/*



  !- Credits By Skyzopedia

  https://wa.me/6285624297894



  //YOUTUBE.COM/@JAGOANPROJECT

  //join channel Whatsapp:

  // https://whatsapp.com/channel/0029VanhMDo42DcjiRGJOc2m

  

*/



process.on('uncaughtException', console.error)

process.on('unhandledRejection', console.error)



require('./settings');

const fs = require('fs');

const path = require('path');

const util = require('util');

const jimp = require('jimp');

const axios = require('axios');

const chalk = require('chalk');

const yts = require('yt-search');

const { ytmp3, ytmp4 } = require("ruhend-scraper")

const JsConfuser = require('js-confuser');

const speed = require('performance-now');

const moment = require("moment-timezone");

const nou = require("node-os-utils");

const cheerio = require('cheerio');

const os = require('os');

const { say } = require("cfonts")

const pino = require('pino');

const { Client } = require('ssh2');

const fetch = require('node-fetch');

const crypto = require('crypto');

const { exec, spawn, execSync } = require('child_process');



const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')



const { LoadDataBase } = require('./source/message')

const contacts = JSON.parse(fs.readFileSync("./library/database/contacts.json"))

const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"))

const premium = JSON.parse(fs.readFileSync("./library/database/premium.json"))

const list = JSON.parse(fs.readFileSync("./library/database/list.json"))

const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./library/scraper');

const { toAudio, toPTT, toVideo, ffmpeg } = require("./library/converter.js")

const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./library/function');



module.exports = conn = async (conn, m, chatUpdate, store) => {

	try {

await LoadDataBase(conn, m)

const botNumber = await conn.decodeJid(conn.user.id)

const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

const budy = (typeof m.text == 'string' ? m.text : '')

const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)

const prefix = "."

const isCmd = body.startsWith(prefix) ? true : false

const args = body.trim().split(/ +/).slice(1)

const getQuoted = (m.quoted || m)

const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m

const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""

const isPremium = premium.includes(m.sender)

const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false

const text = q = args.join(' ')

const mime = (quoted.msg || quoted).mimetype || ''

const qmsg = (quoted.msg || quoted)





//~~~~~~~~~ Console Message ~~~~~~~~//



if (isCmd) {

console.log(chalk.yellow.bgCyan.bold(botname2), chalk.blue.bold(`[ PESAN ]`), chalk.blue.bold(`${m.sender.split("@")[0]} =>`), chalk.blue.bold(`${prefix+command}`))

}



//~~~~~~~~~~~ Fake Quoted ~~~~~~~~~~//



if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return



const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}



const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}



const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}



const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}



const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Botz"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}



const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}



const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}





//~~~~~~~~~~ Event Settings ~~~~~~~~~//



if (global.db.settings.owneroffmode && global.db.settings.owneroffmode == true && !isCreator && !m.isGroup) {

return conn.sendMessage(m.chat, {text: `

Maaf Owner Bot Sedang *Offline*, 

Tunggu & Jangan Spam Chat! 

Ini Adalah Pesan Otomatis Auto Respon Ketika Owner Sedang Offline

`}, {quoted: qtext2})

}



if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return



if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {

var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi

if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {

var gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))

var isLinkThisGc = new RegExp(gclink, 'i')

var isgclink = isLinkThisGc.test(m.text)

if (isgclink) return

let delet = m.key.participant

let bang = m.key.id

await conn.sendMessage(m.chat, {text: `*乂 Link Grup Terdeteksi*



@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})

await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})

await sleep(1000)

await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")

}}





if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {

var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi

if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {

var gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))

var isLinkThisGc = new RegExp(gclink, 'i')

var isgclink = isLinkThisGc.test(m.text)

if (isgclink) return

let delet = m.key.participant

let bang = m.key.id

await conn.sendMessage(m.chat, {text: `*乂 Link Grup Terdeteksi*



@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})

await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})

/*await sleep(1000)

await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/

}}





if (m.isGroup && db.settings.autopromosi == true) {

if (m.text.includes("https://") && !m.fromMe) {

await conn.sendMessage(m.chat, {text: `

*Skypedia Menyediakan 🌟*

* Panel Pterodactyl Server Private

* Script Bot WhatsApp

* Domain (Request Nama Domain & Free Akses Cloudflare)

* Nokos WhatsApp All Region (Tergantung Stok!)

* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp

* Jasa Suntik Followers/Like/Views All Sosmed

* Jasa Install Panel Pterodactyl

* Dan Lain Lain Langsung Tanyakan Saja.



*🏠 Join Grup Bebas Promosi*

* *Grup Bebas Promosi 1 :*

https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy

* *Grup Bebas Promosi 2 :*

https://chat.whatsapp.com/CWO0TqYeCVbIoY4YzsTxb7

* *Channel Testimoni :*

https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s



*👤 Contact Skypedia*

* *WhatsApp Utama :*

+6285135365009

* *WhtasApp Cadangan :*

+6281269367485

https://t.me/skyzodev

`}, {quoted: null})

}}



if (!isCmd) {

let check = list.find(e => e.cmd == body.toLowerCase())

if (check) {

await m.reply(check.respon)

}}





//~~~~~~~~~ Function Main ~~~~~~~~~~//



const example = (teks) => {

return `\n *Example Command :*\n *${prefix+command}* ${teks}\n`

}



function generateRandomPassword() {

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';

const length = 10;

let password = '';

for (let i = 0; i < length; i++) {

const randomIndex = Math.floor(Math.random() * characters.length);

password += characters[randomIndex];

}

return password;

}



function generateRandomNumber(min, max) {

return Math.floor(Math.random() * (max - min + 1)) + min;

}



const Reply = async (teks) => {

return conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {

externalAdReply: {

title: botname, 

body: `© Powered By ${namaOwner}`, 

thumbnailUrl: global.image.reply, 

sourceUrl: null, 

}}}, {quoted: qtext})

}



const slideButton = async (jid, mention = []) => {

let imgsc = await prepareWAMessageMedia({ image: { url: global.image.logo }}, { upload: conn.waUploadToServer })

const msgii = await generateWAMessageFromContent(jid, {

ephemeralMessage: {

message: {

messageContextInfo: {

deviceListMetadata: {},

deviceListMetadataVersion: 2

}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({

body: proto.Message.InteractiveMessage.Body.fromObject({

text: "*All Transaksi Open ✅*\n\n*Skypedia* Menyediakan Produk & Jasa Dibawah Ini ⬇️"

}), 

contextInfo: {

mentionedJid: mention

}, 

carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({

cards: [{

header: proto.Message.InteractiveMessage.Header.fromObject({

title: `*Skypedia Menyediakan 🌟*



* Panel Pterodactyl Server Private

* Script Bot WhatsApp

* Domain (Request Nama Domain & Free Akses Cloudflare)

* Nokos WhatsApp All Region (Tergantung Stok!)

* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp

* Jasa Suntik Followers/Like/Views All Sosmed

* Jasa Install Panel Pterodactyl

* Dan Lain Lain Langsung Tanyakan Saja.



*🏠 Join Grup Bebas Promosi*

* *Grup  Bebas Promosi 1 :*

https://chat.whatsapp.com/BNrO2WHYBlD251ZhOuqDbz

* *Channel Testimoni :*

https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s`, 

hasMediaAttachment: true,

...imgsc

}), 

nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({

buttons: [{                  

name: "cta_url",

buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`

}]

})

}, 

{

header: proto.Message.InteractiveMessage.Header.fromObject({

title: `*List Panel Run Bot Private 🌟*



* Ram 1GB : Rp1000



* Ram 2 GB : Rp2000



* Ram 3 GB : Rp3000



* Ram 4 GB : Rp4000



* Ram 5 GB : Rp5000



* Ram 6 GB : Rp6000



* Ram 7 GB : Rp7000



* Ram 8 GB : Rp8000



* Ram 9 GB : Rp9000



* Ram Unlimited : Rp11.000



*Syarat & Ketentuan :*

* _Server private & kualitas terbaik!_

* _Script bot dijamin aman (anti drama/maling)_

* _Garansi 10 hari (1x replace)_

* _Server anti delay/lemot!_

* _Claim garansi wajib bawa bukti transaksi_`, 

hasMediaAttachment: true,

...imgsc

}),

nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({

buttons: [{                  

name: "cta_url",

buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`

}]

})

}]

})

})}

}}, {userJid: m.sender, quoted: qlocJpm})

await conn.relayMessage(jid, msgii.message, {messageId: msgii.key.id})

}





//~~~~~~~~~~~ Command ~~~~~~~~~~~//



switch (command) {

case "menu": {

let teksnya = `

Haii @${m.sender.split("@")[0]},

Perkenalkan, saya adalah *${global.botname2}*. klik tombol menu di bawah ini untuk mengetahui berbagai fitur yang dapat saya lakukan.

`

await conn.sendMessage(m.chat, {

  footer: `© 2024 ${botname}`,

  buttons: [

    {

      buttonId: `.allmenu`,

      buttonText: { displayText: 'Menu' },

      type: 1

    },

    {

      buttonId: `.owner`,

      buttonText: { displayText: 'Owner' },

      type: 1

    }

  ],

  headerType: 1,

  viewOnce: true,

  document: fs.readFileSync("./package.json"),

  fileName: `By ${namaOwner} </>`,

  mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',

  fileLength: 99999999,

  caption: teksnya,

  contextInfo: {

   isForwarded: true, 

   mentionedJid: [m.sender], 

   forwardedNewsletterMessageInfo: {

   newsletterJid: global.idSaluran,

   newsletterName: global.namaSaluran

   }, 

    externalAdReply: {

      title: `${botname} - ${versi}`,

      body: `📍 Runtime : ${runtime(process.uptime())}`,

      thumbnailUrl: global.image.menu,

      sourceUrl: linkSaluran,

      mediaType: 1,

      renderLargerThumbnail: true,

    },

  },

})

}

break



case "allmenu": {

let teks = `

\`▧ I N F O R M A T I O N\`

  • Botname : *${global.botname2}*

  • Version : *${global.versi}*

  • Mode : *${conn.public ? "Public": "Self"}*

  • Creator : @${global.owner}

  • Uptime Vps : *${runtime(os.uptime())}*



  • Your Status *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : "Free User"})*

  

\`▧ Othermenu\`

  • .cekidch

  • .cekidgc

  • .qc

  • .brat

  • .bratvid

  • .readviewonce

  • .stickerwm

  • .sticker

  

\`▧ Searchmenu\`

  • .yts

  • .apkmod

  • .pinterest

  • .gimage  

  • .sfile

  

\`▧ Toolsmenu\`

  • .ai

  • .gpt

  • .tourl

  • .tourl2

  • .ssweb

  • .translate

  • .tohd

  • .shortlink

  • .shortlink2

  • .enc

  • .enchard

  

\`▧ Shopmenu\`

  • .buypanel

  • .buyadp

  • .buyscript

  • .buyvps

  

\`▧ Downloadmenu\`

  • .tiktok

  • .tiktokmp3

  • .facebook

  • .capcut

  • .instagram

  • .ytmp3

  • .ytmp4

  • .play

  • .playvid

  • .gitclone

  • .mediafire

  

\`▧ Storemenu\`

  • .addrespon

  • .delrespon

  • .listrespon

  • .done

  • .proses

  • .jpm

  • .jpm2

  • .jpmtesti

  • .jpmslide

  • .jpmslideht

  • .sendtesti

  • .pushkontak

  • .pushkontak2

  • .payment

  • .produk

  

\`▧ Digitaloceanmenu\`

  • .cvps

  • .sisadroplet

  • .deldroplet

  • .listdroplet

  • .rebuild

  • .restartvps

  

\`▧ Panelmenu Reseller\`

  • .addseller

  • .delseller

  • .listseller

  • .1gb

  • .2gb

  • .3gb

  • .4gb

  • .5gb

  • .6gb

  • .7gb

  • .8gb

  • .9gb

  • .10gb

  • .unlimited

  • .cadmin

  • .delpanel

  • .deladmin

  • .listpanel

  • .listadmin

    

\`▧ Panelmenu Owner\`

  • .1gb-v2

  • .2gb-v2

  • .3gb-v2

  • .4gb-v2

  • .5gb-v2

  • .6gb-v2

  • .7gb-v2

  • .8gb-v2

  • .9gb-v2

  • .10gb-v2

  • .unlimited-v2

  • .cadmin-v2

  • .delpanel-v2

  • .deladmin-v2

  • .listpanel-v2

  • .listadmin-v2

  

\`▧ Installermenu\`

  • .hackbackpanel

  • .installpanel

  • .installtemastellar

  • .installtemabilling

  • .installtemaenigma

  • .uninstallpanel

  • .uninstalltema

  

\`▧ Groupmenu\`

  • .antilink

  • .antilink2

  • .blacklistjpm

  • .welcome

  • .add

  • .kick

  • .close

  • .open

  • .hidetag

  • .kudetagc

  • .leave

  • .tagall

  • .promote

  • .demote

  • .resetlinkgc

  • .linkgc

  

\`▧ Ownermenu\`

  • .autoread

  • .autopromosi

  • .autoreadsw

  • .autotyping

  • .addowner

  • .listowner

  • .delowner

  • .self/public

  • .subdomain

  • .setimgmenu

  • .setimgfake

  • .setppbot

  • .clearsession

  • .clearchat

  • .resetdb

  • .restartbot

  • .getsc

  • .getcase

  • .listgc

  • .joingc

  • .joinch

  • .upchannel

  • .upchannel2

  `

await conn.sendMessage(m.chat, {

  footer: `© 2024 ${botname}`,

  buttons: [

    {

      buttonId: `.owner`,

      buttonText: { displayText: 'Contact Owner' },

      type: 1

    },

    {

    buttonId: 'action',

    buttonText: { displayText: 'ini pesan interactiveMeta' },

    type: 4,

    nativeFlowInfo: {

        name: 'single_select',

        paramsJson: JSON.stringify({

          title: 'Beli Produk',

          sections: [

            {

              title: 'List Produk',

              highlight_label: 'Recommended',

              rows: [

                {

                  title: 'Panel Pterodactyl',

                  id: '.buypanel'

                },

                {

                  title: 'Admin Panel Pterodactyl',

                  id: '.buyadp'

                },                

                {

                  title: 'Vps (Virtual Private Server)',

                  id: '.buyvps'

                },

                {

                  title: 'Script Bot WhatsApp',

                  id: '.buysc'

                }

              ]

            }

          ]

        })

      }

      }

  ],

  headerType: 1,

  viewOnce: true,

  document: fs.readFileSync("./package.json"),

  fileName: `By ${namaOwner} </>`,

  mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',

  fileLength: 99999999,

  caption: teks,

  contextInfo: {

   isForwarded: true, 

   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 

   forwardedNewsletterMessageInfo: {

   newsletterJid: global.idSaluran,

   newsletterName: global.namaSaluran

   },    

    externalAdReply: {

      title: `${botname} - ${versi}`,

      body: `📍 Runtime : ${runtime(process.uptime())}`,

      thumbnailUrl: global.image.menu,

      sourceUrl: linkSaluran,

      mediaType: 1,

      renderLargerThumbnail: true,

    },

  },

})

}

break



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//



case "delete": case "del": {

if (m.isGroup) {

if (!isCreator && !m.isAdmin) return Reply(mess.admin)

if (!m.quoted) return m.reply("reply pesannya")

if (m.quoted.fromMe) {

conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})

} else {

if (!m.isBotAdmin) return Reply(mess.botAdmin)

conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})

}} else {

if (!isCreator) return Reply(mess.owner)

if (!m.quoted) return m.reply(example("reply pesan"))

conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quo
