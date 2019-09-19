

module.exports=
{
  get ()
      {


       }
      ,loginTobolt(x)
      {
        var login= $("//*[@id='root']/div/div/div[2]/div[2]/form/button");
        login.click();
        browser.pause(8000);

      }
      

      ,createpostClick(xxx)
      {       
          
       //click create
        var clickPost=$("//*[@id='root']/div/section/div[3]/div[1]/aside[1]/div[1]/div[2]/div/ul/li[2]/a");
        clickPost.click();
        browser.pause(2000);

         //enter headline
        var headline = $("//*[@id='headline']");
        headline.setValue(xxx);
        browser.pause(1000);

        //enter card text
        var caradText = $("//*[@id='maintext_1']/div/div[1]");
        caradText.setValue("Victoria need B12 and Alex rosh dag");
        browser.pause(1000);

        //enter photo
        $("//*[@id='root']/div/section/div[3]/div[2]/div/section/section/div[2]/div[2]/article/div[2]/div[3]/div/button").click();
        browser.pause(1000);
        var photo =  $('/html/body/div[2]/div/div[2]/div/div/div[2]/section/div[2]/div[1]/div/div[8]/img');
        photo.click();
        browser.pause(1000);
        $('/html/body/div[2]/div/div[2]/div/div/div[1]/div/div/div[4]/button').click();
        browser.pause(1000);

        //enter metadata
        var metadataTitle = $("//*[@id='metadata-title']");
        metadataTitle.setValue("Mazda test twitter");
        browser.pause(1000);
        var metadataTitle = $("//*[@id='metadata-description']");
        metadataTitle.setValue("Mazda test twitter");
        browser.pause(1000);

        //enter photo for metadata
        $("//*[@id='root']/div/section/div[3]/div[2]/div/section/aside/div/div[1]/div[2]/div/div/div[3]/button").click();
        browser.pause(1000);
        var photo =  $('/html/body/div[2]/div/div[2]/div/div/div[2]/section/div[2]/div[1]/div/div[14]/img');
        photo.click();
        browser.pause(1000);
        $('/html/body/div[2]/div/div[2]/div/div/div[1]/div/div/div[1]/button').click();
        browser.pause(1000);
                            

        //clickSetting
        var clickSetting=  $("//*[@id='root']/div/section/div[3]/div[2]/div/section/aside/div/div[2]/div[1]");
        clickSetting.click();
        browser.pause(3000);

        //permalink
        var permalink = $("//*[@id='0']");
        permalink.setValue("testtwi66");
        browser.pause(1000);

         //clickAouthor
         var clickAouthor=  $("//*[@id='root']/div/section/div[3]/div[2]/div/section/aside/div/div[3]/div[1]");
         clickAouthor.click();
         browser.pause(1000);

         //clickcategory
         $("//*[@id='root']/div/section/div[3]/div[2]/div/section/aside/div/div[3]/div[2]/div/div/div[3]/div[2]").click();
         var clickcategory=  $("//*[@id='root']/div/section/div[3]/div[2]/div/section/aside/div/div[3]/div[2]/div/div/div[3]/div[2]/div[2]/div[1]");
         clickcategory.click();
         browser.pause(1000);  

         //click save

         $("//*[@id='root']/div/section/div[3]/div[2]/div/section/section/div[1]/div/section/div[3]/button[1]").click();
        
         browser.pause(4000);  
         //result
         
          var resultx =  $("//*[@id='root']/div/section/div[2]/div").getText();
         console.log(resultx);

        if(resultx.includes("Success"))
        {
          console.log("pass")
        }
        else
        {
          console.log("Faild")
        }

         browser.pause(5000);  

         //click publish
         
         $("//*[@id='root']/div/section/div[3]/div[2]/div/section/aside/div/div[4]/div[1]").click();
         browser.pause(1500);  
         var clickPublish = $("//*[@id='root']/div/section/div[3]/div[2]/div/section/aside/div/div[4]/div[2]/div/div/div/div[3]/button");
         clickPublish.click();
         browser.pause(3000);  
         $("/html/body/div[2]/div/div[3]/button[2]").click();
         browser.pause(8000);  

        

      }
      ,listcategory()
      {
        var clickPost=$("//*[@id='root']/div/section/div[3]/div[1]/aside[1]/div[1]/div[2]/div/ul/li[2]/a");
        clickPost.click();
         browser.pause(2000);

        var clickContent=  $("//*[@id='root']/div/section/div[3]/div[2]/div/section/aside/div/div[3]/div[1]");
        clickContent.click();
        browser.pause(1000);

        //clickcategory
        $("//*[@id='root']/div/section/div[3]/div[2]/div/section/aside/div/div[3]/div[2]/div/div/div[3]/div[2]").click();

        var clickcategory=  $$("//*[@id='root']/div/section/div[3]/div[2]/div/section/aside/div/div[3]/div[2]/div/div/div[3]/div[2]/div[2]/div");
        var size= clickcategory.length;
        console.log(size);
        clickcategory[0].click();
        clickcategory[3].click();
        clickcategory[1].click();

        for (let i = 0; i < size; i++) 
        {
          
          var categoryn = clickcategory[i].getText();
          console.log(categoryn);

        }
        browser.pause(1000);  


           //clickSetting
        var clickSetting=  $("//*[@id='root']/div/section/div[3]/div[2]/div/section/aside/div/div[2]/div[1]");
        clickSetting.click();
        browser.pause(3000);


        $("//*[@id='root']/div/section/div[3]/div[2]/div/section/aside/div/div[2]/div[2]/div/div/div[1]/div[2]").click();
        var primee = $$("//*[@id='root']/div/section/div[3]/div[2]/div/section/aside/div/div[2]/div[2]/div/div/div[1]/div[2]/div[2]/div");
        
        var xxx= primee.length;
        console.log(xxx);

        for (let i = 0; i < xxx; i++) 
        {
          
          var domain = primee[i].getText();
          console.log(domain);

        }


      }
      ,inisdetheppost()
      {        
        browser.pause(2000); 
        console.log("last dance");
        browser.pause(2000);  
        browser.switchWindow('test twitter6');
        var url = browser.getUrl();
        console.log(url);
          var title=  $("//*[@id='blog']/div[4]/div[1]/h1").getText();
        console.log(title);
        return title;
        
      }

      ,testpleasethistime()
      {
        $("//*[@id='root']/div/section/div[3]/div[1]/aside[1]/div[1]/div[2]/div/ul/li[1]/a").click();
        browser.pause(2000);  

        $("//*[@id='root']/div/section/div[3]/div[2]/div/section/section[2]/table/tbody/tr[1]/td[2]").click();

       $("//*[@id='root']/div/section/div[3]/div[2]/div/section/section/div[1]/div/section/div[3]/div[2]/div/i").click();
         
       
         
    
         browser.pause(2000);  
         console.log("good8");
         $("//*[@id='root']/div/section/div[3]/div[2]/div/section/section/div[1]/div/section/div[3]/div[2]/div/div[2]/div").click();
         browser.pause(3000);  
         console.log("mazaltov");


      }

      


}