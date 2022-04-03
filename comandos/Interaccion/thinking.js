module.exports = {
  name: "thinking",
  code: `$title[1;Thinking!]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/actions/thinking;url]]`
}