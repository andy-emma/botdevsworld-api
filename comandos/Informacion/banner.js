module.exports = ({
name: "banner",
code: `
$title[1;Banner de: $getObjectProperty[usertag]]
$addField[1;Color de banner;
\`\`\`
[$replaceText[$replaceText[$checkCondition[$getObjectProperty[banner_color]==];true;Sin color de banner.];false;$getObjectProperty[banner_color]]]\`\`\`;yes]
$image[1;$getObjectProperty[banner]]$description[1;Si sale una :x: de imagen es porque el usuario no tiene banner.]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$createObject[$jsonRequest[https://api.devsworld.tk/general/banner?userid=$findUser[$message;yes]]]`
})