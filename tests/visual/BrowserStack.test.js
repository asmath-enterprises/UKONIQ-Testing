// A Galen-JavaScript test to execute a spec against multiple configurations

// Configurations for running the tests
//A list of all capabilities to check https://www.browserstack.com/automate/capabilities
this.devices = {
	win8: {
		tag: 'desktop',
		deviceName: 'Win-Chrome-latest',
		os: 'Windows',
		os_version: '8.1',
		browser: 'Chrome',
		browserName: 'Chrome',
		browser_version: 'latest',
	},
	iPhoneXS: {
		tag: 'mobile',
		deviceName: 'iPhone-XS',
		os_version: '15',
		device: 'iPhone XS',
		real_mobile: 'true',
		browserName: 'iPhone',
	},
}

forAll(devices, function (option) {
	test('Homepage Test on ${deviceName}', function () {
		var driver = createGridDriver(
			'http://' +
				System.getProperty('browserstack.username') +
				':' +
				System.getProperty('browserstack.key') +
				'@hub.browserstack.com/wd/hub',
			{
				desiredCapabilities: {
					browser: option.browser,
					browser_version: option.browser_version,
					os: option.os,
					os_version: option.os_version,
					browserName: option.browserName,
					platform: option.platform,
					device: option.device,
					emulator: option.emulator,
					'browserstack.debug': 'true',
				},
			}
		)

		// Open the test URL
		driver.get('https://shreethemes.in/fronter/index-startup.html')

		// Test code
		// driver
		// 	.findElement(By.name('password_protected_pwd'))
		// 	.sendKeys('SwVt9o$mzXDjWOCDsHNBOCLx')
		// driver.findElement(By.name('wp-submit')).click()

		// Select the Spec
		checkLayout(driver, 'tests/specs/homepage.gspec', [option.tag])

		// Destroy the session
		driver.quit()
	})
})
