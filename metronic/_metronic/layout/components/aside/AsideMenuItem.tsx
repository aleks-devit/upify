import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import {useLocation} from 'react-router'
import {checkIsActive, KTSVG} from '../../../helpers'
import {useLayout} from '../../core'
import {useRouter} from "next/router";

type Props = {
  to: string
  title: string
  icon?: string
  fontIcon?: string
  hasBullet?: boolean
}

const AsideMenuItem: React.FC<Props> = ({
  children,
  to,
  title,
  icon,
  fontIcon,
  hasBullet = false,
}) => {
  const {pathname} = useRouter()
  const isActive = checkIsActive(pathname, to)
  const {config} = useLayout()
  const {aside} = config

  return (
    <div className='menu-item'>
      <Link href={to ? to : '/'}>
        <a className={clsx('menu-link without-sub', {active: isActive})}>
          {hasBullet && (
            <span className='menu-bullet'>
            <span className='bullet bullet-dot'></span>
          </span>
          )}
          {icon && aside.menuIcon === 'svg' && (
            <span className='menu-icon'>
            <KTSVG path={icon} className='svg-icon-1' />
          </span>
          )}
          {fontIcon && aside.menuIcon === 'font' && <i className={clsx('bi fs-3', fontIcon)}></i>}
          <span className='menu-title'>{title}</span>
        </a>
      </Link>
      {children}
    </div>
  )
}

export {AsideMenuItem}
