const { cf_base_url, cf_api_key } = require('../api_config.json');
const { request } = require('undici');
const logger = require('../../logger');

module.exports = async (query, maxAttempts) => {
	if (maxAttempts === 0) {
		logger.warn('Modrunner was unable to establish a connection to CurseForge\'s API.\nRequest type: Search Mods');
		return null;
	}

	try {
		const responseData = await request(`${cf_base_url}/mods/search?gameId=432&searchFilter=${new URLSearchParams({ query })}`, {
			headers: {
				'x-api-key': cf_api_key,
			},
		});
		return responseData;
	} catch (error) {
		logger.info(`An ${error.name} occured while performing an API request to CurseForge.`);
		maxAttempts--;
		await this(query, maxAttempts);
	}
};