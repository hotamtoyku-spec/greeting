const TelegramBot = require("node-telegram-bot-api");
const cron = require("node-cron");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// TOKEN va CHAT_ID ni Railway env laridan olamiz
const TOKEN = process.env.TOKEN || "8210850395:AAGaq6nM3Zcc0IS0Y9YLJsV3U-xe4t55Oy4";
const CHAT_ID = process.env.CHAT_ID || "158605583";

const bot = new TelegramBot(TOKEN, { polling: true });

// 🔹 Faqat bitta message listener
bot.on("message", (msg) => {
  console.log("Yozdi:", msg.text);
  console.log("Chat ID:", msg.chat.id);

  bot.sendMessage(msg.chat.id, "Xabaringiz qabul qilindi 😊");
});

// 🔥 O‘zbekiston vaqti bo‘yicha 18:30 da yuboradi
cron.schedule(
  "30 18 * * *",
  () => {
    bot.sendMessage(CHAT_ID, "Assalomu alaykum! Bugungi hol-ahvolingiz yaxshimi? 😊");
  },
  {
    timezone: "Asia/Tashkent"
  }
);

// Railway uchun port ochish
app.get("/", (req, res) => {
  res.send("Telegram bot is running...");
});

app.listen(PORT, () => console.log("Server running on port", PORT));
