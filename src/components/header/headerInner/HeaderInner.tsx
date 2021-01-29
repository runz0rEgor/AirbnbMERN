import React from "react"
import { HeaderLink } from "../headerLink/HeaderLink"
import { HeaderLogo } from "../headerLogo/HeaderLogo"
import { Menu } from "../menu/Menu"
import './headerInner.scss'

export const HeaderInner = () => {
  return (
    <div className='header__inner'>
      <HeaderLogo />
      <div className="header__about">
        <HeaderLink title={'Жилье'}/>
        <HeaderLink title={'Впечатления'}/>
        <HeaderLink title={'Онлайн-Впечатления'}/>
      </div>

      <div className="header__nav">
        <Menu />
      </div>
  </div>
  )
}