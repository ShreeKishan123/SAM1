export default function openurl(clientAPI) {
const utilsModule = clientAPI.nativescript.utilsModule;


return confirm("Do you want to leave the current app?").then((result, fails) => {
  if(result){ return utilsModule.openUrl("https://en.wikipedia.org/wiki/RJ") }
       	else{ return utilsModule.openUrl("https://en.wikipedia.org/wiki/India") }
});
}
// ShreeKishan