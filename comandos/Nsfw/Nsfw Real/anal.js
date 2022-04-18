module.exports = {
  name: "r-anal", 
  code: `$title[1;Anal! ]
$image[1;attachment://anal.png]$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$attachment[$jsonRequest[https://nekobot.xyz/api/image?type=anal;message];anal.png]$onlyNSFW[{newEmbed:{title::x: No es canal NSFW.}{image:https://i.imgur.com/oe4iK5i.gif}{description:Porfavor activa el NSFW en el canal.}{delete:10s}{color:$getVar[color]}
`
}