module.exports = [{
  name: "setup-language",
  code: `$title[1;Idioma | Setup]
$description[1;Seleccione lo que necesite en los botones. (Recuerde que el idioma por defecto es **Español**)]$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$addButton[1;Español;3;espa;no]
$addButton[1;Ingles;3;ingle;no]
$addButton[1;Frances;3;frances;no]
$onlyPerms[manageserver;{newEmbed:{title:$customEmoji[no] | Error}{description:Lo sentimos solo pueden los administradores y managers.}{color:$getVar[color]}{footer:$getVar[footer]}}]
`
},{
  name: "espa",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{title:$customEmoji[yes] | Español}{description:Recuerde que para desactivar el sistema debe usar: **$getServerVar[prefix]setup-language**
Sistema correctamente activado.}{color:$getVar[color]}{footer:$getVar[footer]}}]
$setServerVar[language;es]$suppressErrors[]`
},{
  name: "ingle",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{title:$customEmoji[yes] | English}{description:Remember that to activate the system you must use: **$getServerVar[prefix]setup-language.**
System correctly activated.}{color:$getVar[color]}{footer:$getVar[footer]}}]
$setServerVar[language;en]`
},{
  name: "frances",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{title:$customEmoji[yes] | Français}{description:N'oubliez pas que pour activer le système, vous devez utiliser : **$getServerVar[prefix]setup-language.**
Système correctement activé.}{color:$getVar[color]}{footer:$getVar[footer]}}]
$setServerVar[language;fr]`
}]