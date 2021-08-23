/* eslint-disable react/jsx-no-target-blank */
import { useRouter } from 'next/router'
import React from 'react'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const {pathname} = useRouter()
 if(pathname.includes('cabinet')) {
   return (
     <>
       <AsideMenuItem
         to='/cabinet/dashboard'
         icon='/image/icons/dashboard.svg'
         title="Dashboard"
         fontIcon='bi-app-indicator'
       />
       <AsideMenuItem
         to='/cabinet/goals'
         icon='/image/icons/Goals.svg'
         title="Goals"
         fontIcon='bi-app-indicator'
       />
       <AsideMenuItem
         to='/cabinet/realtime'
         icon='/image/icons/Realtime.svg'
         title="Realtime"
         fontIcon='bi-app-indicator'
       />
       <AsideMenuItem
         to='/cabinet/visitors'
         icon='/image/icons/Visitors.svg'
         title="Visitors"
         fontIcon='bi-app-indicator'
       />
       <AsideMenuItem
         to='/cabinet/heatmaps'
         icon='/image/icons/Heatmaps.svg'
         title="Heatmaps"
         fontIcon='bi-app-indicator'
       />
       <AsideMenuItem
         to='/cabinet/replays'
         icon='/image/icons/Replays.svg'
         title="Replays"
         fontIcon='bi-app-indicator'
       />
       <AsideMenuItem
         to='/cabinet/websites'
         icon='/image/icons/Websites.svg'
         title="Websites"
         fontIcon='bi-app-indicator'
       />
       <AsideMenuItem
         to='/cabinet/help'
         icon='/image/icons/Help.svg'
         title="Help"
         fontIcon='bi-app-indicator'
       />
     </>
   ) }else {
     return (
       <>
         <AsideMenuItem
           to='/admin/dashboard'
           icon='/image/admin/icons/dashboard.svg'
           title="Dashboard"
           fontIcon='bi-app-indicator'
         />
         <AsideMenuItem
           to='/admin/users'
           icon='/image/admin/icons/users.svg'
           title="Users"
           fontIcon='bi-app-indicator'
         />
         <AsideMenuItem
           to='/users-logs'
           icon='/image/admin/icons/usersLog.svg'
           title="Users logs"
           fontIcon='bi-app-indicator'
         />
         <AsideMenuItem
           to='/websites'
           icon='/image/admin/icons/websites.svg'
           title="Websites"
           fontIcon='bi-app-indicator'
         />
         <AsideMenuItem
           to='/pages'
           icon='/image/admin/icons/pages.svg'
           title="Pages"
           fontIcon='bi-app-indicator'
         />
         <AsideMenuItem
           to='/plans'
           icon='/image/admin/icons/plans.svg'
           title="Plans"
           fontIcon='bi-app-indicator'
         />
         <AsideMenuItem
           to='/statistics'
           icon='/image/admin/icons/statistics.svg'
           title="Statistics"
           fontIcon='bi-app-indicator'
         />
         <AsideMenuItem
           to='/api-docs'
           icon='/image/admin/icons/apiDocs.svg'
           title="API docs"
           fontIcon='bi-app-indicator'
         />
         <AsideMenuItem
           to='/plugins'
           icon='/image/admin/icons/plugins.svg'
           title="Plugins"
           fontIcon='bi-app-indicator'
         />
         <AsideMenuItem
           to='/websites-settings'
           icon='/image/admin/icons/websitesSettings.svg'
           title="Website Settings"
           fontIcon='bi-app-indicator'
         />
         <div className="menu-content">
           <div className="separator mx-1 my-4"></div>
         </div>
         <AsideMenuItem
           to='/visit-website'
           icon='/image/admin/icons/visitWebsite.svg'
           title="Visit Website"
           fontIcon='bi-app-indicator'
         />
           {/*TODO Сделать под пользователя*/}
         <AsideMenuItem
           to='/websites-settings'
           icon='/image/admin/avatar.png'
           title="Website Settings"
           fontIcon='bi-app-indicator'
         />
       </>
     )
   }
}
