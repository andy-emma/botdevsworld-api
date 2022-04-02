module.exports = {
  name: "ass",
  code: ` $title[1;Ass!]
  $onlyNSFW[{newEmbed:{title::x: No es canal NSFW.}{image:https://i.imgur.com/oe4iK5i.gif}{description:Porfavor activa el NSFW en el canal.}{delete:10s}{color:$getVar[color]}{footer:$getVar[footer]}}] 
$image[1;$jsonRequest[https://api.devsworld.tk/nsfw/ass;url]]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
`
}