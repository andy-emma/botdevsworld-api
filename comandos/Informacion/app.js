module.exports = ({
name: "appsearch",
description: "Busca información sobre una aplicación de la distribuidora Google Play.",
usage: "s!appsearch <Nombre>",
code: `
$author[1;Google Play;https://pnggrid.com/wp-content/uploads/2021/04/Google-Play-Logo-1838x2048.png]
$addField[1;$customEmoji[arrow]URL;
**[$getObjectProperty[title]]($getObjectProperty[url])**;no]
$addField[1;$customEmoji[arrow]Opiniones;
\`\`\`
⭐ $getObjectProperty[score]\`\`\`;yes]
$addField[1;$customEmoji[arrow]ID de la aplicación;
\`\`\`
$getObjectProperty[appId]\`\`\`;yes]
$addField[1;$customEmoji[arrow]Precios al usuario;
\`\`\`
$replaceText[$getObjectProperty[priceText];FREE;Gratis]\`\`\`;no]
$addField[1;$customEmoji[arrow]ID del desarrollador;
\`\`\`
$getObjectProperty[developerId]\`\`\`;yes]
$addField[1;$customEmoji[arrow]Desarrollador;
\`\`\`
$getObjectProperty[developer]\`\`\`;yes]
$addField[1;$customEmoji[arrow]Nombre; 
\`\`\`
$getObjectProperty[title]\`\`\`;yes]
$thumbnail[1;$getObjectProperty[icon]]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$createObject[$jsonRequest[https://api.devsworld.tk/general/playstore?app=$replaceText[$message; ;+;]]]
$argsCheck[>=1;{newEmbed:{title:Error}{description:$customEmoji[no] **Debes agregar el nombre de una aplicación.**
**Uso:**
\`\`\`
$getServerVar[prefix]appsearch <Nombre>\`\`\`}{color:$getVar[color]}{footer:$getVar[footer]}}]
`})