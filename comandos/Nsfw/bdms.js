module.exports = {
  name: "bdsm",
  code: `$title[1;Bdsm!]$image[1;$jsonRequest[https://api.devsworld.tk/nsfw/bdsm;url]]$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
  $onlyNSFW[{newEmbed:{title::x: No es canal NSFW.}{image:https://i.imgur.com/oe4iK5i.gif}{description:Porfavor activa el NSFW en el canal.}{delete:10s}{color:$getVar[color]}{footer:$getVar[footer]}}]    
`
}