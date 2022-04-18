module.exports = {
name: "botinfo",
aliases: "info",
code:`
$author[1;$djsEval[client.user.tag;yes] | BotInfo;$userAvatar[$clientID]]
$color[1;$getVar[color]]
$addField[1;$customEmoji[arrow;843200863647301653] Links Importantes;
**[Invitacion\\](https://discord.com/oauth2/authorize?client_id=$clientID&permissions=8&scope=bot%20applications.commands)・[Soporte](https://discord.gg/YZFZnemwMK)・[Web](https://www.devsworld.tk)**
;yes]
$addField[1;$customEmoji[arrow;843200863647301653] Desarolladores;\`\`\`yaml
Nombre: $userTag[$botOwnerID]
\`\`\`;yes]
$addField[1;$customEmoji[arrow;843200863647301653] Cluesters;\`\`\`yaml
Shards: #0, #1, #2 ,#3 
Servers: $djsEval[client.guilds.cache.size;yes]
Miembros: $djsEval[client.users.cache.size;yes]
Memoria: $djsEval[(process.memoryUsage().heapUsed/1024/1024).toFixed(2);yes]MB
Ping: $pingms
Estas en el shard: $shardID
\`\`\`;yes]
$addField[1;$customEmoji[arrow;843200863647301653] Sistema;\`\`\`yaml
OS: Linux | Debian x64
CPU Uso: $cpu/100
CPU Modelo: $djsEval[const os = require('os')
os.cpus().map((i) => i.model)[0];yes]
RAM Uso: $djsEval[(process.memoryUsage().heapUsed/1024/1024).toFixed(2);yes] MB | $maxRam MB 
Backups: 1/3
Database: 1/3
\`\`\`;yes]
$addField[1;$customEmoji[arrow;843200863647301653] Developement;\`\`\`yaml
Version: $djsEval[var ee = require(\`\${process.cwd()}/package.json\`);
ee.version;yes]
NodeJS: $djsEval[process.version;yes]
Python: V3.8.11
Discord.js: $djsEval[ 
const Discord = require('discord.js');
Discord.version;yes]
Aoi.js: $packageVersion
Dos-Api: 1.0.1-dev
\`\`\`;yes]
$addField[1;$customEmoji[arrow;843200863647301653] General;\`\`\`yaml
Servidores: $djsEval[client.guilds.cache.size;yes]
Miembros: $djsEval[client.users.cache.size;yes]
Comandos: $commandsCount
\`\`\`;yes]
$addField[1;$customEmoji[arrow;843200863647301653] Descripcion;\`\`\`yaml
Nombre: $djsEval[client.user.tag;yes]
Uptime: $djsEval[Math.floor(client.uptime / 86400000);;yes] dias, $djsEval[Math.floor(client.uptime / 3600000) % 24;;yes] horas, $djsEval[Math.floor(client.uptime / 60000) % 60;;yes] minutos, $djsEval[Math.floor(client.uptime / 1000) % 60;;yes] segundos
Ping: $pingms
DatabasePing: $dbPing
\`\`\`;yes]
$addButton[1;Invitame;5;https://discord.com/oauth2/authorize?client_id=$clientID&permissions=274878286913&scope=bot%20applications.commands;no]
$addButton[1;Soporte;5;https://discord.gg/YZFZnemwMK;no]`
}