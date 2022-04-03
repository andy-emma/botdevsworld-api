module.exports = {
  name: "confused",
  code: `$title[1;Confused!]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/actions/confused;url]]`
}