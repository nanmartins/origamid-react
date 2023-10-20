import React from 'react'

const Radio = ({options, value, setValue, ...props }) => {
  return (
    <>
      {options.map(option => (
        <div key={option}>
          <label>
            <input
              type="radio"
              value={option}
              checked={value === option}
              onChange={({target}) => setValue(target.value)}
              {...props}
            />
            {option}
          </label>
        </div>
      ))}
    </>
  )
}

export default Radio
