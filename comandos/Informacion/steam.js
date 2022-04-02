module.exports ={
name:"steam",
category: "Informacion",
description: "Da la informacion de una app de steam.",
usage: "e!steam <app>", 
aliases: "",
code:`
$title[1;Informacion de la aplicacion]
$thumbnail[1;$jsonRequest[https://api.devsworld.tk/general/steam?game=$message;thumbnail]]
$addField[1;$customEmoji[arrow]**Nombre:**; \`\`\`$jsonRequest[https://api.devsworld.tk/general/steam?game=$message;name]\`\`\`;yes]$addField[1;$customEmoji[arrow]**Desarolladora:**; \`\`\`$jsonRequest[https://api.devsworld.tk/general/steam?game=$message;developers]\`\`\`;yes]$addField[1;$customEmoji[arrow]**Publicadora:**; \`\`\`$jsonRequest[https://api.devsworld.tk/general/steam?game=$message;publishers]\`\`\`;yes]$addField[1;$customEmoji[arrow]**Terminos/Legal:**; \`\`\`$jsonRequest[https://api.devsworld.tk/general/steam?game=$message;legal]\`\`\`;yes]$addField[1;$customEmoji[arrow]**Logros:**; \`\`\`$jsonRequest[https://api.devsworld.tk/general/steam?game=$message;totalAchievements]\`\`\`;yes]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$argsCheck[>=1;Uso $getServerVar[prefix]steam <aplicaion>]
`
}