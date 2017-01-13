jQuery.sap.includeScript("/webapp/cordova.js");

sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.sample.cordova.controller.Main", 
	{




//Barcode Scanner
		 onScan: function () 
		 {
	
                cordova.plugins.barcodeScanner.scan(this.scanSuccessCallback,this.scanErrorCallback);

		},
		
		
		crossApp : function()
		
		{
			
			
	// Step 1: Get Service for app to app navigation
var navigationService = sap.ushell.Container.getService("CrossApplicationNavigation");

// Step 2: Navigate using your semantic object
navigationService.toExternal({ 
                               target : { semanticObject : "#Products_Demo", action: "Display" }
                        
                            })		
		


	},
		
		
		
		
		
		
		
		
		
		
		
		
		  scanSuccessCallback: function(result) 
		    {
                alert(result.text);
            },

            scanErrorCallback: function(error) {
                navigator.notification.alert("Scanning failed: " + JSON.stringify(error));
            },
		
		
//GetLocation		
		
 onGetLocation:function()
 
   
	{
     	navigator.geolocation.getCurrentPosition(this.onSuccess2, this.onError2);
     },
     
     
     onSuccess2:function(position)
     {
     	 alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
     },
     onError2:function(){
     	alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
     },
     
     
   //getDevice  Information  
    getDeviceInfo:function(){
      	var dev="Serial No" + device.serial;
      	dev+="Cordova version" +  device.cordova;
        dev+=   "device model" + device.model;
        dev+= "device platform"+ device.platform;
     dev+= "device uuid"+ device.uuid;
        dev+="device version"+ device.version;
dev+="device manufacturer"+ device.manufacturer;
alert(dev);



      	 },
      	 
      	 
      	 
      	 // GetContacts
      	 
      	  coRead: function(){
     		 var options = new ContactFindOptions();
        options.filter=""; 
            options.multiple=true;      // return multiple results

        var fields = ["displayName", "name"];
        navigator.contacts.find(fields, this.onSuccess1, this.onError1, options);
     },
     onSuccess1:function(contacts){
     	   	var aco="";
        for (var i=0; i<contacts.length; i++) {
            //alert("Display Name = " + contacts[i].displayName);
             aco+=contacts[i].displayName;
        }
       alert(aco);
     },
     onError1:function(){
     	 alert('onError!');
     }




	});
});