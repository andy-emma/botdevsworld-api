module.exports = [{
name: "help",
$if: "v4",
aliases: ['hep','hell','hepp','heb','helpp','heq','commands','cmds','module','modules'],
code: `
$author[1;Menu de Ayuda;$useravatar[$clientid]]
$color[1;$getServerVar[color]]
$description[1;**Usa el select menu para ver los comandos.**\nVisita mi recien inagurada pagina web [Click Aqui](https://botspirit.me)\nCuento con **__$commandsCount__** Comandos]$addTimestamp[1]$thumbnail[1;$getVar[fooicon]]$footer[1;$getVar[footer]]
$addSelectMenu[1;cmd;Menu de Ayuda;1;1;no;Primera Pagina:Pagina con los primeros comandos:one:no:<:arrow:952942314718912552>
;Segunda Pagina:Segundos comandos:two:no:<:arrow:952942314718912552>;Tercera Pagina:Terceros Comandos:tres:no:<:arrow:952942314718912552>]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:**Bienvenido a mis Comandos**} {description:<:starts:955208118994890782>**Imagenes**
\`\`\`fix
cat, cosplay, dog, faizen, fox, foxgirl, loli, neko, okami, panda, waifu, mwallaper, wallaper\`\`\`
<:info1:952942317990461510>**Informacion - Utiles**
\`\`\`fix
addbot, app, avatar, botinfo, country, help, ping, status, steam, 8ball\`\`\`
<:settings:955208117950496789>**Moderacion**
\`\`\`fix
accept, decline, ban, kick, lock, setprefix, timeout, unban, unlock \`\`\`
}{footer:$getVar[footer]:$getVar[fooicon]}};;;;yes]
$onlyif[$interactionData[values[0]]==one;]`
},{
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:**Bienvenido a mis Comandos**} {description:<:user:955208119137497098>**Interaccion**
\`\`\`fix
bite, blush, bonk, bored, confused, cry, dance, happy, highfive, hug, kick, kill, kiss, nervous, pat, punch, sad, scream, smile, stare, thinking, wave, wink, yeet, yes\`\`\`
<:rocket1:955208117489111050>**NSFW (Anime)**
\`\`\`fix
$replaceText[$replaceText[$channelNsfw[$channelid];true;ass, bdms, blowjob, hentai, lewdneko, lolinsfw (Para esto necesitas ser ayudante o dnador :D), nsfwwallaper, pussy, school, succubus, tentacles, thigths, uniform, yuri];false;Tu necesitas en un canal NSFW para ver esto.]
\`\`\`
<:rocket1:955208117489111050>**NSFW (Real)**
\`\`\`fix
$replaceText[$replaceText[$channelNsfw[$channelid];true;
r-4k, r-anal, r-ass, r-boobs, r-porn, r-pussy];false;Tu necesitas en un canal NSFW para ver esto.]\`\`\`
}{footer:$getVar[footer]:$getVar[fooicon]}};;;;yes]
$onlyif[$interactionData[values[0]]==two;]`
},{
  name: "cmd",
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:**Bienvenido a mis Comands**} {description:<:starts:955208118994890782>**Ayuda Api**
\`\`\`fix
Proximamente :D\`\`\`
<:settings:955208117950496789>**Setups**
\`\`\`fix
setup-addbot \`\`\`
<:youtube:955208119468843048>**Musica**
\`\`\`fix
join, play, youtube (Pronto se añadiran los demas ademas que join y play incluyen lo de los otrs comandos.)\`\`\`
}{footer:$getVar[footer]:$getVar[fooicon]}};;;;yes]
$onlyif[$interactionData[values[0]]==tres;] `
}]