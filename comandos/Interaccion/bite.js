module.exports = {
  name: "bite",
  code: `$title[1;Bite!]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/actions/bite;url]]`
}