const trimLast = (str: string) => str.slice(0, -1)

export const normalizeText = (text: string) => {
	const spaceOrEndLine = /\s|\n/g
	const maxLineLength = 110
	const arrWords = text.split(spaceOrEndLine)
	let сount = 1
	let normalizedText = ''

	arrWords.forEach((word) => {
		normalizedText += word + ' '

		if (normalizedText.length >= maxLineLength * сount) {
			normalizedText = trimLast(normalizedText) + '\n'
			сount += 1
		}
	})

	return trimLast(normalizedText)
}

export const generateKeysHash = (keys: HTMLDivElement[]) => {
	return keys.reduce<Record<string, HTMLDivElement>>(
		(acc, div) => ({ ...acc, [div.dataset.key!]: div }),
		{}
	)
}

export const isUpperLetter = (letter: string) => /^[A-Z]/.test(letter)
