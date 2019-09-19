

module.exports=
{
	  open(x)
	{

		browser.url(x);
		browser.maximizeWindow();
	}

,testslide()
{			
	var count=0;
		var list = $$("p");
		console.log(list.length);

				for (var i = 0; i <list.length; i++) 
				{
	
					if(list[i].getAttribute('class').includes("btcaption"))
							{
									count++;
		
							}
				}
	console.log("number of slides:"+count);
}
,testADS()
{

	var count=0;

        var list = $$("iframe");
			console.log(list.length);

		for (var i = 0; i <list.length; i++) {
			
			if(list[i].getAttribute('id').includes("ads"))
			{
				count++;
				var x =list[i].getAttribute('id');
				console.log("ads "+count+": " + x);

			}
		}
		console.log(count);
	
	
    
}
	
}






