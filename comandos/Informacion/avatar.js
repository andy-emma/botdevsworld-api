module.exports = {
  name: "avatar",
  code: `
$title[1;Avatar de: $jsonRequest[https://api.devsworld.tk/general/avatar?userid=$findUser[$message;yes];usertag]] 
$image[1;$jsonRequest[https://api.devsworld.tk/general/avatar?userid=$findUser[$message;yes];avtar]]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]`
}