class setting
{


//elments//

//metadata
	get metaDataTitle() { return $("//*[@id='metadata-title']"); }
	get metaDataDescription() { return $("//*[@id='metadata-description']");}
	get metadataImages() { return $("//*[@id='root']/div/section/div[3]/div[2]/div/section/aside/div/div[1]/div[2]/div/div/div[3]/button");}
//setting
  get settingBTN() { return $("//*[@id='root']/div/section/div[3]/div[2]/div/section/aside/div/div[2]/div[1]");} 
  get permalink() { return $("//*[@id='0']");} 
  get aothoer() { return $("//*[@id='root']/div/section/div[3]/div[2]/div/section/aside/div/div[3]/div[1]");} 
  get clickcategory() { return $("//*[@id='root']/div/section/div[3]/div[2]/div/section/aside/div/div[3]/div[2]/div/div/div[3]/div[2]");} 
  get choosecategory() { return $("//*[@id='root']/div/section/div[3]/div[2]/div/section/aside/div/div[3]/div[2]/div/div/div[3]/div[2]/div[2]/div[1]");} 


  //metadata funcitos
  enterMetaDataTitle()
  {
	browser.pause(1000);
    return this.metaDataTitle.setValue("test metadata title");
  }

  entermetaDataDescription()
  {
	browser.pause(1000);
	return this.metaDataDescription.setValue("test metadata Description");
  }

  clickmetaDataImagex()
  {
    browser.pause(1000);
	  return this.metadataImages.click();
  }


  //setting function
  clicksettingx()
  {
    browser.pause(1000);
	  return this.settingBTN.click();
  }

  //add permalink
  addPermalink()
  {
    browser.pause(1000);
	  return this.permalink.setValue("test permalink aotu");
  }


//choose aothoer 
chooseAothoer ()
{
  browser.pause(1000);
  return this.aothoer.click();
}

  



  

}

module.exports = new setting();