module.exports = { 
    name:"timeout",
    aliases: ['TIMEOUT','time out','mute'], 
    code: `
$title[1;$customEmoji[yes] | $username[$mentioned[1]] silenciado con exito.]
$description[1;**Servidor:**$serverName[$guildID]
**Administrador encargado:** <@$authorID>
**Tag:** #$discriminator[$findUser[$message[1]]]
**Mención:** <@$findUser[$message[1]]>
**ID:** $findUser[$message[1]]
**Silenciado:** <t:$truncate[$divide[$dateStamp;1000]]:F> **(**<t:$truncate[$divide[$dateStamp;1000]]:R>**)**]
$timeOutMember[$guildID;$mentioned[1];$noMentionMessage[1];no;$noMentionMessage]$color[1;$getVar[color]]$footer[1;$getVar[footer]]
$onlyIf[$findUser[$message[1];no]!=$ownerID;{newEmbed:{title:❌ | Error}{description: no puede silenciar al dueño :)}{color:$getVar[color]}{footer:$getVar[footer]}}]
$onlyIf[$findUser[$message[1];no]!=$clientID;{newEmbed:{title:❌ | Error}{description: no puede silenciar al bot :). (Ademas es ilogico :c)}{color:$getVar[color]}{footer:$getVar[footer]}}]
$onlyBotPerms[ban;{newEmbed:{title:Error}{description:**No cuento con suficientes permisos para llevar a cabo esta acción.**}{color:fc2121{footer:$getVar[footer]}}}]
$onlyIf[$findUser[$message[1]]!=$authorID;{newEmbed:{title::x: | Error}{description:No te puedes silenciar a ti mismo :c\n**Uso:** $getServerVar[prefix]mute <id/mencion>}{footer:$getVar[footer]}{color:$getVar[color]}}
$onlyPerms[moderatemembers;{newEmbed:{title::x: | No}{description:No cuentas con los permisos suficientes.}{color:RED}{footer:$getVar[footer]}}]
$argsCheck[>=3;{newEmbed:{title:Error}{description:Uso: $getServerVar[prefix]mute <id/mencion> | <tiempo-tipo de tiempo> | Razon :C\nTipo: d (dias), h (horas), m (minutos)}{color:$getVar[color]}{footer:$getVar[footer]}}]
`}