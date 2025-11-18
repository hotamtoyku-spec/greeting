const TelegramBot = require("node-telegram-bot-api");
const cron = require("node-cron");

const TOKEN = "8210850395:AAGaq6nM3Zcc0IS0Y9YLJsV3U-xe4t55Oy4";
const CHAT_ID = "8210850395"; // qaysi odamga yuboriladi
const bot = new TelegramBot(TOKEN, { polling: true });

// ❗ Bot sizdan biror xabar olishi uchun
bot.on("message", (msg) => {
  console.log("Yozdi:", msg.text);
  bot.sendMessage(msg.chat.id, "Xabaringiz qabul qilindi 😊");
});

// 🔥 Har kuni 09:00 da jo‘natish
cron.schedule("35 12 * * *", () => {
  bot.sendMessage(CHAT_ID, "Assalomu alaykum! Bugun ahvolingiz yaxshimi? 😊");
});
