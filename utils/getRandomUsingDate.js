const getRandomUsingDate = () => {
	const currentTimestamp = Math.floor(Date.now() / 1000)
	let unixTimeInDays = Math.floor(currentTimestamp / (24 * 60 * 60))
	const randomSeed = 726236523627
	const randomValue = unixTimeInDays * randomSeed

	return randomValue
}

module.exports = getRandomUsingDate
