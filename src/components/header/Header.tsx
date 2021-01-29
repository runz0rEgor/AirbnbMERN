import React from "react"
import { HeaderForm } from "./headerForm/HeaderForm"
import { HeaderInner } from "./headerInner/HeaderInner"
import { HeaderTitle } from "./headerTitle/HeaderTitle"
import './header.scss';

export const Header = () => {
  const text = {
    title: 'Удивительное рядом',
    subTitle: 'Найдите жилье поблизости'
  }
  return (
    <header className='header'>
      <div className='container'>
       <HeaderInner />
       <HeaderForm />
       <HeaderTitle text={text}/>
      </div>
    </header>
  )
}