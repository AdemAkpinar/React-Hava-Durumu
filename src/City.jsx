import React from 'react'

const City = ({city}) => {
  return (
    <div>
      <h1>ŞEHİR: {city.name}</h1>
      <h1>SICAKLIK: {city.main.temp}</h1>
    </div>
  )
}

export default City