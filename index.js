const api = require('aoi.js');
const fs = require('fs');
var uwu = require(`${process.cwd()}/config.json`);
const bot = new api.Bot({
  token: process.env.token, 
  prefix: "$getServerVar[prefix]",
  shardAmmount: 3,
  errorMessage: ["","{newEmbed:{title:<a:cry:952927254575480852> | Error}{description:Contacte:\nRandom.#6963}{color:RED}{footer:Spirit - ©2022}{timestamp:ms}}"],
  sharding: true,
  everyoneMention: `false`,
  suppressAllErrors: false,
	autoUpdate: false,
  intents: "all",
        database: {
        type:"aoi.mongo",
        db:require('aoi.mongo'),
        path: uwu.mongo,
        tables:["mains"],
        promisify:false
    },
})
const loader = new api.LoadCommands(bot);
(async () => {
await loader.load(bot.cmd, "./comandos/")
})()
loader.setColors({
  walking: ["blink", "dim", "fgWhite"],
  failedWalking: {
    name: ["bright", "fgYellow", "underline"],
    text: ["bright", "fgRed"]
  },
  typeError: {
    command: ["bright", "fgYellow"],
    type: ["fgYellow"],
    text: ["bright", "fgRed"]
  },
  failLoad: {
    command: ["bright", "fgMagenta"],
    type: ["fgRed"],
    text: ["bright", "fgRed"],
  },
  loaded: {
    command: ["bright", "fgCyan"],
    type: ["bright", "fgBlue"],
    text: ["bright", "fgGreen"]
  }, 
})
bot.onMessage()
bot.onInteractionCreate()
bot.variables({
  color: uwu.color,
  footer: uwu.footer,
  fooicon: uwu.footericon,
  language: "es",
  prefix: "sp!",
  addbot: "",
  votos: "0",
  afavor: "0",
  encontra: "0",
  author: "0"
})
bot.status({
  text: "Spirit Bot OP",
  type: "WATCHING",
  time: 12
})
const voice = new api.Voice(bot, {
  soundcloud: {
    clientId: "0SrIxZuNreDuAedhD5rxw6lH582l5JoP",
  },
  cache: {
    cacheType: "Memory",//Disk | None
    enabled: true,
  },
},true);
bot.loopCommand({
  channel: "963847164457525348",
  code: `$editMessage[963847452383920238;{newEmbed:{title:Estatus de la api.}{description:**__Status Api:__** $jsonRequest[https://api.devsworld.tk/status;status;Down]\n**Code:** $jsonRequest[https://api.devsworld.tk/status;code;Down]\n**Incidentes:** $jsonRequest[https://api.devsworld.tk/status;incidentes;Hay incidentes]\n**Server Ubicación:** Cuernavaca Morelos,Mexico\n**__Status Recursos:__**\n**Ram:** $djsEval[(process.memoryUsage().heapUsed/1024/1024).toFixed(2);yes] MB | $maxRam MB\n**Cpu:** $cpu/100\n**Modelo:** $djsEval[const os = require('os')
os.cpus().map((i) => i.model)[0];yes]\n**__Tiempo Ahora:__** <t:$truncate[$divide[$dateStamp;1000]]:F> | <t:$truncate[$divide[$dateStamp;1000]]:R>}{footer:Este mensaje se actualiza cada 10 minutos.\n$getVar[footer]:$getVar[fooicon]}{timestamp:ms}{color:$getVar[color]}}]`,
executeOnStartup: true,
every: 600000
})
bot.command({
name: "<@959103746560897104>",
aliases: "<@!959103746560897104>",
code:`$author[1;$username[$clientID];$userAvatar[$clientID]]
$description[1;Hola, <@$authorID> Gracias por mencionarme, mi prefix en este servidor es: **$getServerVar[prefix]**\nSi consideras unete al servidor oficial de mi api y bot :) al igual que si necesitas ayuda para usar mi api.]
$addTimestamp[1]$thumbnail[1;$getVar[fooicon]]
$color[1;$getVar[color]]$footer[1;$getVar[footer]]`,
nonPrefixed: true
})
const express = require("express")
const app = express()
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
res.render('index');
});
app.use(express.static(__dirname + "/"), (_, res, next) => {
  res.status(404)
  res.sendFile(__dirname + "/404.png")
});
app.listen(8080);
