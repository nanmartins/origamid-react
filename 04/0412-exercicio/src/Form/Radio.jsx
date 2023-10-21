import React from 'react'

const Radio = (({pergunta, options, value, onChange, id, active}) => {

  if(active === false) return null
  return (
    <fieldset
      style={{
        padding: '40px',
        marginBottom: '20px',
        border: '1px solid #ccc'
      }}
    >
      <legend style={{ fontWeight: 'bold', fontSize: '23px', fontFamily: 'Arial'}}>{pergunta}</legend>
      {options.map((option) => (
        <div key={option} style={{ padding: '8px 0'}}>
          <label style={{ marginBottom: '1rem', fontFamily: 'monospace' }}>
            <input
              type="radio"
              id={id}
              checked={value === option}
              value={option}
              onChange={onChange}
            />
            <span style={{ margin: '0 4px', fontSize: '16px'}}>{option}</span>
          </label>
        </div>
      ))}
    </fieldset>
  )
})

export default Radio
