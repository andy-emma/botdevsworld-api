module.exports = ({
 name: "unban",
 code: `$unban[$findUser[$message[1];no];$guildID;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No se dio una razón.];false;$messageSlice[1]]]
$description[1; **$username[$message[1]] ha sido desprohibido**
**Administrador encargado:** <@$authorID>
**Razón:** $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No se dio una razón];false;$messageSlice[1]]
**Momento de desprohibición:** <t:$truncate[$divide[$dateStamp;1000]]:F>]
$onlyBotPerms[unban;{newEmbed:{title:Error}{description:**No cuento con suficientes permisos para llevar a cabo esta acción.**}{color:fc2121}}]
$onlyIf[$isBanned[$message[1]]==true;{newEmbed:{title:Error}{description:**El usuario no está prohibido.**}{color:fc2121}}]
$argsCheck[>=1;{newEmbed:{title:Error}{description:**Debes agregar la identificación del miembro (ID) para desprohibirlo.**
**Uso:**
\`\`\`fix
{prefix}unban <ID>\`\`\`}
{color:fc2121}}]
$onlyPerms[admin;{newEmbed:{title:Error}{description:**No cuentas con suficientes permisos para llevar a cabo esta acción.**}{color:fc2121}}]
$color[1;$getVar[color]]$footer[1;$getVar[footer]`
});