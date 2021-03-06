/**
 * Memory Usage sensor
 *
 * (c) 2014 James Hall
 */

var os = require('os-utils');

var plugin = {
	/**
	 * This appears in the title of the graph
	 */
	title: 'Memory Usage',
	/**
	 * The type of sensor
	 * @type {String}
	 */
	type: 'chart',
	/**
	 * The default interval time in ms that this plugin should be polled.
	 * More costly benchmarks should be polled less frequently.
	 */
	interval: 200,

	currentValue: 0,
	/**
	 * Grab the current value, from 0-100
	 */
	poll: function() {
		plugin.currentValue = (100 - Math.floor(os.freememPercentage() * 100));
	}
};

module.exports = exports = plugin;