module.exports = {
  name: "dog",
  code: ` $title[1;Dog!]
$image[1;$jsonRequest[https://dos-api.emmaalol.repl.co/images/dog;url]]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
`
}