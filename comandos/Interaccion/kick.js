module.exports = {
  name: "kick",
  code: `$title[1;Kick!]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/actions/kick;url]]`
}