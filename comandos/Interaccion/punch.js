module.exports = {
  name: "punch",
  code: `$title[1;Punch!]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/actions/punch;url]]`
}