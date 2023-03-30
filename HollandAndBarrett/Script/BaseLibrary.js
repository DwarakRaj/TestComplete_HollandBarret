//USEUNIT GlobalVariables


function launchApplication(){
  Browsers.Item(GlobalVariables.browserName).Run(GlobalVariables.appUrl);


}


function closeBrowser(){
 Sys.Browser("edge").Close()
}




