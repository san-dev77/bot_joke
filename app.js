const Bot = require("node-telegram-bot-api");
const blagueApi = require("blagues-api");
const token = "7353071596:AAF66AJ4_qDluP7c3Q-YHa552K3CNf1ROto";
const blagueToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTE4NDgyMTI0ODg3ODk4NTMzNCIsImxpbWl0IjoxMDAsImtleSI6ImhSWEFyMzlqS0NEOEY5SnlWNUZIalB0Q21iR3hhVjZzQ0xDODZZRmZaSmdqbDBydElwIiwiY3JlYXRlZF9hdCI6IjIwMjQtMDktMTBUMTU6NTc6NTIrMDA6MDAiLCJpYXQiOjE3MjU5ODM4NzJ9.az99uBqMz1Kjkgi2gW7CtLYj_fhJiUr_sThN7S9O6nM";

const jokesBot = new Bot(token, { polling: true });
const blagues = new blagueApi(blagueToken);

// console.log(blagues.random().then((j) => console.log(j)));

jokesBot.onText(/truc (.+)/, async (msg, match) => {
  const { id } = msg.chat;

  const blague = await blagues.fromId(match[1]);
  const truc = `Blague numéro ${match[1]} \n
  Type: ${blague.type} \n
  blague: ${blague.joke}

  `;
  const message = "Let's gooo !";
  const truc2 = `Réponse: ${blague.answer}`;
  jokesBot.sendMessage(id, message);

  setTimeout(() => {
    jokesBot.sendMessage(id, truc);
  }, 1500);

  setTimeout(() => {
    jokesBot.sendMessage(id, truc2);
  }, 5000);
});
