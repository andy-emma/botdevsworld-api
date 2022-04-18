module.exports = [{
name: "play",
code: `
$color[1;$getservervar[color]]
$description[1;$customEmoji[youtube;947580364749160458] **$replaceText[$playTrack[youtube;$message];Added;Añadi]**]
$onlyIf[$message!=;{newEmbed: {color:$getServerVar[color]} {title:$customEmoji[cross2;947580364749160458] | Error}{description:__$username__ especifica una cancion}{footer:$getVAr[footer]:$getVar[fooicon]}}]$footer[1;$getVar[footer];$getVar[fooicon]]
$onlyIf[$voiceID[$authorID]!=;{newEmbed:{title:$customEmoji[cross2;947580364749160458] | Error}{description:Primero unete a un canal de voz.}{footer:$getVar[footer]:$getVar[fooicon]}{color:$getVar[color]}}]
$addButton[1;Reanudar;primary;ejemplo3_$authorID;no;<:play:965028978639384627>]
$addButton[1;Pausar;primary;ejemplo2_$authorID;no;<:pause:965028978450645116>]
$addButton[1;Detener;primary;ejemplo1_$authorID;no;<:endmu:965028978626797608>]
$addButton[1;Saltar;primary;ejemplo_$authorID;no;<:skip:965028978651971654>]
`
}, {
 type: "interaction",
 prototype: "button",
 code: `
$skip
$interactionReply[;{newEmbed:{title:<:check2:955208111193456670> | Exito}{description:La cancion fue saltada con exito.}{color:$getVar[color]}{footer:$getVar[footer]:$getVar[fooicon]}};;;;yes]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description:No puedes usar este boton!}{color:$getVar[color]}{footer:$getVar[footer]:$getVar[fooicon]}}", "ephemeral" : true, "options" : {"interaction" : true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==ejemplo;]
 `
}, {
 type: "interaction",
 prototype: "button",
 code: `$leaveVc
$wait[10s]
$stop
$interactionReply[;{newEmbed:{title:<:check2:955208111193456670> | Exito}{description:La cancion fue  detenida con exito ahora saldre del canal.}{color:$getVar[color]}{footer:$getVar[footer]:$getVar[fooicon]}};;;;yes]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description:No puedes usar este boton!}{color:$getVar[color]}{footer:$getVar[footer]:$getVar[fooicon]}}", "ephemeral" : true, "options" : {"interaction" : true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==ejemplo1;]`
},{
  type: "interaction",
  prototype: "button",
  code: `$pauseTrack
$interactionReply[;{newEmbed:{title:<:check2:955208111193456670> | Exito}{description:La cancion fue pausada con exito.}{color:$getVar[color]}{footer:$getVar[footer]:$getVar[fooicon]}};;;;yes]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description:No puedes usar este boton!}{color:$getVar[color]}{footer:$getVar[footer]:$getVar[fooicon]}}", "ephemeral" : true, "options" : {"interaction" : true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==ejemplo2;] `
},{
  type: "interaction",
  prototype: "button",
  code: `$resumeTrack
$interactionReply[;{newEmbed:{title:<:check2:955208111193456670> | Exito}{description:La cancion fue reanudada con exito.}{color:$getVar[color]}{footer:$getVar[footer]:$getVar[fooicon]}};;;;yes]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description:No puedes usar este boton!}{color:$getVar[color]}{footer:$getVar[footer]:$getVar[fooicon]}}", "ephemeral" : true, "options" : {"interaction" : true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==ejemplo3;] `
}]   