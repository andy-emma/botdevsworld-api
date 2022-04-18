module.exports = {
    name: "eval", 
    prototype: 'slash',
    type: 'interaction', 
    code: `$interactionReply[$eval[$slashOption[code]]]
$onlyForIDs[$botOwnerID;{ "embeds": "{newEmbed:{description:Este comando no es para ti vro.}{color:$getVar[color]}{footer:$getVar[footer]:$getVar[fooicon]}}", "ephemeral": true, "options": { "interaction" : true } }]
$onlyBotPerms[embedlinks;{ "content": "Necesito el permiso de Embed_Links", "ephemeral": true, "options":{ "interaction" : true } }]`
  }