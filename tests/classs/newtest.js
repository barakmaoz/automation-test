const assert = require('assert');


const pagesass = require('./classs/pagesass.js');
const creatPost = require('./classs/creatPost.js');

var Login = require('./classs/Login');

describe('login to WP and take some data', () => {
	
  
  
     it('login to Bolt and craete a new post', () => {
       console.log("prient");
      Login.open('http://publisher-ui-host.s3-website-us-east-1.amazonaws.com/post-list');
     
      //login to BOLT
      pagesass.clickLogin();
      browser.pause(8000);
      creatPost.clickCreatepost();
      browser.pause(2000);
      creatPost.settitle("barak king");
      browser.pause(1000);
      creatPost.enterCardText("cmp cmp cmp");
      browser.pause(4000);


      //createnew[post]


      

		
    });

   
});
