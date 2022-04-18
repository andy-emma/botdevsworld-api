module.exports = [{
 name:"ban",
 code: `$ban[$findUser[$message[1];no];$guildID;;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No se dio una razón.];false;$messageSlice[1]]]
$title[1;:white_check_mark: | $username[$findUser[$message[1]]] baneado con exito.]
$description[1;
**Servidor:**$serverName[$guildID]
**Administrador encargado:** <@$authorID>
**Tag:** #$discriminator[$findUser[$message[1]]]
**Mención:** <@$findUser[$message[1]]>
**ID:** $findUser[$message[1]]
**Razón:** $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No se dio una razón.];false;$messageSlice[1]]
**Prohibición:** <t:$truncate[$divide[$dateStamp;1000]]:F> **(**<t:$truncate[$divide[$dateStamp;1000]]:R>**)**]
$onlyIf[$findUser[$message[1];no]!=$ownerID;{newEmbed:{title:❌ | Error}{description: no puede banear al dueño :)}{color:$getVar[color]}{footer:$getVar[footer]}}]
$onlyIf[$findUser[$message[1];no]!=$clientID;{newEmbed:{title:❌ | Error}{description: no puede banear al bot :). (Ademas es ilogico :c)}{color:$getVar[color]}{footer:$getVar[footer]}}]
$onlyBotPerms[ban;{newEmbed:{title:Error}{description:**No cuento con suficientes permisos para llevar a cabo esta acción.**}{color:fc2121{footer:$getVar[footer]}}}]
$onlyIf[$findUser[$message[1]]!=$authorID;{newEmbed:{title::x: | Error}{description:No te puedes banear a ti mismo :c\n**Uso:** $getServerVar[prefix]ban <id/mencion>}{footer:$getVar[footer]}{color:$getVar[color]}}
$onlyPerms[ban;{newEmbed:{title::x: | No}{description:No cuentas con los permisos suficientes.}{color:RED}{footer:$getVar[footer]}}]
$suppressErrors[{newEmbed:{title:Error}{description: **Ocurrío un error al prohibir al miembro.**}{color:fc2121}{footer:$getVar[footer]}}]
$onlyIf[$isBanned[$findUser[$message[1];no]]==false;{newEmbed:{title:Error}{description: Ese ex miembro está prohibido del servidor.}{color:fc2121}{footer:$getVar[footer]}}]
$color[1;$getVar[color]]
$argsCheck[>=1;{newEmbed:{title::x: | Error}{description:Debes mencionar o envia la ID de alguien}{color:RED}{footer:$getVar[footer]}} `
}]