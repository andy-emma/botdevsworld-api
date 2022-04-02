module.exports = {
  name: "status",
  code: `
$title[1;Api Status]$description[1;$if[$getServerVar[language]==es;**Status:** $jsonRequest[https://api.devsworld.tk/status;status;Down]\n**Code:** $jsonRequest[https://api.devsworld.tk/status;code;Down]\n**Incidentes:** $jsonRequest[https://api.devsworld.tk/status;incidentes;Hay incidentes]\n**Server Ubicación:** México/Cuernavaca,Morelos]]$color[1;$getVar[color]]$footer[1;$getVar[footer];$getVar[fooicon]]
`
}