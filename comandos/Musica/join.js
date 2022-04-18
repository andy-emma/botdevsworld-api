module.exports = [{
  name: "join",
  code: ` $color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]] $title[1;<:check2:955208111193456670> | Exito]$description[1;Me uni a tu canal de voz.]$joinVc$onlyIf[$voiceID[$authorID]!=;{newEmbed:{title:$customEmoji[cross2;947580364749160458] | Error}{description:Primero unete a un canal de voz.}{footer:$getVar[footer]:$getVar[fooicon]}{color:$getVar[color]}}]
$addButton[1;Salir;primary;join_$authorId;no] `
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[;{newEmbed:{title:<:check2:955208111193456670> | Exito}{description:Salire del canal de voz.}{color:$getVar[color]}{footer:$getVar[footer]:$getVar[fooicon]}}};;;;yes]
$leaveVc
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description:No puedes usar este boton!}{color:$getVar[color]}{footer:$getVar[footer]:$getVar[fooicon]}}", "ephemeral" : true, "options" : {"interaction" : true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==join;]`
}]