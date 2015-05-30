/*jshint node:true*/

var webdriverio = require('webdriverio');

var client = webdriverio.remote({
  desiredCapabilities: {
    browserName: 'chrome'
  }
});

require('webdrivercss').init(client);

client
  .init()
  .saveScreenshot('./shots/splash.png')
  .elementById('slide-0')
  .waitForVisible('.app-intro')
  .saveScreenshot('./shots/home.png')
  .performTouchAction({
    element: '#slide-0 button'
  })
  .pause(1000)
  .saveScreenshot('./shots/1-1.png')
  // .hold('#slide-0 button')
  .end();
