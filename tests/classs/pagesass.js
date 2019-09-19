class pagesass 
{
  get loginBTN() { return $("//*[@id='root']/div/div/div[2]/div[2]/form/button"); }
 

  clickLogin()
  {
    return this.loginBTN.click();
  }

  


}

module.exports = new pagesass();