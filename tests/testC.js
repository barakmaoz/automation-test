const assert = require('assert');

console.log("prienxxjkhk777jt");

var Login = require('./classs/Login');
var creatPost =  require('./classs/creatPost');
var pagesass = require('./classs/pagesass');
var media =  require('./classs/media');


describe('login to WP and take some data', () => {
	
  
  
     it('login to Bolt and craete a new post', () => {
       console.log("prient");
      Login.open('http://publisher-ui-host-stage.s3-website-us-east-1.amazonaws.com');
      pagesass.clickLogin();
      
      //insied Bolt
      browser.pause(8000);
      creatPost.clickCreatepost();
       creatPost.settitle('testbarak');
       creatPost.enterCardText('test test');
       browser.pause(3000);
       creatPost.clickOnaddImageIncard();
       creatPost.addImagefun();
       browser.pause(3000);
       creatPost.enterMetaDatainpage();
       browser.pause(3000)
       



		
    });

   
});
