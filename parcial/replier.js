const TelegramBot = require('node-telegram-bot-api');
const TelegramRandomMessageReplier = require('node-telegram-random-message-replier');

// initialize
const bot = new TelegramBot('318729897:AAHVwmMXACXet8pM90PuK7P96NUXw4bEU80');
const replier = new TelegramRandomMessageReplier({
  bot,
  defaultChance: 0,
  showChanceMessage: 'Current chance is CURRENT_CHANCE%',
  setChanceMessage: 'Current chance changed from CURRENT_CHANCE% to NEXT_CHANCE%'
  // CURRENT_CHANCE and NEXT_CHANCE strings will be replaced with currentChance and nextChance values
});

// on command "/chance" will show current chance value
bot.onText(/^\/chance($|@)/, msg => {
  replier.showChance(msg);
});

// on command "/setchance 30" will set chance value to 30% to reply to the message
// command "/setchance" without value is equal to "/chance". So you can use only one command in your bot
bot.onText(/^\/chance(@.* )?(.+)?/, (msg, match) => {
  const chanceValue = match[2];

  replier.setChance(msg, chanceValue);
});

// handle each message to be ready for replying
bot.on('message', msg => {
  // process() method calculates chance for message of being replied and calls one of the callbacks
  // the chance is set previously via "/setchance <value>" command
  replier.process(
    msg,
    repliedMsg => {
      // success callback. Do something with lucky message
      bot.sendMessage(repliedMsg.chat.id, repliedMsg);
    },
    repliedMsg => {
      // error callback [optional]. Do something with unlucky message if you want
    }
  );
});
