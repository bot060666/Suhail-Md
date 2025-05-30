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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_24_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDY4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNixcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMixcbiAgICAgICAgMjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDYwLFxuICAgICAgICA2NSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDc3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTczLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjksXG4gICAgICAgIDM2LFxuICAgICAgICA0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDM5LFxuICAgICAgICAwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NixcbiAgICAgICAgMTU5LFxuICAgICAgICA0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NyxcbiAgICAgICAgODksXG4gICAgICAgIDUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NixcbiAgICAgICAgNjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTksXG4gICAgICAgIDMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDkyLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib2hFNGJ2aTFZOG1RRmZ5ZXRBaG4vZS9jY0htWnE0cWlFSXZybk9ka3IrUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNDcxMTY2ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVENEE2MkM2QjZEMEU4NzQxRjQ2M0E5M0M0Qjg3NjA0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0ODU2NDY1N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyTzBmcTJ3MFJQcUhBQlVmS2FiZml3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjkyODY0NmYzLWY5MmItNDk1Zi1hNTcxLWI1NGNmMjczNzhlN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MSxcbiAgICAgIDI0MixcbiAgICAgIDE3NixcbiAgICAgIDM2LFxuICAgICAgMTc3LFxuICAgICAgMjUyLFxuICAgICAgNTcsXG4gICAgICA2LFxuICAgICAgMTgwLFxuICAgICAgMzcsXG4gICAgICA4MCxcbiAgICAgIDMsXG4gICAgICAyNTMsXG4gICAgICAxNzQsXG4gICAgICA2NixcbiAgICAgIDE5NixcbiAgICAgIDEzOCxcbiAgICAgIDIxLFxuICAgICAgMTkxLFxuICAgICAgMTg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMyxcbiAgICAgIDIyMyxcbiAgICAgIDEwLFxuICAgICAgMTAzLFxuICAgICAgMTg5LFxuICAgICAgMjM4LFxuICAgICAgMTIyLFxuICAgICAgNzUsXG4gICAgICA4LFxuICAgICAgMTAwLFxuICAgICAgMTk2LFxuICAgICAgNDgsXG4gICAgICA3NixcbiAgICAgIDMzLFxuICAgICAgMjE0LFxuICAgICAgMjE5LFxuICAgICAgMTQsXG4gICAgICA1MixcbiAgICAgIDgyLFxuICAgICAgMTYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTi83K2RVQ0VLbjE0OEVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm0zcjR2Sm1Pd3lnY1VkN3dOdEMyRUxjMDI3Z3o0Q2kxSy9IT0RnKzhDMk00NGVZa1M3WlZQZ2pvNUR2RjJMTlJZUXZ4c1I0ZnhQOGQ3czhBMzcvOERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9HRnJ5UGowUVN2Z0NkTGlvWDZlU1MwS1RTOWJ3NjJUekpLejBVMXNsZXl1K0VoUi93aXRLSENUUVM0ZzRaUjV1RWh1K0hKcDJ6czhvNTErV3lMc0J3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo3NEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDg1NjQ2NTNcbn0iCn0="  // PUT your SESSION_ID 


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
