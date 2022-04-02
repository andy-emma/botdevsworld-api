module.exports = {
  name: "8ball",
  code: `
  $title[1;8ball]
  $description[1;
  **Pregunta:** 
  $message
  **Respuesta:**
  $jsonRequest[https://api.devsworld.tk/fun/8ball;respuesta]
  **Pregunta por:**
  $username]
  $color[1;$getVar[color]] `
}