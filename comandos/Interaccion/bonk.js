module.exports = {
  name: "bonk",
  code: `$title[1;Bonk!]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/actions/bonk;url]]`
}