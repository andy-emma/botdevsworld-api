const api = require('aoi.js')
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