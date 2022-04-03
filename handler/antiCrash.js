module.exports = (bot) => {
 process.on('unhandledRejection', (reason, p) => {
 console.log(' [antiCrash] :: Sucedio algo');
 console.log(reason, p);
 });
 process.on("uncaughtException", (err, origin) => {
 console.log(' [antiCrash] :: Sucedio algo');
 console.log(err, origin);
 }); process.on('uncaughtExceptionMonitor', (err, origin) => {
 console.log(' [antiCrash] :: Sucedio algo (MONITOR)');
 console.log(err, origin);
 });
 process.on('multipleResolves', (type, promise, reason) => {
 console.log(' [antiCrash] :: Sucedio algo');
 });
}
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