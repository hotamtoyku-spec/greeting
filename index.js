const TelegramBot = require("node-telegram-bot-api");
const cron = require("node-cron");

const TOKEN = "YOUR_BOT_TOKEN";
const CHAT_ID = "USER_CHAT_ID"; // qaysi odamga yuboriladi
const bot = new TelegramBot(TOKEN, { polling: true });

// ❗ Bot sizdan biror xabar olishi uchun
bot.on("message", (msg) => {
  console.log("Yozdi:", msg.text);
  bot.sendMessage(msg.chat.id, "Xabaringiz qabul qilindi 😊");
});

// 🔥 Har kuni 09:00 da jo‘natish
cron.schedule("0 9 * * *", () => {
  bot.sendMessage(CHAT_ID, "Assalomu alaykum! Bugun ahvolingiz yaxshimi? 😊");
});
