module.exports = {
  name: "wink",
  code: `$title[1;Wink!]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/actions/wink;url]]`
}