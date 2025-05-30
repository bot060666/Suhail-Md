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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_42_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzksXG4gICAgICAgIDYzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMixcbiAgICAgICAgMTA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDU3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NixcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY1LFxuICAgICAgICA0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNixcbiAgICAgICAgMTU3LFxuICAgICAgICA3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgODYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyLFxuICAgICAgICA2NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MixcbiAgICAgICAgOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MixcbiAgICAgICAgOTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODYsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDc0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm51L0dzVEtBVE9Ea1dFSTFYLzYwYkthVlliQ0M3NEYzc2JRc2NxMEdKYTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjQ3MTE2NjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNTJDQUI3ODA2MEJERUU3MzVDM0VBMzgyREU4NEIxQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDg2MDg5NjVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiemYyMU93SUdRaE8wd0dDTW5rVDVUZ1wiLFxuICBcInBob25lSWRcIjogXCI5OTk4N2YxMC1jODIwLTRlYjItOWNlYy1lMjMwNzY4ZWZlNjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTEsXG4gICAgICA2LFxuICAgICAgMTA2LFxuICAgICAgNzIsXG4gICAgICAyMzksXG4gICAgICA4MCxcbiAgICAgIDg1LFxuICAgICAgMTY1LFxuICAgICAgMjMwLFxuICAgICAgMjQ4LFxuICAgICAgMjE0LFxuICAgICAgMjQ1LFxuICAgICAgNyxcbiAgICAgIDE5NCxcbiAgICAgIDEzLFxuICAgICAgMTkzLFxuICAgICAgMTc4LFxuICAgICAgMjI4LFxuICAgICAgNzIsXG4gICAgICAxMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDIzMCxcbiAgICAgIDM3LFxuICAgICAgNTAsXG4gICAgICAyNTIsXG4gICAgICAxNixcbiAgICAgIDQ0LFxuICAgICAgMTQ4LFxuICAgICAgMTczLFxuICAgICAgMjIsXG4gICAgICAxMzUsXG4gICAgICAyNTMsXG4gICAgICAxMjYsXG4gICAgICAyNDUsXG4gICAgICA5NyxcbiAgICAgIDE4MCxcbiAgICAgIDExOSxcbiAgICAgIDI1LFxuICAgICAgODksXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPRDcrZFVDRUxyUDVzRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaFdkdDgvR1h6d1RraW8rdWJaMklOVXdjaXh0L3JZOGt6cEJ1RENkNmgwNXpObXZJVlRmWDQ4VTl1TG1IQi9zdlJHUDl4bWhDWEtPNGk5VWVRN2thQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRXpSc0w3QlNGYTJzWWtJTkhuOXJEV1RrM0FkcGJBYTMwUmdVWXB0aEVnWjJ0QnpuSS9SQkFkSFN3MW0ydHBzRkxKSU42M203UVZ6ZXNnaXR6ellraEE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0Ojc1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0ODYwODk1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5sN1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmw1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiejF6dmJrZ2h1MFVBWXBuVjB0WjdpclNUbTBub1ByTGo2WWZINE91VHFsUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxMzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5sNi5qc29uIjogIntcImtleURhdGFcIjpcInpzczZCZnRxRUt1cEFpZVNaRW9kTTJya2psOEVoaDd2MjVHVWpTOGphVVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTM1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ4NjA4NzkyNzIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmw3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiaTlyZktPY0puUXhlazE3dG03b2lmM0JpMUtDQ3FrRzBGZVU5TTl6UTd5ND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcxMzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODYwODk2NDgxN1wifSIKfQ=="  // PUT your SESSION_ID 


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
