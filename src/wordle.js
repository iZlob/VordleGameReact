import Field from "./Field";
import WordInputer from "./WordInputer";

import React, { useState } from "react";
import Words from "./Words";
function Wordle() {

    let [wordArray, setWordArray] = useState(["", "", "", "", "", ""])
    let [secretWord, setSecretWord] = useState(Words.RandomWord);
    let [turnNo, setTurnNo] = useState(1);
    console.log(wordArray)
    return [
        <WordInputer onWordEnteredHandler={x => {
            if(!Words._words.includes(x)){
                alert("mistake");
                return;
            }
            let word0 = wordArray[0];
            let word1 = wordArray[1];
            let word2 = wordArray[2];
            let word3 = wordArray[3];
            let word4 = wordArray[4];
            let words  = [x, word0, word1, word2, word3, word4];
            setWordArray(words);
            setTurnNo(turnNo + 1);
            if(turnNo === 6) {
                alert("You've lost!!! It was word -" + secretWord + "!!!");
                setSecretWord(Words.RandomWord);
                setTurnNo(1);
                setWordArray("", "", "", "", "", "");
            }else{
                setWordArray(words);
                setTurnNo(turnNo + 1);
            }
        }} />,
        <Field wordArray={wordArray} secretWord={secretWord}/>
    ]
}

export default Wordle;