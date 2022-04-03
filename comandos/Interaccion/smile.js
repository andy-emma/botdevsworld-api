module.exports = {
  name: "smile",
  code: `$title[1;Smile!]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/actions/smile;url]]`
}