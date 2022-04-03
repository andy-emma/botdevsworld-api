module.exports = {
  name: "cry",
  code: `$title[1;Cry!]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/actions/cry;url]]`
}