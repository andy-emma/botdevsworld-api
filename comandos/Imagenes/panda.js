module.exports = {
  name: "panda",
  code: `$title[1;Panda!]
$image[1;$jsonRequest[https://dos-api.emmaalol.repl.co/images/panda;message]]
$color[1;$getVar[color]]
$footer[1;$getVar[footer];$getVar[fooicon]]
`
}