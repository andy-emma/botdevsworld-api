module.exports = {
  name: "blush",
  code: `$title[1;Blush!]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/actions/blush;url]]`
}