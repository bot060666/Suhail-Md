const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_09_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDU4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDg5LFxuICAgICAgICA3OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDksXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NyxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTczLFxuICAgICAgICA3OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMixcbiAgICAgICAgNzMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NixcbiAgICAgICAgMTUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAxODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MixcbiAgICAgICAgODksXG4gICAgICAgIDE1LFxuICAgICAgICA4NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxODksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExLFxuICAgICAgICA4NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDcxLFxuICAgICAgICA1NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDczLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUm5xTmV0ZU12N1UwUHFyaHVGTXUvVjZKa2tWcUxPbHNYWUJzOHRvMm1Maz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNDcxMTY2ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY2NzNEMDczNEJBQ0ZDNjg5REQ1RkU3NjhGNzc0MjY3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0ODYzNTc0M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfUGlKWVVjaFNhZWFIaEhKaEdTWkdnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM5MzA0MjA5LTJlMzMtNDEzZS04ZDI1LWU0ZGY5ZTU5YzliMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzMsXG4gICAgICAyMzksXG4gICAgICAxOTksXG4gICAgICA4LFxuICAgICAgMjQ5LFxuICAgICAgMjIyLFxuICAgICAgMTY2LFxuICAgICAgMTkxLFxuICAgICAgMTg5LFxuICAgICAgMCxcbiAgICAgIDQxLFxuICAgICAgMjUsXG4gICAgICAxMTMsXG4gICAgICA5OCxcbiAgICAgIDQ1LFxuICAgICAgMjQ0LFxuICAgICAgMTUwLFxuICAgICAgNCxcbiAgICAgIDU4LFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OCxcbiAgICAgIDEzOSxcbiAgICAgIDc1LFxuICAgICAgMjM1LFxuICAgICAgMTgwLFxuICAgICAgMjMzLFxuICAgICAgMjYsXG4gICAgICA4NCxcbiAgICAgIDMyLFxuICAgICAgMTA3LFxuICAgICAgOTksXG4gICAgICAzOSxcbiAgICAgIDIsXG4gICAgICAxMTMsXG4gICAgICAyNixcbiAgICAgIDg3LFxuICAgICAgNDMsXG4gICAgICAxNyxcbiAgICAgIDExMyxcbiAgICAgIDM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0w3K2RVQ0VObWc2TUVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRCcG5qYlQyalk3UzlEN3REOVZmL1E3U0dERzdKc3o4bGVEQlV0TG5GTlZjWFdGaU9hQzdjV3BBL1VFNWY1TTlQa2ZmbmZhM3RDZ2xmaEJtK3BjRkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldZUFVlcUFYZWtKVFpmSERtQVUrdnJFUGxRZU1JWGZEMEJRMHVFellZMGd4Z3JtTkEzeEhSaW0yd1llaXl3b2lWUnV2ZjdyTmhhaEtOazE4VW51QURnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo3N0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDg2MzU3NDBcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "🌸ضـ۬ـۧۛـ𝆊۬ـ۬ــــ۬ـۧۛـ𝆊۬دی مــّْ͢ـْــلـ۬ـۧۛـ𝆊۬ک⁰¹²🩷03247116683🤌🏻",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
