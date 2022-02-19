/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "nl",
	locale: "nl-NL",
	logLevel: ["INFO", "LOG", "WARN", "ERROR", "DEBUG"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_left",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Nederland",
				locationID: "2743492", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "873245b97a9b4f5855589e08db2fa2b5"
			}
		},
		{
			module: "weather",
			position: "top_left",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Nederland",
				locationID: "2743492", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "873245b97a9b4f5855589e08db2fa2b5"
			}
		},
		{
			module: "calendar",
			header: "Agenda Lars",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://p65-caldav.icloud.com/published/2/MTg2NzgyNjk0MjE4Njc4Mk5a4_0s9ShlVYtjPZjhvhim_FcSnewuat6sWjwHaHCzutpby2WRS4Cwr4JdzYojFllWdyQ7py1-MiwVvx70nC0"
					}
				]
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "NU.nl",
						url: "https://www.nu.nl/rss/Algemeen"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
           		module: 'MMM-CoinMarketCap',
            	position: "top_left",
           		config: {
              			apiKey: 'd542e896-c9ab-4f51-a4bf-c8c921277031',
       	 			currencies: ['bitcoin', 'ethereum', 'xrp'],
                		view: 'graphWithChanges',
                		conversion: 'USD',
        			// See below for more Configuration Options
            		}
		},
		{
		 	module: "MMM-NowPlayingOnSpotify",
		  	position: "top_right",
			header: "Huidige spotify nummer",
		  	config: {
		    		clientID: "53ce3dc3c4db4aacae03be99284b1efc",
		    		clientSecret: "c7569787608045399b784662d350c71a",
		    		accessToken: "BQBMnWQprlfzanZjNJe1I2vye-usQgett0QA5LLvWBq293skmBJHDKuD3x7i26mwYVTdXf5mfErSXx-910XnDKe1XxsD9i4Etm3FQHFYaLMbxsF6bHC1es1mjytHtlVfqI-PER5aCtYi_wL9tDbbEugAfn8",
		    		refreshToken: "AQA_0V7bxJf09Mt8nVBRF0L6ZI01cebNZWM6MiWqqLf3T3PKbw3un9OuE9laLMi-SXonv4Z7i7QJnGy1rpZhhnFc2AjlH6gBjhBwzFllqA5vKdpPqVYHKO8kGzLlmzCiDBc"
		  	}
		},
		{
			module: 'MMM-Carousel',
			config: {
				transitionInterval: 10000,
				ignoreModules: [],
				mode: 'positional',
				top_right: {enabled: true, ignoreModules: ['currentweather', 'clock']}
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
