const {join} = require('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    waitForTimeout: 10000,
    specs: [
        './test/specs/**/*.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "10.0",
        "appium:deviceName": "Pixel XL",
        "appium:automationName": "UiAutomator2",
        "appium:app": join(process.cwd(), './app/android/Android-NativeDemoApp-0.4.0.apk'),
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appWaitActivity": "com.wdiodemoapp.MainActivity",
        "appium:appActivity": "com.wdiodemoapp.MainActivity"
    }]
}