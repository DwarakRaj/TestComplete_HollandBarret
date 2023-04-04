//USEUNIT BaseLibrary



function clickOnRewardLink(){
 Aliases.browser.pageHollandBarrettUkSLeadingHeal.linkRewards.textnodeRewards.Click() 
 Delay(6000,"Waiting for the screen to load")

}


function clickOnAccount(){
  
  ele=Aliases.browser.pageHollandBarrettUkSLeadingHeal.buttonAccount
  if (ele.Exists){
    ele.Click()
  }
  
}


function clickOnVitaminsAndSupplement(){
  Aliases.browser.pageHollandBarrettUkSLeadingHeal.navVitaminsSupplements.textnodeVitaminsSupplements.textnodeVitaminsSupplements2.linkVitaminsSupplements.Click()
}

function clickOnVitamins(){
  Aliases.browser.pageVitaminsSupplementsHollandBa.linkVitamins.Click()
}

function clickOnVitaminC(){
  vitaminCEle = Aliases.browser.pageVitaminsSupplementsTabletsSh.textnodeVitaminC
  vitaminCEle.Click()
}

function getVitaminPrice(){
  let price = Aliases.browser.pageVitaminCTabletsSupplementsSh.textnodeImmunitySupport.textnodeImmunitySupport2.textnode.textnode2.contentText
  priceLst = price.split("\n")
  return Number(priceLst[1])
}

function clickOnSecondVitamin(){
  Aliases.browser.pageVitaminCTabletsSupplementsSh.textnodeImmunitySupport.textnodeImmunitySupport3.buttonAddToBasket2.Click()
}

function getPriceOfScecondVitamin(){
  price = Aliases.browser.pageVitaminCTabletsSupplementsSh.textnodeImmunitySupport.textnodeImmunitySupport3.textnode3.textnode4.contentText
  priceLst = price.split("\n")
  return Number(priceLst[1])
}



function clickVitaminCItem(){
  Delay(2000,"waiting for the screen to load")
  Aliases.browser.pageVitaminCTabletsSupplementsSh.textnodeImmunitySupport.textnodeImmunitySupport2.buttonAddToBasket.Click()
}


function clickOnFoodDrinksLink(){
  Aliases.browser.pageVitaminsSupplementsHollandBa.navVitaminsSupplements.textnodeVitaminsSupplements.textnodeFoodDrink.linkFoodDrink.Click()
}

function clickOnVeganLink(){
  Aliases.browser.pageFoodDrinkProductsHealthFoodE.linkVeganFood.Click()
}

function clickOnVeganChoclateLink(){
  Aliases.browser.pageVeganFoodProductsShopNowHoll.textnodeVeganChocolate.Click()
}

function addVeganChoclateToCart(){
  Aliases.browser.pageVeganChocolateBarsBagsDarkCh.textnode.textnode2.buttonAddToBasket.Click()
}

function getPriceOfVeganChoclate(){
  price = Aliases.browser.pageVeganChocolateBarsBagsDarkCh.textnode.textnode2.textnode3.textnode4.contentText
  priceLst = price.split("\n")
  return Number(priceLst[1])
  
}

function addVeganChoclateSecondToCart(){
  Aliases.browser.pageVeganChocolateBarsBagsDarkCh2.textnode.textnode2.buttonAddToBasket.Click()
}

function getPriceOfSecondVeganChoclate(){
  price = Sys.Browser("edge").Page("https://www.hollandandbarrett.com/shop/food-drink/snacks/chocolate-cakes-biscuits/chocolate/?t=advisorymessage_vegan").FindElement("//span[text()='12.00']").contentText
  priceLst = price.split("\n")
  return Number(priceLst[1])
  
}

function addVeganChoclateThirdToCart(){
  Aliases.browser.pageVeganChocolateBarsBagsDarkCh.textnode.textnode6.buttonAddToBasket2.Click()
}

function getPriceOfThirdVeganChoclate(){
  price = Sys.Browser("edge").Page("https://www.hollandandbarrett.com/shop/food-drink/snacks/chocolate-cakes-biscuits/chocolate/?t=advisorymessage_vegan").FindElement("//li[3]//a//h4/span[contains(@class, 'jsx-3474911624')]").contentText
  priceLst = price.split("\n")
  return Number(priceLst[1])
  
}


function addVitaminCtoCart(){
  clickOnVitaminsAndSupplement()
  clickOnVitamins()
  clickOnVitaminC()
  clickVitaminCItem()
  price = getVitaminPrice()
  return price  
}

function addSecondVitaminCtoCart(){
  clickOnVitaminsAndSupplement()
  clickOnVitamins()
  clickOnVitaminC()
  clickVitaminCItem()
  price1 = getVitaminPrice()
  clickOnSecondVitamin()
  price2 = getPriceOfScecondVitamin()
  price = price1+price2
  return price  
}


function addVeganChoclate(){
  clickOnFoodDrinksLink()
  clickOnVeganLink()
  clickOnVeganChoclateLink()
  addVeganChoclateToCart()
  price = getPriceOfVeganChoclate()
  return price
}


function addMultipleVeganChoclate(){
  clickOnFoodDrinksLink()
  clickOnVeganLink()
  clickOnVeganChoclateLink()
  addVeganChoclateToCart()
  price1 = getPriceOfVeganChoclate()
  addVeganChoclateSecondToCart()
  price2 = getPriceOfSecondVeganChoclate()
  addVeganChoclateThirdToCart()
  price3 = getPriceOfThirdVeganChoclate()
  price = price1+price2+price3
  return price
}