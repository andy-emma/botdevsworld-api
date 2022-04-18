module.exports = {
  name: "r-boobs", 
  code: `$title[1;Boobs! ]
$image[1;attachment://boobs.png]$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$attachment[$jsonRequest[https://nekobot.xyz/api/image?type=boobs;message];boobs.png]$onlyNSFW[{newEmbed:{title::x: No es canal NSFW.}{image:https://i.imgur.com/oe4iK5i.gif}{description:Porfavor activa el NSFW en el canal.}{delete:10s}{color:$getVar[color]}
`
}