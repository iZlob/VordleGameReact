import "./FieldCell.css"

/**
 *
 * @param char {string}
 * @param color {string}
 * @returns {JSX.Element}
 * @constructor
 */
function FieldCell({char, color}) {
    return (
        <td className="FieldCell" style={{backgroundColor:color}}>{char}</td>
    )
}

export default FieldCell;