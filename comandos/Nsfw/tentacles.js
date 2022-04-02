module.exports = {
  name: "tentacles",
  code: ` $title[1;Tentacles!]$color[1;$getVar[volor]]$footer[1;$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/nsfw/tentacles;url]]
$onlyNSFW[{newEmbed:{title::x: No es canal NSFW.}{image:https://i.imgur.com/oe4iK5i.gif}{description:Porfavor activa el NSFW en el canal.}{delete:10s}{color:$getVar[color]}{footer:$getVar[footer]}}]
`
}