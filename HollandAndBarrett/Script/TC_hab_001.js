//USEUNIT BaseLibrary
//USEUNIT HomeScreen
//USEUNIT CreateAccountScreen


function tc_had_001(){
  BaseLibrary.launchApplication()
  HomeScreen.clickOnRewardLink()
  CreateAccountScreen.performActionOnCreateAccountScreen()
}