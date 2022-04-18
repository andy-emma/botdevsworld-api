module.exports = ({
  name: 'setprefix',
  aliases: 'changeprefix',
  usage: 'Setprefix <new prefix>',
  description: 'Sets a new prefix for bot',
  cooldown: '3s',
  code: `$author[1;Prefix Actualizado;$userAvatar[$clientID]]
$thumbnail[1;$serverIcon[$guildID]]
$title[1;$customEmoji[yes] | Configuracion hecha]
$description[1;$customEmoji[yes] | El nuevo prefix es: \`$message[1]\`]
$color[1;$getVar[color]]$footer[1;$getVar[footer]]
$setServerVar[prefix;$message[1]]
$onlyIf[$charCount[$message[1]]<6;{newEmbed:{description:$customEmoji[no] | El prefix no puede tener 5 caracteres}{color:$getVar[color]}{footer:$getVar[footer]}}]
$footer[1;$username[$authorID];$authorAvatar]
$addTimestamp[1]
$onlyIf[$message[1]!=;{newEmbed:{description: Argumentos invalidos en_ \`prefix\`}{color:$getVar[color]}{footer:$getVar[footer]}}]
$onlyIf[$message[1]!=$toLowercase[$getServerVar[prefix]];{newEmbed:{description: \`$getServerVar[prefix]\` es el actual prefijo}{color:$getVar[color]}{footer:$getVar[footer]}}]
$onlyPerms[manageserver;{newEmbed:{description: Necesitas \`Manage Server\`}{color:$getVar[color]}}]
$cooldown[$commandInfo[setprefix;cooldown];{newEmbed:{description: Espera por %time% para cambiar el prefix.}{color:$getVar[color]}}]
`
})