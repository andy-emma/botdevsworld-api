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