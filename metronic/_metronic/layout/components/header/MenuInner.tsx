import React from 'react'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {MegaMenu} from './MegaMenu'
import {useRouter} from "next/router";

export function MenuInner() {
  const {pathname} = useRouter()

  return (
    <>
      <MenuItem title={'Logout'} to='/login' />
      <MenuItem title={pathname.includes('cabinet') ? 'Admin' : 'Cabinet'} to={pathname.includes('cabinet') ? '/admin' : '/cabinet'} />
    </>
  )
}

