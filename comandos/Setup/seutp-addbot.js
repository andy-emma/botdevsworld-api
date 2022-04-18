module.exports = [{
  name: "setup-addbot",
  code: `
$setServerVar[addbot;$message[1]]
$title[1;$customEmoji[yes;843200863647301653] | Hecho]
$description[1;Configuracion hecha.]$color[1;$getVar[color]]$footer[1;$getVar[footer]]
$onlyIf[$channelExists[$message[1]]==true;{newEmbed:{title:$customEmoji[no] | Error}{description:Parece que esto no es un canal.}{footer:[$getVar[footer]]}{color:$getVar[color]}}]`
},{
  name: "addbot",
  code: `$title[1;Bot Nuevo]
$description[1; <:arrow:952942314718912552> **__Dueño:__**: [$username[$authorID]#$discriminator[$authorID]]($authorAvatar?size=2048)
  <:arrow:952942314718912552>**__Dueño ID__**: \`$authorID\`
<:arrow:952942314718912552> **__Nombre del Bot:__**: \`[$username[$noMentionMessage[1]]#$discriminator[$noMentionMessage[1]]]\`
<:arrow:952942314718912552>**__ID del Bot:__**: \`$noMentionMessage[1]\`
<:arrow:952942314718912552> **__Prefix__**: \`$noMentionMessage[2]\`
<:arrow:952942314718912552>  [Agregar Click Aqui](https://discord.com/oauth2/authorize?client_id=$noMentionMessage[1]&scope=bot&permissions=0&guild_id=$guildID)
$addTimestamp[1]$color[1;$getVar[color]]
$onlyIf[$isNumber[$noMentionMessage[1]]!=false;{newEmbed:{title:$customEmoji[no] | Error}{description:Esto no es un bot, agrega una id.}{color$getVar[color]}{footer:$getVar[footer]}}]
$onlyIf[$isBot[$Message[1]]!=false;{newEmbed:{title:$customEmoji[no] | Error}{description:Esto no es un bot, porfavor intente de nuevo.}{footer:$getVar[footer]}{color:$getVar[color]}}]
$argsCheck[>=2;{newEmbed:{title:$customEmoji[no] | Error}{description:Uso: $getServerVar[prefix]addbot Id Prefix | Ejemplo: $getServerVar[prefix]addbot 946203052086554645 e!}{color:$getVar[color]}{footer:$getVar[footer]}}]
$suppressErrors[{newEmbed:{title:$customEmoji[no] | Error}{description:Uso: $getServerVar[prefix]addbot Id Prefix | Ejemplo: $getServerVar[prefix]addbot 946203052086554645 e!}}]
$useChannel[$getServerVar[addbot]]$cooldown[5s;Perdon $username usted necesita esperar %time% Para poder enviar su BOT nuevamente.$footer[1;$getVar[footer]]
$sendDM[{newEmbed:{title:⏰ | En Aprovaccion}{description:Hola, <@$authorID> gracias por enviar su bot a $serverName[$guildID], Porfavor espere a un staff para que lo aprueben.
  🔖 **__Nota:__**
  Por favor estate pendiente ya que cuando se acepte o se rechaze se le enviara un dm.}{color:$getVar[color]}{footer:$serverName[$guildID]
$getVar[footer]}{timestamp:ms}};$authorID]`
},{
  name: "accept",
  code:`$deletecommand
$author[1;$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]]
$image[1;$userAvatar[$findUser[$message[1]]]]
$title[1;$customEmoji[yes] | Bot ha sido Aceptado correctamente]
$description[1;
$customEmoji[online] | ACEPTADO
**__Razon del acepto:__** $message[3] $message[4] $message[5] $message[6] ]
$addTimestamp[1]$color[1;$getVar[color]]$footer[1;Moderador | $username[$authorID]]$useChannel[$getServerVar[addbot]]
$onlyIf[$isBot[$findUser[$message[1]]]==true;{newEmbed:{title:$customEmoji[no] | Error}{descrption:Esto no es un bot. porfavor intenta nuevamente.}{color:$getVar[color]}{footer:$getVar[footer]}}]
$onlyPerms[manageserver;{newEmbed:{title:$customEmoji[no] | Error}{description:Usted no tiene los permisos de administrar el servidor asi que no puedes aceptar bots.}{color:$getVar[color]}{footer:$getVar[footer]}}]
$argsCheck[>=1;{newEmbed:{title:$customEmoji[no] | Error}{description:Proporciona una ID aceptar.}{color:$getVar[color]}{footer:$getVar[footer]}}]
$argsCheck[>=2;{newEmbed:{title:$customEmoji[no] | Error}{description:Proporciona un mensaje para aceptar.}{color:$getVar[color]}{footer:$getVar[footer]}}]
$sendDM[{newEmbed:{title:$customEmoji[Putin_DoS] | Bot Aceptado}{description:Su bot fue aceptado.

**__BOT Nombre__:** $username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]

**__Aceptado Por:__**
<@$authorID>

**__Razon:__**
$message[3]
}{color:$getVar[color]}{footer:$getVar[footer]}{timestamp:ms}{suppressErrors:}};$message[2]]
`
},{
  name: "decline",
  code: `$deletecommand
$author[1;$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]]
$image[1;$userAvatar[$findUser[$message[1]]]]
$title[1;$customEmoji[no] | Bot ha sido  rechazado.]
$description[1;$customEmoji[offline] | Rechazado por <@$authorID>
**__Razon:__**
$message[3] $message[4] $message[5] $message[6] $message[7]]
$addTimestamp[1]$color[1;$getVar[color]]$useChannel[$getServerVar[addbot]]$footer[1;Moderador | $username[$authorID]]
$onlyIf[$isBot[$findUser[$message[1]]]==true;{newEmbed:{title:$customEmoji[no] | Error}{descrption:Esto no es un bot. porfavor intenta nuevamente.}{color:$getVar[color]}{footer:$getVar[footer]}}]
$onlyPerms[manageserver;{newEmbed:{title:$customEmoji[no] | Error}{description:Usted no tiene los permisos de administrar el servidor asi que no puedes aceptar bots.}{color:$getVar[color]}{footer:$getVar[footer]}}]
$argsCheck[>=3;{{newEmbed:title:Error}{description:Uso Correcto $getServerVar[prefix]decline IDBOT IDUSER Mensaje}}]
$sendDM[{newEmbed:{title:$customEmoji[cry] | Bot Rechazado}{description:Su bot fue rechazado.

**__BOT Nombre__:** $username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]

**__Rechazado Por:__**
<@$authorID>

**__Razon:__**
$message[3]
}{color:$getVar[color]}{footer:Puedes volver a enviar el bot cuando no tenga errores.
$getVar[footer]}{timestamp:ms}{suppressErrors:}};$message[2]]
`
}]