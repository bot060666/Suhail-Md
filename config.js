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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_38_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzksXG4gICAgICAgIDc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMixcbiAgICAgICAgMTY2LFxuICAgICAgICA5MCxcbiAgICAgICAgNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDczLFxuICAgICAgICA1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODUsXG4gICAgICAgIDM1LFxuICAgICAgICA3MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDg2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM2LFxuICAgICAgICAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDgzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2MixcbiAgICAgICAgMjU0LFxuICAgICAgICA1OSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODksXG4gICAgICAgIDUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDYyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDYwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUyLFxuICAgICAgICA0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWWWdjcUFLdDBxeEszQUxKSmVCUDZpbXBNeFZaZmt4Wkt1M2ZWcmQzS1lFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQUjdOdTlQWVE4LVVjQl9xRlVUWThnXCIsXG4gIFwicGhvbmVJZFwiOiBcImFlZGM2YWE3LWU2ZTQtNGMxMy05ZDk5LTg0ODMwNGE0MjY1ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzUsXG4gICAgICAyNDcsXG4gICAgICA5LFxuICAgICAgMTgyLFxuICAgICAgMTM1LFxuICAgICAgMjMwLFxuICAgICAgNDIsXG4gICAgICAyNTMsXG4gICAgICAzMSxcbiAgICAgIDE2OCxcbiAgICAgIDIzNixcbiAgICAgIDE1OCxcbiAgICAgIDE1NSxcbiAgICAgIDI0MyxcbiAgICAgIDEsXG4gICAgICA3MyxcbiAgICAgIDExMCxcbiAgICAgIDExOSxcbiAgICAgIDExMCxcbiAgICAgIDU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICAxMDIsXG4gICAgICAyMzMsXG4gICAgICAxMTEsXG4gICAgICAxNzksXG4gICAgICAxNTEsXG4gICAgICAyMjYsXG4gICAgICAxNzEsXG4gICAgICAxOTEsXG4gICAgICA3MixcbiAgICAgIDEzLFxuICAgICAgMTI2LFxuICAgICAgMjM3LFxuICAgICAgMjU1LFxuICAgICAgMjIyLFxuICAgICAgMTIwLFxuICAgICAgNzIsXG4gICAgICAxOCxcbiAgICAgIDIzOCxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmI3K2RVQ0VMTEIwY0VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZIdm1nZHJyNGl5cm92RkFKTURqcUVmb1R3dXE1UFhxaURLTTRha1Z5U3Z5UmIxUjJJdS9EUkwzTmtPcHlNRloxMUtwRTVQemtnQWJTaEtsRGlOT0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhSTDFGTHU2TDZiVDRVcUJyWmdHTFIyRWRTWVp1d3RNMHpFYml0VGpmMzlnY1Rud1NhbXdZRTdLbCt3WXhXSUJtakhpUExQMXpmWUVJUG91bkdzRWpBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo2NkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDgyNjMwOTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNTUxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1NSi5qc29uIjogIntcImtleURhdGFcIjpcImZnNFI1d1hKb3QvaUlJdTc2akhFZnZoNGtjRWpGZ0MyMnF3ZnFNNVZwTjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTIzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNTUsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4Qm1HYXl0dmh0VE41anBmQWRCY3I0UVRDcllTdEg1T0QrbWFaSVhSRmRVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzEyMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODE5MzI0MDA3M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1NTC5qc29uIjogIntcImtleURhdGFcIjpcIi8vYXVPVWx0NEpBOE02NGJoaDJZRUc2dVA5dEcxV2had2hSWnhML0hOaGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTI0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNTU0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPNkxxY3VFTy9UQ2NMcVF1bU5jRHNEOWMvVi9hL1AxTzdIWktqd0w0VTVFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzEyNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODIzMjM3NTUwNVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1NTi5qc29uIjogIntcImtleURhdGFcIjpcIkVWQkxDR0VFMU56VWw5Um10NVFwa3FFRkZ0ZWVKK1lzQUNqbUMzT2k2Q2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTI1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNTU8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXbitVTVdZbWl1RFRmcldjbGhyeFNiUTdvczZzR2lIbFY1ZGxFS21EUWpZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzEyNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODI2MzA4MDczNFwifSIKfQ=="  // PUT your SESSION_ID 


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
