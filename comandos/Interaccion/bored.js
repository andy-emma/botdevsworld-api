module.exports = {
  name: "bored",
  code: `$title[1;Bored!]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/actions/bored;url]]`
}