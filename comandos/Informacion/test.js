module.exports = [{
name: "comandos",
aliases: "cmds",
code: `$title[1;**¡Comandos de GodzBot!**]
$description[1;** :welcome: ¡Bienvenid@ a el menú de Comandos de GodzBot, soy un Bot Multifuncional en español!**

:categorias: **|  Categorías:**

**╭────╼│:random:│╾────╸**
> :configuracion: **» Configuración**
> :moderacion: **» Moderación**
> :utilidad: **» Utilidad**
> :diversion: **» Diversión**
**╰────╼│:random:│╾────╸**
]
$color[1;5D00FF]
$footer[1;Comando ejecutado por: $username#$discriminator]
$addSelectMenu[1;menu;Selecciona algo;1;1;no;Extras:Comandos extras a la api.:men1;Imagenes:Muestra imagenes no NSFW.:men2;Informacion:Muestra la informacion.:men3;Interaccion:Interacciones del usuario.:men4;NSFW:Nsfw UwU.:men5]`  
},{  
type: "interaction",
name: "menu",
prototype: "selectMenu",
code: `$interactionUpdate[;{newEmbed:{description:ola}{color:$getVar[color]}{footer:$getVar[footer]:$getVar[fooicon]}};{actionRow:{selectMenu:menu:¡Elige una Categoría!:1:1:no:{selectMenuOptions:Comandos de Configuración:val1:no}}}] $onlyIf[$interactionData[values[0]]==val1;]` 
}]