/*jshint node:true*/

var webdriverio = require('webdriverio');

var client = webdriverio.remote({
    desiredCapabilities: {
      'browserName': 'browser',
      'appiumVersion': '1.2.2',
      'deviceName': 'Android Emulator',
      'device-orientation': 'portrait',
      'platformVersion': '4.4',
      'app': 'sauce-storage:BusyMind.apk'
    },
    host: 'ondemand.saucelabs.com',
    port: 80,
    user: 'klamping',
    key: '91930ee4-445e-4ad0-b6e5-8405f73388a5',
    logLevel: 'silent'
});

require('webdrivercss').init(client);

client
  .init()
  .saveScreenshot('./shots/splash.png')
  .waitForVisible('.app-intro')
  .saveScreenshot('./shots/home.png')
  .performTouchAction({
    element: '#slide-0 button'
  })
  .pause(1000)
  .saveScreenshot('./shots/1-1.png')
  // .hold('#slide-0 button')
  .end();
