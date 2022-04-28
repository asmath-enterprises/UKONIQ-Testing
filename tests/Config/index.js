//	Domain	URL
var domains = {
    indexpage:{
        url: "https://shreethemes.in/fronter/index-startup.html",
        pages: "indexpage"
    },
}


// A list of all devices and browsers that will be used in our tests
// ****	START **** //
var devices = {
    desktop:{
        deviceName: "desktop",
        size: "1900x1080",
        tags: ["desktop"]
    },
    tablet:{
        deviceName: "tablet",
        size: "600x800",
        tags: ["tablet"]
    },
    mobile:{
        deviceName: "mobile",
        size: "360x640",
        tags: ["mobile"]
    }
}

var browsers = {
    firefox: {
		browserName: 'firefox',
	},
	chrome: {
		browserName: 'chrome',
	},
	edge: {
		browserName: 'edge',
	}
}
// ****	END **** //

// TEST-DATA
var TEST_USER = {
    password: "SwVt9o$mzXDjWOCDsHNBOCLx"
};

/*
    Exporting functions to all other tests that will use this script
*/
(function (export) {
    export.devices = devices;
	export.browsers = browsers
    export.TEST_USER = TEST_USER;
	export.domains = domains
})(this);