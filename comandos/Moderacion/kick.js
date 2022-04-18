module.exports = {
 name: "kick",
 code: `$description[1; $userTag[$findUser[$message[1];no]] **ha sido expulsado del servidor** $serverName[$guildID]
**Administrador:** <@$authorID>
**Razón:** $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No se dio una razón];false;$messageSlice[1]]
**Expulsión:** <t:$truncate[$divide[$dateStamp;1000]]:F> **(**<t:$truncate[$divide[$dateStamp;1000]]:R>**)**]
$addTimestamp
$kick[$findUser[$message[1];no];$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No se dio una razón];false;$messageSlice[1]]]
$onlyIf[$isBanned[$findUser[$message[1];no]]==false;{newEmbed:{title:Error}{description:**Ese ex miembro está prohibido del servidor.**}{color:fc2121}}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1];no]]];{newEmbed:{title:Error}{description:**No puedo expulsar a un usuario que tiene un rol con permisos**}{color:fc2121}}]
$onlyIf[$findUser[$message[1];no]!=$clientID;{newEmbed:{title:Error}{description:**No puedes expulsarme.**}{color:fc2121}}]
$onlyIf[$findUser[$message[1];no]!=$authorID;{newEmbed:{title:Error}{description:**No puedes expulsarte a ti mismo.**}{color:fc2121}}]
$onlyIf[$findUser[$message[1];no]!=$ownerID;{newEmbed:{title:Error}{description:**No puedes expulsar al propietario del servidor.**}{color:fc2121}}]
$onlyIf[$findUser[$message[1]]!=$authorID;{newEmbed:{title:Error}{description: **Debes agregar la identificación (ID) o mención del miembro para expulsarlo.**
**Uso:**
\`\`\`fix
$getServerVar[prefix]kick <ID/Mención> <Razón (Opcional)>\`\`\`
}{color:fc2121}}}]
$onlyPerms[kick;{newEmbed:{title:Error}{description:**No cuentas con suficientes permisos para llevar a cabo esta acción.**}{color:fc2121}}]
$onlyBotPerms[kick;{newEmbed:{title:Error}{description: **No cuento con suficientes permisos para llevar a cabo esta acción.**}{color:fc2121}}]
$suppressErrors[{newEmbed:{title:Error}{description:**Ocurrío un error.**}{color:fc2121}}]
$color[1;$getVar[color]]$footer[1;$getVar[footer]]`
}