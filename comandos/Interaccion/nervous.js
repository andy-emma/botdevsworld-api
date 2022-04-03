module.exports = {
  name: "nervous",
  code: `$title[1;Nervous!]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/actions/nervous;url]]`
}