const api = require('aoi.js');
const fs = require('fs');
var uwu = require(`${process.cwd()}/config.json`);
const bot = new api.Bot({
  token: process.env.token, 
  prefix: "$getServerVar[prefix]",
  shardAmmount: 3,
  errorMessage: ["","{newEmbed:{title:<a:cry:952927254575480852> | Error}{description:Contac / Contacte:\nRandom.#6963}{color:RED}{footer:DevelopersWorld - ©2022}{timestamp:ms}}"],
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
  prefix: "ap!"
})
bot.status({
  text: "api.devsworld.tk OP",
  type: "WATCHING",
  time: 12
})
bot.loopCommand({
  channel: "954491520323584031",
  code: `$editMessage[959921850668949585;{newEmbed:{title:Estatus de la api.}{description:**__Status Api:__** $jsonRequest[https://api.devsworld.tk/status;status;Down]\n**Code:** $jsonRequest[https://api.devsworld.tk/status;code;Down]\n**Incidentes:** $jsonRequest[https://api.devsworld.tk/status;incidentes;Hay incidentes]\n**Server Ubicación:** Cuernavaca Morelos,Mexico\n**__Status Recursos:__**\n**Ram:** $djsEval[(process.memoryUsage().heapUsed/1024/1024).toFixed(2);yes] MB | $maxRam MB\n**Cpu:** $cpu/100\n**Modelo:** $djsEval[const os = require('os')
os.cpus().map((i) => i.model)[0];yes]\n**__Tiempo Ahora:__** <t:$truncate[$divide[$dateStamp;1000]]:F> | <t:$truncate[$divide[$dateStamp;1000]]:R>}{footer:Este mensaje se actualiza cada 10 minutos.\n$getVar[footer]:$getVar[fooicon]}{timestamp:ms}{color:$getVar[color]}}]`,
executeOnStartup: true,
every: 600000
})
const keepAlive = require('./handler/keepAlive');
/*  @INFO 
  * Codificado por Random.#6963
  * @INFO
  * Unete a nuestro equipo https://www.devsworld.tk | https://www.doctor-stars.studio
  * @INFO
  * Porfavor no quites los creditos :(
  * @INFO
  * Api usada https://api.devsworld.tk 
  * @INFO
*/