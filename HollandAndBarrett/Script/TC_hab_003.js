//USEUNIT BaseLibrary
//USEUNIT HomeScreen
//USEUNIT LoginScreen
//USEUNIT CartScreen



function tc_hab_003(){
  BaseLibrary.launchApplication()
  HomeScreen.clickOnAccount()
  LoginScreen.performActionLoginScreen()
  vitaminCPrice = HomeScreen.addSecondVitaminCtoCart()
  veganPrice = HomeScreen.addMultipleVeganChoclate()
  cart_price = CartScreen.get_price()
  total_price = vitaminCPrice+veganPrice
  Log.Message(total_price)
  if (total_price == cart_price){
    Log.Checkpoint("The values are matching")
  }
  else{
    Log.Error("The Values are not matchin")
  }
//  CartScreen.removeCartItems()
//  LoginScreen.signOut()
  BaseLibrary.closeBrowser()
  }