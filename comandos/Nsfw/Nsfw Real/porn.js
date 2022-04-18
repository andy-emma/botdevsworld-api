module.exports = {
  name: "r-porn", 
  code: `$title[1;Porn! ]
$image[1;attachment://porn.gif]$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$attachment[$jsonRequest[https://nekobot.xyz/api/image?type=pgif;message];porn.gif]$onlyNSFW[{newEmbed:{title::x: No es canal NSFW.}{image:https://i.imgur.com/oe4iK5i.gif}{description:Porfavor activa el NSFW en el canal.}{delete:10s}{color:$getVar[color]}
`
}