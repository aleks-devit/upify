import React from 'react'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {MegaMenu} from './MegaMenu'
import {useRouter} from "next/router";

export function MenuInner() {

  return (
    <>
      <MenuItem title={'Logout'} to='/logout' />
    </>
  )
}

