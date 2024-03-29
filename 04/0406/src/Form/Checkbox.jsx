import React from 'react'

const Checkbox = ({options, value, setValue}) => {

  function handleCheckbox({target}) {
    if(target.checked) {
      setValue([...value, target.value])
    } else {
      setValue(value.filter((itemValue) => itemValue !== target.value))
    }
  }

  return (
    <>
      {options.map(option => (
        <div  key={option}>
          <label>
            <input
              type="checkbox"
              value={option}
              checked={value.includes(option)}
              onChange={handleCheckbox}
            />
            {option}
          </label>
        </div>
      ))}
    </>
  )
}

export default Checkbox
