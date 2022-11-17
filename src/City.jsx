import React from 'react'
var tarih = new Date();
var yil = tarih.getFullYear();
var ay = tarih.getMonth();
var gun = tarih.getDay();
var saat = tarih.getHours();
var dakika = tarih.getMinutes();
const City = ({ city }) => {
  return (
    <div>
      <h1>{gun + "/" + ay + "/" + yil + " " + saat + ":" + dakika}</h1>
      <h1>ŞEHİR: {city?.name}</h1>
      <h1>SICAKLIK: {city?.main.temp}</h1>
    </div>
  )
}

export default City