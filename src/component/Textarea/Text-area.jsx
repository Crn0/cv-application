/* eslint-disable react/prop-types */
export default function TextArea({labelName, textAreaName, value, onChange}) {
    return (
        <label >
            <span>{labelName}</span>
            <textarea name={textAreaName} value={value} onChange={onChange} cols="30" rows="10"></textarea>
        </label>
    )
}