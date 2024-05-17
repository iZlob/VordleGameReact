import FieldCell from "./FieldCell";
import "./FieldRow.css"

/**
 *
 * @param {string} cellChar
 * @param {number} cellIndex
 * @param {string} secretWord
 * @function
 */
function GetCellColor(cellChar, cellIndex, secretWord){
    cellChar = cellChar ?? "";

    if(cellChar == ""){
        return "initial";
    }else if(secretWord[cellIndex] == cellChar){
        return "#0c770c";
    }else if(secretWord.toLowerCase().includes(cellChar.toLowerCase())){
        return "#00c4ff";
    }else{
        return "#da4431";
    }
}

/**
 *
 * @param word {string}
 * @param secretWord {string}
 * @returns {JSX.Element}
 * @constructor
 */
function FieldRow({word, secretWord}) {
    return (
        <tr>
            <FieldCell char={word[0] ?? ""} color={GetCellColor(word[0], 0, secretWord)}/>
            <FieldCell char={word[1] ?? ""} color={GetCellColor(word[1], 1, secretWord)}/>
            <FieldCell char={word[2] ?? ""} color={GetCellColor(word[2], 2, secretWord)}/>
            <FieldCell char={word[3] ?? ""} color={GetCellColor(word[3], 3, secretWord)}/>
            <FieldCell char={word[4] ?? ""} color={GetCellColor(word[4], 4, secretWord)}/>
        </tr>
    )
}

export default FieldRow;