//USEUNIT GlobalVariables



function enterEmailAddress(){
  Aliases.browser.pageSignInToYourAccountForTheBes.sectionMyAccount.formEmailAddress.textboxEmailAddress.Keys(Project.Variables.userName)
}

function eneterPassword(){
  Aliases.browser.pageSignInToYourAccountForTheBes.sectionMyAccount.formEmailAddress.passwordboxPassword.Keys(GlobalVariables.password)
}

function clickOnSignIn(){
  Aliases.browser.pageSignInToYourAccountForTheBes.sectionMyAccount.formEmailAddress.buttonAction.ClickButton()
}



function signOut(){
  ele = Sys.Browser("edge").Page("*").FindElement("[data-test='menu-item-link']")
  ele.HoverMouse()
  Sys.Browser("edge").Page("*").FindElement("//button[.='Sign Out']").Click()
}


function performActionLoginScreen(){
  ele=Aliases.browser.pageHollandBarrettUkSLeadingHeal.buttonAccount
  if (ele.Exists){
  enterEmailAddress()
  eneterPassword()
  clickOnSignIn()
  Delay(5000,"Waiting for the screen to load")
  }
}

