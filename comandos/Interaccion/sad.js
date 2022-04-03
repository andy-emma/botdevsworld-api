module.exports = {
  name: "sad",
  code: `$title[1;Sad!]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/actions/sad;url]]`
}