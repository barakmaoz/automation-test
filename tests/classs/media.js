
class media
{

	get AddMediaincard() { return $("//*[@id='root']/div/section/div[3]/div[2]/div/section/section/div[2]/div[2]/article/div[2]/div[3]/div/button"); }
	get thechooseimage() { return $('/html/body/div[2]/div/div[2]/div/div/div[2]/section/div[2]/div[1]/div/div[14]/img');}
  get enterimage() { return $('/html/body/div[2]/div/div[2]/div/div/div[1]/div/div/div[4]/button');}
  get enterimageimMta() { return $('/html/body/div[2]/div/div[2]/div/div/div[1]/div/div/div[1]/button');}

  

  clickntheimage()
  {
    browser.pause(3000);
    return this.thechooseimage.click();
  }

  clickOKtheImage()
  {
	browser.pause(2000);
	return this.enterimage.click();
  }

  clickOKtheImageMetxa()
  {
    browser.pause(2000);
  	return this.enterimageimMta.click();
  }

}

module.exports = new media();