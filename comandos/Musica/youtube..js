module.exports = ({
 name: "youtube",
 code: `$addButton[1;YouTube Together;link;$nonEscape[$createChannelInvite[$voiceId;{
"targetApplication" : "880218394199220334",
"targetType" : 2,
"temporary" : false
}]];no;<:youtube:955208119468843048>]
 $description[1;**YouTube Together** actividad iniciada.Clickea en al boton para unirte.]
 $color[1;$getVar[color]]
 $addTimestamp[1]
 $author[1;YouTube Together;https://i0.wp.com/logos.edu.mx/wp-content/uploads/2021/01/YouTube-LOGO.png?resize=300%2C169&ssl=1]
 $onlyIf[$voiceID!=;{newEmbed:{color:$getVar[color]}{title:$customEmoji[no;843200863647301653] | Error}{description:🚫 **Debes unirte a un canal de voz :smile:**}{footer:$getVar[footer]}}]`
})