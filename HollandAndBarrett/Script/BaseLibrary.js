//USEUNIT GlobalVariables


function launchApplication(){
  Browsers.Item(GlobalVariables.browserName).Run(GlobalVariables.appUrl);


}


function closeBrowser(){
 Sys.Browser("edge").Close()
}


function waitForElement(element){
  while (element.Exits){
    Delay(5000,"waiting for the screen to load")
}
}




