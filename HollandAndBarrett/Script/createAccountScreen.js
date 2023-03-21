//USEUNIT RandomUtil
//USEUNIT GlobalVariables


function enterFirstName(){
  var firstName = RandomUtil.getRandamName(7)
  Aliases.browser.pageRegisterHollandBarrettTheUkS.articleCreateAnAccount.formFirstName.fieldsetFirstName.textboxFirstName.Keys(firstName)
}


function enterLarstName(){
  var lastName = RandomUtil.getRandamName(5)
  Aliases.browser.pageRegisterHollandBarrettTheUkS.articleCreateAnAccount.formFirstName.fieldsetFirstName.textboxLastName.Keys(lastName)
}


function enterEmail(){
  Aliases.browser.pageRegisterHollandBarrettTheUkS.articleCreateAnAccount.formFirstName.emailinputEmailAddress.Keys(GlobalVariables.emailId)
}


function enterPassword(){

  Aliases.browser.pageRegisterHollandBarrettTheUkS.articleCreateAnAccount.formFirstName.passwordboxCreateAPassword.Keys(GlobalVariables.password)
  
}

function enterConfirmPassword(){
  Aliases.browser.pageRegisterHollandBarrettTheUkS.articleCreateAnAccount.formFirstName.passwordboxConfirmPassword.Keys(GlobalVariables.password)
}


function clickOnNotToday(){
  Aliases.browser.pageRegisterHollandBarrettTheUkS.articleCreateAnAccount.formFirstName.labelNotToday.radiobuttonNotToday.Click()
}

function clickOnEmail(){
  Aliases.browser.pageRegisterHollandBarrettTheUkS.articleCreateAnAccount.formFirstName.labelEmail.checkboxConsentemail.Click()
}

function clickOnIAgreeCheckBox(){
  Aliases.browser.pageRegisterHollandBarrettTheUkS.articleCreateAnAccount.formFirstName.labelIAgreeToTheRewardsForLife.checkboxTerms.Click()
}

function clickOnCreateAccount(){
  Aliases.browser.pageRegisterHollandBarrettTheUkS.articleCreateAnAccount.formFirstName.buttonCreateAnAccount.Click()
}


function verifyAccountCreated(){
  confirmationText = Aliases.browser.pageRegisterHollandBarrettTheUkS.articleCreateAnAccount.textnodeAccountCreated.contentText
  Log.Message(confirmationText)
  if (confirmationText === "Account created"){
    Log.Checkpoint("The account was succesfully created")
  }
  else{
    Log.Error("Unable to create the account")
  }
}


function performActionOnCreateAccountScreen(){
  enterFirstName()
  enterLarstName()
  enterEmail()
  enterPassword()
  enterConfirmPassword()
  clickOnNotToday()
  clickOnEmail()
  clickOnIAgreeCheckBox()
  clickOnCreateAccount()
  verifyAccountCreated()
  
}