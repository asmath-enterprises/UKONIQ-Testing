//import pages
load('Config/index.js')
// load('Pages/LoginPage.js')

// run test for all devices and browsers
forAll(browsers, function () {
	forAll(devices, function () {
		forAll(domains, function () {
			test('Test on ${browserName} on ${deviceName} size is ${size} and Domain is ${pages}', function (browser, device, domain) {
				// Instantiating the WebDriver
				var driver = createDriver(domain.url, device.size, browser.browserName)
				//Test code
				// var loginPage = null
				// logged('Login Page', function () {
				// 	loginPage = new LoginPage(driver)
				// 	loginPage.waitForIt()
				// 	loginPage.loginAs(TEST_USER.password)
				// 	// Checking layout on the page
				// 	checkLayout(driver, 'tests/specs/homepage.gspec', device.deviceName)
				// })
				checkLayout(driver, 'tests/specs/homepage.gspec', device.tags)
				// Quiting the browser
				driver.quit()
			})
		})
	})
})
