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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_39_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNixcbiAgICAgICAgNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU2LFxuICAgICAgICAzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxLFxuICAgICAgICAxODgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgODAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDgsXG4gICAgICAgIDI3LFxuICAgICAgICAyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1LFxuICAgICAgICAyNixcbiAgICAgICAgOCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAwLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgxLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjksXG4gICAgICAgIDU1LFxuICAgICAgICAxNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMixcbiAgICAgICAgMTE1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDU2LFxuICAgICAgICAxOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDczLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjksXG4gICAgICAgIDgxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInpiTTRUbjFpaFVweTF2eW1lSW1MWGNrWnZaNk1MKzhPb21VSU1jSnJscnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInB3UzNtMk55VDZPcHZIY3MxQ2xRaUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGZmZDllMjEtYmNjZC00YmFkLTliNTUtMTk3NDg2YTc1N2JkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDY0LFxuICAgICAgMjE1LFxuICAgICAgOTIsXG4gICAgICA0NixcbiAgICAgIDIwNCxcbiAgICAgIDY3LFxuICAgICAgMTgsXG4gICAgICAxNjMsXG4gICAgICAxODIsXG4gICAgICAxNjIsXG4gICAgICAyNTEsXG4gICAgICA2OCxcbiAgICAgIDE2MyxcbiAgICAgIDMsXG4gICAgICA1NSxcbiAgICAgIDU3LFxuICAgICAgMjEsXG4gICAgICAyMTYsXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NixcbiAgICAgIDM0LFxuICAgICAgMjUzLFxuICAgICAgMTAzLFxuICAgICAgMTc3LFxuICAgICAgMjA1LFxuICAgICAgMjYsXG4gICAgICA3MSxcbiAgICAgIDI1LFxuICAgICAgNzEsXG4gICAgICAxNjksXG4gICAgICA4MCxcbiAgICAgIDE0MSxcbiAgICAgIDcxLFxuICAgICAgNzEsXG4gICAgICA5OSxcbiAgICAgIDE2OSxcbiAgICAgIDE1LFxuICAgICAgMTAsXG4gICAgICAxMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNObjcrZFVDRUoyRjNzRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMW95emhiaTVEbkV2N0V4ZGduY3pPU2ZhaGFvbm1UWTJUNDFobk9yV3l0WUtidS80bDV5TE8raDI5VkJoR2ZrOGFjbWF4NUFseTMxemVZTWhhNk1YQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicVZBYW5PdW9BZVNxRTFnZjBoNzBxWXZhN2taamt4d28wWDhTQUF6UmlWSUZWazMvMXUyUmtCTERocDFDWjVTMjZxRVNQaG9wZ3AwOWhMV3BYSkZjZ0E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjY5QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0ODQ2ODM4NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1NTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTU1KLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZmc0UjV3WEpvdC9pSUl1NzZqSEVmdmg0a2NFakZnQzIycXdmcU01VnBOND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxMjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1NSy5qc29uIjogIntcImtleURhdGFcIjpcInhCbUdheXR2aHRUTjVqcGZBZEJjcjRRVENyWVN0SDVPRCttYVpJWFJGZFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTIzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ4MTkzMjQwMDczXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTU1MLmpzb24iOiAie1wia2V5RGF0YVwiOlwiLy9hdU9VbHQ0SkE4TTY0YmhoMllFRzZ1UDl0RzFXaFp3aFJaeEwvSE5oaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxMjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1NTS5qc29uIjogIntcImtleURhdGFcIjpcIk82THFjdUVPL1RDY0xxUXVtTmNEc0Q5Yy9WL2EvUDFPN0haS2p3TDRVNUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTI0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ4MjMyMzc1NTA1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTU1OLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRVZCTENHRUUxTnpVbDlSbXQ1UXBrcUVGRnRlZUorWXNBQ2ptQzNPaTZDaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxMjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1NTy5qc29uIjogIntcImtleURhdGFcIjpcIlduK1VNV1ltaXVEVGZyV2NsaHJ4U2JRN29zNnNHaUhsVjVkbEVLbURRalk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTI1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ4MjYzMDgwNzM0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTU1QLmpzb24iOiAie1wia2V5RGF0YVwiOlwickREVmVlMEloUjhrUDVIclR0aGRrUHdYZGswdWhBTm5SbGJySTV1dFZ6cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxMjYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1NUS5qc29uIjogIntcImtleURhdGFcIjpcIkVncE4rYzFkWEYrQU9XdE9WYlBGT0kzQVZ3dmVKTmF1bmFnU0ZUZ05GVjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTI2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ4MjgxMjY1MDI3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTU1SLmpzb24iOiAie1wia2V5RGF0YVwiOlwia05xdmN3TXdEZXNGNERsb3ZILzV1ZXdNVWpkRDU4dGN1UkdKemVhQ1RpYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxMjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1NUy5qc29uIjogIntcImtleURhdGFcIjpcImcybU9tTFNKTERPaFBxMGcyWTlTcGVnQ0hDZUhORlVrRWlURy9IcHlycUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTI3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ4MzkxMjk1MDkyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTU1ULmpzb24iOiAie1wia2V5RGF0YVwiOlwiUjJSNnE3M3FWdFd5bnNhMTVDM3ZyWHpGUzFvcjJlekhrdEFkZjdDOWMxMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxMjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1NVS5qc29uIjogIntcImtleURhdGFcIjpcIkZsaVdMSkZ5T1NSNnpKdjNaKzFGTmZXL2dPUXlnalJjK3EwM3RkMTMrRmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTI4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ4NDYwMzk2NDExXCJ9Igp9"  // PUT your SESSION_ID 


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
