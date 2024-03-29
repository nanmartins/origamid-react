import React from 'react'

const useForm = (type) => {

  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(null)

  const types = {
    cep: {
      regex: /^\d{5}-?\d{3}$/,
      mensage: 'CEP inválido.'
    },
    email: {
      regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Email inválido.'
    }
  }

  const validate = ((value) => {
    if(type === false) return true

    if(value.length === 0) {
      setError('Preencha um valor.')
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  })

  const onChange = (({target}) => {
    if(error) validate(target.value)
    setValue(target.value)
  })

  return {
    value,
    setValue,
    onChange,
    error,
    onBlur: () => validate(value),
    validate: () => validate(value),
  }
}

export default useForm
