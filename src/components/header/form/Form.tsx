import React from "react"
import { FormGuest } from "./formGuest/FormGuest"
import { FormLocation } from "./formLocation/FormLocation"
import { FormTime } from "./formTime/FormTime"

export const Form = () => {
  return (
    <form className="form"> 
      <input className="form__input media" type="text" placeholder="Куда едете?" />
      <div className="form__wrapper">
        <FormLocation title={'Местоположение'}/>
        <FormTime title={'Прибытие'}/>
        <FormGuest title={'Колличество гостей'}/>
      </div>
    </form>
  )
}