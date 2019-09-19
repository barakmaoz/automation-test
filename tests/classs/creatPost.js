

var media = require('./media');
var setting = require('./setting');


class creatPost 
{
  
  get create() { return $("//*[@id='root']/div/section/div[3]/div[1]/aside[1]/div[1]/div[2]/div/ul/li[2]/a"); }
  get headline() { return $("//*[@id='headline']"); }
  get caradText() { return $("//*[@id='maintext_1']/div/div[1]"); }
  get AddMediaincard() { return $("//*[@id='root']/div/section/div[3]/div[2]/div/section/section/div[2]/div[2]/article/div[2]/div[3]/div/button"); }

    clickCreatepost()
    {
        browser.pause(3000);     
        return this.create.click();
    }

    settitle(tt)
    {
      browser.pause(3000);
      return this.headline.setValue(tt);
    }



    enterCardText(cardTextV)
    {
      browser.pause(3000);
      return this.caradText.setValue(cardTextV);

    }


    clickOnaddImageIncard()
    {
      browser.pause(2000);
      return this.AddMediaincard.click();
    }

    addImagefun()
    {
      console.log("im here")
      browser.pause(4000);
      media.clickntheimage();
      browser.pause(1500);
      media.clickOKtheImage();
    }

    enterMetaDatainpage()
    {
      setting.enterMetaDataTitle();
      setting.entermetaDataDescription();
      setting.clickmetaDataImagex();
      media.clickntheimage();
      media.clickOKtheImageMetxa();

    }

      


  



}
module.exports = new creatPost();