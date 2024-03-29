/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import React, {useEffect} from 'react'
import Link from 'next/link'
import {MenuComponent} from '../../../assets/ts/components'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {useLayout} from '../../core'
import {Header} from './Header'
import {DefaultTitle} from './page-title/DefaultTitle'
import {Topbar} from './Topbar'
import {useRouter} from "next/router";

export function HeaderWrapper() {
  const {pathname} = useRouter()
  const {config, classes, attributes} = useLayout()
  const {header, aside} = config

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [pathname])

  return (
    <div
      id='kt_header'
      className={clsx('header', classes.header.join(' '), 'align-items-stretch')}
      {...attributes.headerMenu}
    >
      <div
        className={clsx(
          classes.headerContainer.join(' '),
          'd-flex align-items-stretch justify-content-between'
        )}
      >
        {/* begin::Aside mobile toggle */}
        {aside.display && (
          <div className='d-flex align-items-center d-lg-none ms-n3 me-1' title='Show aside menu'>
            <div
              className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
              id='kt_aside_mobile_toggle'
            >

              <KTSVG path='/image/icons/burger.svg' className='svg-icon-2x mt-1' />
            </div>
          </div>
        )}
        {/* end::Aside mobile toggle */}
        {/* begin::Logo */}
        {!aside.display && (
          <div className='d-flex align-items-center flex-grow-1 flex-lg-grow-0'>
            <Link href='/cabinet/dashboard' >
              <a className='d-lg-none'>
                <img alt='Logo' src={toAbsoluteUrl('/media/logos/logo-3.svg')} className='h-30px' />
              </a>
            </Link>
          </div>
        )}
        {/* end::Logo */}

        {aside.display && (
          <div className='d-flex align-items-center flex-grow-1 flex-lg-grow-0'>
            <Link href='/' >
              <a className='d-lg-none'>
                <img alt='Logo' src={toAbsoluteUrl('/media/logos/logo-3.svg')} className='h-30px' />
              </a>
            </Link>
          </div>
        )}

        {/* begin::Wrapper */}
        <div className='d-flex align-items-stretch justify-content-between flex-row-reverse flex-lg-grow-1'>
          {/* begin::Navbar */}
          {header.left === 'menu' && (
            <div className='d-flex align-items-stretch' id='kt_header_nav'>
              <Header />
            </div>
          )}

          {header.left === 'page-title' && (
            <div className='d-flex align-items-center' id='kt_header_nav'>
              <DefaultTitle />
            </div>
          )}

          <div className='d-flex align-items-stretch flex-shrink-0'>
            {/*TODO ТОПБАР*/}
            {/*<Topbar />*/}
          </div>
        </div>
        {/* end::Wrapper */}
      </div>
    </div>
  )
}
