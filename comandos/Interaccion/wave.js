module.exports = {
  name: "wave",
  code: `$title[1;Wave!]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/actions/wave;url]]`
}