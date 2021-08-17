import React, {useEffect} from 'react'
import clsx from 'clsx'
import {useLayout} from '../core'
import {DrawerComponent} from '../../assets/ts/components'
import {useRouter} from "next/router";

const Content: React.FC = ({children}) => {
  const {classes} = useLayout()
  const location = useRouter()
  useEffect(() => {
    DrawerComponent.hideAll()
  }, [location])

  return (
    <div id='kt_content_container' className={clsx(classes.contentContainer.join(' '))}>
      {children}
    </div>
  )
}

export {Content}
