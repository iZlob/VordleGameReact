import FieldRow from "./FieldRow";
import "./Field.css";

/**
 *
 * @param wordArray {Array<string>}
 * @param secretWord {string}
 * @returns {JSX.Element}
 * @constructor
 */
function Field({wordArray, secretWord}) {
    return (
      <div className="Field">
          <table>
              <FieldRow word={wordArray[0] ?? ""} secretWord={secretWord}/>
              <FieldRow word={wordArray[1] ?? ""} secretWord={secretWord}/>
              <FieldRow word={wordArray[2] ?? ""} secretWord={secretWord}/>
              <FieldRow word={wordArray[3] ?? ""} secretWord={secretWord}/>
              <FieldRow word={wordArray[4] ?? ""} secretWord={secretWord}/>
              <FieldRow word={wordArray[5] ?? ""} secretWord={secretWord}/>
          </table>
      </div>
    );
}

export default Field;