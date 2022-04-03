module.exports = {
  name: "kiss",
  code: `
$description[1;<@$authorID> besa a <@$mentioned[1]>.]$color[1;$getVar[color]]$footer[1;UwU
$getVar[footer];$getVar[fooicon]]
$image[1;$jsonRequest[https://api.devsworld.tk/actions/kiss;url]]
$argsCheck[>=1;{newEmbed:{title:$customEmoji[no] | Error}{description:Debes mencionar a alguien.}{color:$getVar[color]}{footer:$getVar[footer]}}]`
}