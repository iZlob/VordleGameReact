
let word = "";
let onWordEntered = x => {}

/**
 * @param e {ChangeEvent<HTMLInputElement>}
 * @function
 */
function OnInputChanged(e){
    word = e.target.value
}

/**
 *
 * @param e {KeyboardEvent<HTMLInputElement>}
 * @function
 */
function OnKeyDown(e) {
    if (e.key === "Enter") {
        if (word.length !== 5){
            alert("Длина слова должна быть 5 смволов!!!")
        } else {
            onWordEntered(word);
        }
        e.target.value = "";
    }
}

/**
 *
 * @param onWordEnteredHandler {function(word:string)}
 * @returns {JSX.Element}
 * @constructor
 */
function WordInputer({onWordEnteredHandler}) {
    onWordEntered = onWordEnteredHandler;
    return (
        <div>
            <span>Введите слово</span>
            <input type="text" onChange={OnInputChanged} onKeyDown={OnKeyDown} />
        </div>
    )
}

export default WordInputer;