module.exports = {
  name: "eval",
  code: `$eval[$message]
$onlyIf[$checkContains[$message;clientToken;killClient;botLeave]!=true;$customEmoji[cross2] | No estas permitido usar estas funciones.]
$onlyForIDs[$botOwnerID;737419179602477146;]`
}