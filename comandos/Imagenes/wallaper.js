module.exports = {
  name: "wallaper",
  code: `$title[1;Wallaper!]
$image[1;$jsonRequest[https://dos-api.emmaalol.repl.co/sfw/mbwallpapers;url]]
$footer[1;$getVar[footer];$getVar[fooicon]]
$color[1;$getVar[color]]
`
}