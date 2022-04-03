module.exports = {
  name: "kill",
  code: `$title[1;Kill!]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/actions/kill;url]]`
}