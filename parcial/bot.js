const TelegramBot = require('node-telegram-bot-api');
const TelegramRandomMessageReplier = require('node-telegram-random-message-replier');
const token = '318729897:AAHVwmMXACXet8pM90PuK7P96NUXw4bEU80';
const bot = new TelegramBot(token, {polling: true});
const replier = new TelegramRandomMessageReplier({
  bot,
  defaultChance: 70,

});

bot.on('message', msg => {

  replier.process(
    msg,
    repliedMsg => {
      bot.sendMessage(repliedMsg.chat.id, 'no te conozco');
    },
    repliedMsg => {

    }
  );
});

bot.onText(/\/telefono/, (msg) => {

bot.sendMessage(msg.chat.id, "2018-2018");

});

bot.onText(/\/unmeme/, (msg) => {

bot.sendPhoto(msg.chat.id,"http://1mc8511ob3uc397k3v2p939j-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/batman-baby-meme.jpg" );
});
