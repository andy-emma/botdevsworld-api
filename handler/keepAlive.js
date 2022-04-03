const express = require('express');
const app = express();
const port = 3000 || 8080;
app.all('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`<html><head> <link href="https://fonts.googleapis.com/css?famiy=Roboto Condensed" rel="stylesheet"> <style>body{font-family: "Roboto Condensed"; font-size: 21px; color: white; background-color: #23272A; margin-left: 5%; margin-top: 2%;}a{color: #5865F2}a:hover{color: #818bff}h1{font-size: 48px;}</style></head><body> <h1>Servicio 24/7</h1> </p></a><i>Asegúrese de agregar la URL repl.co a <a href="https://uptimerobot.com/">UPTIME ROBOT</a> para hacer Bot 24/7 en línea.</i></p> <h1>Developers | World</h1> <b><a href=https://discord.gg/YZFZnemwMK>Servidor de Discord</a> 😎 |  <a href="https://www.devsworld.tk">Sitio Web</a></b><br/><img src="https://discord.com/api/guilds/843200863647301653/widget.png?style=banner2"> </a><br/><br/>APOYAME A MI Y DEVELOPERS | WORLD</a></p></a>Siempre puedes apoyarme uniendote a mi servidor o invitando a mis bots :)</p></a>`);
  res.end();
});
  app.listen(port, () => {
    console.log("24/7 Bot Listo")
  });//Yo no necesito esto ya que soy Hacker (Plan) en replit.
/*  @INFO 
  * Codificado por Random.#6963
  * @INFO
  * Unete a nuestro equipo https://www.devsworld.tk | https://www.doctor-stars.studio
  * @INFO
  * Porfavor no quites los creditos :(
  * @INFO
  * Api usada https://api.devsworld.tk 
  * @INFO
*/