



function clickOnBasket(){
  Aliases.browser.pageVeganChocolateBarsBagsDarkCh.link2.textnodeBasket.Click()
}



function verifyItems(){
  let qty = Aliases.browser.pageBasketHollandBarrett.sectionBounceDippedChocolateCara.articleBounceDippedChocolateCara.sectionRemove.numberinputQuantity.Text
  let qty_vc = Aliases.browser.pageBasketHollandBarrett.sectionBounceDippedChocolateCara.article.sectionRemove2.numberinputQuantity2.Text
  totalItems = Aliases.browser.pageBasketHollandBarrett.textnode.contentText
  Log.Message(qty_vc)
  Log.Message(qty)
  Log.Message(totalItems)
  Log.Message(totalItems.includes("2 items"))
  if (qty == 1 && qty_vc == 1){
    Log.Checkpoint("The quantuties are added to the cart")
  }
  else if (totalItems.includes("2 items")){
    Log.Checkpoint("The quantuties are added to the cart")
  }
  else{
    Log.Error("The quanties were not added")
  }
  
}




function checkItemsAddedToCart(){
  clickOnBasket()
  verifyItems()
}

function get_price(){
  clickOnBasket()
  checkout = Aliases.browser.pageBasketHollandBarrett.panelSubtotal.contentText
  Log.Message(checkout)
  priceLst = checkout.split("\n")
  totalPrice = priceLst[1].substring(1)
  Log.Message(totalPrice)
  return Number(totalPrice)
}


function removeCartItem(){
  Sys.Browser("*").Page("https://www.hollandandbarrett.com/basket").FindElement("[data-test='remove']").Click()
  Sys.Browser("*").Page("https://www.hollandandbarrett.com/basket").FindElement("[data-test='remove']").Click()
  Sys.Browser("*").Page("https://www.hollandandbarrett.com/basket").FindElement("[data-test='remove']").Click()
  Sys.Browser("*").Page("https://www.hollandandbarrett.com/basket").FindElement("[data-test='remove']").Click()
  Sys.Browser("*").Page("https://www.hollandandbarrett.com/basket").FindElement("[data-test='remove']").Click()

}


function removeCartItems(){
  Sys.Browser("*").Page("https://www.hollandandbarrett.com/basket").FindElement("[data-test='remove']").Click()
  Sys.Browser("*").Page("https://www.hollandandbarrett.com/basket").FindElement("[data-test='remove']").Click()

}