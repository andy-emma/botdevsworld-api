module.exports = {
  name: "mwallaper",
  code: `$title[1;MobileWallaper!]
$image[1;$jsonRequest[https://dos-api.emmaalol.repl.co/sfw/mbwallpapers;url]]
$footer[1;$getVar[footer];$getVar[fooicon]]
$color[1;$getVar[color]]
`
}