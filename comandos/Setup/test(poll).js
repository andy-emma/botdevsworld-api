module.exports = [{
  name: "poll",
  code: `$title[1;Encuesta Nueva]
$description[1;$message]$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$addButton[1;¿Terminar?;4;terminar;no;952942313913602058]
$addButton[1;¿Votantes?;2;votos;no;955208119137497098]
$addButton[1;No;4;dislikes;no;955208110807580672]
$addButton[1;Si;3;likes;no;955208111193456670]
$onlyPerms[manageserver;{ "content": "Necesitas el permiso de Administrar Servidor", "ephemeral": true, "options":{"interaction" : true} }]`
},{
  name: "likes",
  type: "interaction",
  prototype: "button",
  code: `$setMessageVar[votos;$sum[$getMessageVar[votos;$messageID];1];$messageID]
$setMessageVar[afavor;$sum[$getMessageVar[afavor;$messageID];1];$messageID]
$interactionReply[;{newEmbed:{title:<:check2:955208111193456670> | Exito}{description:Votaste con exito esta encuesta como votante a favor.}{color:$getVar[color]}{footer:$getVar[footer]}};;;;yes]`
},{
  name: "dislikes",
  type: "interaction",
  prototype: "button",
  code: `$setMessageVar[votos;$sum[$getMessageVar[votos;$messageID];1];$messageID]
$setMessageVar[encontra;$sum[$getMessageVar[encontra;$messageID];1];$messageID]
$interactionReply[;{newEmbed:{title:<:check2:955208111193456670> | Exito}{description:Votaste con exito esta encuesta como votante en contra.}{color:$getVar[color]}{footer:$getVar[footer]}};;;;yes]`
},{
  name: "votos",
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[;{newEmbed:{title:<:check2:955208111193456670> | Votantes}{description:<:user:955208119137497098> **__Votantes Totales:__** $getMessageVar[votos;$messageID]\n<:check2:955208111193456670> **__Votantes a Favor:__** $getMessageVar[afavor;$messageID]\n<:cross2:955208110807580672> **__Votantes en Contra:__** $getMessageVar[encontra;$messageID]}{color:$getVar[color]}{footer:$getVar[footer]}};;;;yes]`
},{
  name: "terminar",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{title:Encuesta Terminada}{description:$getEmbed[$channelID;$messageID;1;description]\n**Estadisticas de la Encuesta**\n<:user:955208119137497098> __Votantes Totales:__ $getMessageVar[votos;$messageID]\n<:check2:955208111193456670> __Votantes a Favor:__ $getMessageVar[afavor;$messageID]\n<:cross2:955208110807580672> __Votantes en Contra:__ $getMessageVar[encontra;$messageID]}{color:$getVar[color]}{footer:$getVar[footer]:$getVar[fooicon]}};{actionRow:{button:Si:3:likes:yes:<:check2:955208111193456670>}{button:No:4:dislikes:yes:<:cross2:955208110807580672>}{button:¿Votantes?:2:votos:no:<:user:955208119137497098>}}]$suppressErrors[ ]
$onlyPerms[manageserver;{ "content": "Necesitas el permiso de Administrar Servidor", "ephemeral": true, "options":{"interaction" : true} }]`
}]
/* Variables 
  votos: "0",
  afavor: "0",
  encontra: "0",
  msgpoll: ""
*/