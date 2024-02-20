/* eslint-disable react/prop-types */
export default function Input({labelName, type, inputName, value, onChange}) {
    return (
        <label>
            <span>{labelName}</span>
            <input 
                type={type}
                name={inputName} 
                value={value} 
                onChange={onChange}
            />
        </label>
    )
}