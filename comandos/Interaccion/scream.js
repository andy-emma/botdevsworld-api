module.exports = {
  name: "scream",
  code: `$title[1;Scream!]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/actions/scream;url]]`
}