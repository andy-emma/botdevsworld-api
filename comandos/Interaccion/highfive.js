module.exports = {
  name: "highfive",
  code: `$title[1;Highfive!]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/actions/highfive;url]]`
}