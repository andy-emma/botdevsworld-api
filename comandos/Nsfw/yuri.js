module.exports = {
  name: "yuri",
  code: ` $title[1;Yuri!]
  $onlyNSFW[{newEmbed:{title::x: No es canal NSFW.}{image:https://i.imgur.com/oe4iK5i.gif}{description:Porfavor activa el NSFW en el canal.}{delete:10s}{color:$getVar[color]}{footer:$getVar[footer]}}] $color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/nsfw/yuri;url]]
`
}