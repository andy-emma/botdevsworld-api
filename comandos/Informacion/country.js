module.exports = {
  name: "country",
  code: `
$title[1;Informacion del pais]
$addField[1;
$customEmoji[arrow;843200863647301653] **__Nombre del pais:__**; \`\`\`
$jsonRequest[https://api.devsworld.tk/general/countryinfo?name=$message;alt]
\`\`\`;yes]$addField[1;
$customEmoji[arrow;843200863647301653] **__Capital:__**; \`\`\`
$jsonRequest[https://api.devsworld.tk/general/countryinfo?name=$message;capital]
\`\`\`;yes]$addField[1;
$customEmoji[arrow;843200863647301653] **__Moneda:__**; \`\`\`
$jsonRequest[https://api.devsworld.tk/general/countryinfo?name=$message;currencies]
\`\`\`;yes]$addField[1;
$customEmoji[arrow;843200863647301653] **__Idiomas:__**; \`\`\`
$jsonRequest[
https://api.devsworld.tk/general/countryinfo?name=$message;langs]
\`\`\`;yes]$addField[1;
$customEmoji[arrow;843200863647301653] **__Lada:__**; \`\`\`
+$jsonRequest[https://api.devsworld.tk/general/countryinfo?name=$message;callCode]
\`\`\`;yes]$addField[1;
$customEmoji[arrow;843200863647301653] **__Poblacion:__**; \`\`\`
$jsonRequest[https://api.devsworld.tk/general/countryinfo?name=$message;population]
\`\`\`;yes]$addField[1;
$customEmoji[arrow;843200863647301653] **__Zonas Horarias__**; \`\`\`
$jsonRequest[https://api.devsworld.tk/general/countryinfo?name=$message;timezones]
\`\`\`;yes]$addField[1;
$customEmoji[arrow;843200863647301653] **__Estados/Provincias:__**; \`\`\`
$jsonRequest[https://api.devsworld.tk/general/countryinfo?name=$message;provinces]
\`\`\`;yes]$addField[1;
$customEmoji[arrow;843200863647301653] **__Continente/Sub:__**; \`\`\`
$jsonRequest[https://api.devsworld.tk/general/countryinfo?name=$message;region] | $jsonRequest[https://api.devsworld.tk/general/countryinfo?name=$message;subregion]
\`\`\`;yes]$addField[1;
$customEmoji[arrow;843200863647301653] **__Fronteras:__**; \`\`\`
$jsonRequest[https://api.devsworld.tk/general/countryinfo?name=$message;borders]
\`\`\`;yes]
$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
$argsCheck[>=1;{newEmbed:{title:$customEmoji[no] | Error}{description:Uso: $getServerVar[prefix]country <pais> | Ejemplo: $getServerVar[prefix]country México}{color:$getVar[color]}{footer:$getVar[footer]}}]`
} 