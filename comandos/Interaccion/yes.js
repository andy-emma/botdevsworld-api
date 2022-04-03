module.exports = {
  name: "yes",
  code: `$title[1;Yes!]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/actions/yes;url]]`
}