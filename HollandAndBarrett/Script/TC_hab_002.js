//USEUNIT BaseLibrary
//USEUNIT HomeScreen
//USEUNIT LoginScreen
//USEUNIT CartScreen



function tc_hab_002(){
  BaseLibrary.launchApplication()
  HomeScreen.clickOnAccount()
  LoginScreen.performActionLoginScreen()
  vitaminCPrice = HomeScreen.addVitaminCtoCart()
  veganPrice = HomeScreen.addVeganChoclate()
  CartScreen.checkItemsAddedToCart()
//  CartScreen.removeCartItem()
  BaseLibrary.closeBrowser()

  
}