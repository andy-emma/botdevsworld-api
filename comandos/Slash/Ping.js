module.exports = ({
name: "ping",
code: `
$createSlashCommand[global;ping;Devuelve como es de rapido el bot.]`
},{
  name:"ping",
  type: 'interaction',
  prototype: 'slash',
  code: `
$interactionReply[;{newEmbed:{title::ping_pong:Pong!}{description:Latencia: $pingms
Mensaje: $messagePingms
Database: $dbPingms
Uptime (Ultimo Reinicio): <t:$truncate[$divide[$readyTimeStamp;1000]]:R>}{footer:$getVar[footer]}{color:$getVar[color]}}]`
})

 