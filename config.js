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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_02_05_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjksXG4gICAgICAgIDUxLFxuICAgICAgICA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTksXG4gICAgICAgIDY3LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzksXG4gICAgICAgIDgwLFxuICAgICAgICA2MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU5LFxuICAgICAgICA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDc1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1NSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDk5LFxuICAgICAgICA3NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNixcbiAgICAgICAgMTMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDk1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDEwLFxuICAgICAgICAzNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU4LFxuICAgICAgICA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM2LFxuICAgICAgICA0MixcbiAgICAgICAgODEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NixcbiAgICAgICAgMTY1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgyLFxuICAgICAgICA2NixcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxODUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5OSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInFRVFZ6WHVuT2NTWjF4bHlzVjk1dGV6SVJnMWtkZ3hSTUJqMEg0ZlZKWFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjQ3MTE2NjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDOEUwNTg0MDI0NUQyODg2NDQzNUVFMDE5MTkzNjQ3QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDg2OTY1MzZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidEJDY2RoTTZSNmVrT3hQMEZ1Z25xQVwiLFxuICBcInBob25lSWRcIjogXCI0MDYyNWE3NS1hZjhiLTQ3NTItYTQ0NC01MDkyMGY0ZTgyODJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgMjksXG4gICAgICAxOTgsXG4gICAgICA1OSxcbiAgICAgIDIzOSxcbiAgICAgIDI1NCxcbiAgICAgIDIwLFxuICAgICAgNzQsXG4gICAgICA1LFxuICAgICAgMTUzLFxuICAgICAgNDgsXG4gICAgICA2OSxcbiAgICAgIDIwNyxcbiAgICAgIDIzMSxcbiAgICAgIDE2NixcbiAgICAgIDIyMCxcbiAgICAgIDc1LFxuICAgICAgMTIxLFxuICAgICAgMjQ2LFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDQ2LFxuICAgICAgMTEsXG4gICAgICAyMjcsXG4gICAgICAyMDQsXG4gICAgICA1LFxuICAgICAgMjE2LFxuICAgICAgNTIsXG4gICAgICAxMDQsXG4gICAgICAxNTUsXG4gICAgICA0OCxcbiAgICAgIDE5MCxcbiAgICAgIDI1MixcbiAgICAgIDI0OSxcbiAgICAgIDQxLFxuICAgICAgMjQ1LFxuICAgICAgOTAsXG4gICAgICAxNDUsXG4gICAgICAzMixcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09QNytkVUNFTTM3NjhFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqdHBGa1padjlMQ1ZiR3VXZGNVN1JDaU5LQ2loTUpFSGVUT21SVmsxM3FlVmlKU1FaZ2YyUUlqOE8vTTNaaHhpd2d0OXd3OERpekVKcndrYTBmSFBBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxaDRYRWxyb0VOUjFuUDliMndTWG5GY1lHbHZrQjdUeHlsVkc5Vks0ZHlCYnpzOGRVR0RZRzI5UjVEWTBoVzZDSU9KQy92b1VLaFVMY0JFVTk5RWxoUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NzhAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6NzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ4Njk2NTI5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSU1mXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJTWQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHM0ZJMDJxSS9DT0JCcUpzKzdPUWlxbVJSSnhqbmc2ak5NN3BNekE4NDA0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzEzOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1lLmpzb24iOiAie1wia2V5RGF0YVwiOlwia1VnNHBLMnE3T0RqYUlyWWVLTVJzWExEc1BYeVNnOEJNNUYvQ0dMbEhPQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxMzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDg2NzExOTY0NjVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJTWYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzdDBjWTMrMlRPaS9zSGsxUTY2VWhyd0JpaGl1b2FaaTM5NGk2VytUN0NrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzEzOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ4Njk2NTM1ODQ1XCJ9Igp9"  // PUT your SESSION_ID 


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
