module.exports = {
  name: "ping",
  code: `$title[1;:ping_pong:Pong!]$description[1;$if[$getServerVar[language]==es;Latencia:]$if[$getServerVar[language]==en;Latency:]$if[$getServerVar[language]==fr;Latence:] $pingms
Database: $dbPingms (Mongo)]$footer[1;$getVar[footer];$getVar[fooicon]]$color[1;$getVar[color]]
`
}