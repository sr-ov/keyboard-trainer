import { ENDLINE, Keys, LINE_HEIGHT, TEXT } from './constants'
import { generateKeysHash, isUpperLetter, normalizeText } from './utils'
import * as $dom from './dom'

const normalizedText = normalizeText(TEXT)
const keysHash = generateKeysHash($dom.keys)

const state = {
	step: 0,
	currentRow: 0,
}

const wrapText = (text: string, end: number) =>
	`<span class="checked">${text.slice(0, end)}</span>${text.slice(end)}`

const renderText = (text: string) => {
	$dom.text.innerHTML = ''
	$dom.text.insertAdjacentHTML('afterbegin', text)
}

const setText = () => {
	renderText(wrapText(normalizedText, state.step))
}

setText()

const clearInput = () => {
	$dom.input.value = ''
}

const translateText = () => {
	state.currentRow += 1
	$dom.text.style.transform = `translateY(-${LINE_HEIGHT * state.currentRow}px)`
}

const updateText = () => {
	clearInput()
	translateText()
	setText()
}

const getKey = (letter: string) =>
	keysHash[letter.toUpperCase()] ?? keysHash[letter]

const toggleStateKey = (state: 'active' | 'inactive', letter: string) => {
	const method = state === 'active' ? 'add' : 'remove'
	const isEnter = letter === ENDLINE
	getKey(isEnter ? Keys.ENTER : letter)?.classList[method]('active')

	if (!isUpperLetter(letter)) return

	keysHash.ShiftLeft.classList[method]('active')
	keysHash.ShiftRight.classList[method]('active')
}

const makeKey = {
	active(letter: string) {
		toggleStateKey('active', letter)
	},
	inactive(letter: string) {
		toggleStateKey('inactive', letter)
	},
	error(letter: string) {
		const key = getKey(letter)
		if (!key) return

		key.classList.add('error')
		const timer = setTimeout(() => {
			key.classList.remove('error')
			clearTimeout(timer)
		}, 300)
	},
}

makeKey.active(normalizedText[0])

const onKeyDown = (e: KeyboardEvent) => {
	const сondition =
		normalizedText[state.step] === ENDLINE
			? e.key !== Keys.ENTER
			: e.key !== normalizedText[state.step]

	if (сondition) {
		makeKey.error(e.key)
		e.preventDefault()
		return
	}

	makeKey.inactive(normalizedText[state.step])
	state.step += 1
	makeKey.active(normalizedText[state.step])

	if (e.key === Keys.ENTER) {
		updateText()
	} else {
		setText()
	}
}

$dom.input.addEventListener('keydown', onKeyDown)
