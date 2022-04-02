module.exports = {
  name: "cat",
  code: `$title[1;Cat!]
$image[1;$jsonRequest[https://api.devsworld.tk/images/cat;file]]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
`
}
  