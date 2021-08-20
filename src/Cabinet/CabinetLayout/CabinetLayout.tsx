import { PageDataProvider} from "../../../metronic/_metronic/layout/core";
import {AsideDefault} from "../../../metronic/_metronic/layout/components/aside/AsideDefault";
import {HeaderWrapper} from "../../../metronic/_metronic/layout/components/header/HeaderWrapper";
import {Content} from "../../../metronic/_metronic/layout/components/Content";
import {ActivityDrawer, DrawerMessenger, InviteUsers, Main, UpgradePlan} from "../../../metronic/_metronic/partials";
import {ScrollTop} from "../../../metronic/_metronic/layout/components/ScrollTop";
import {FC, useEffect} from "react";
import dynamic from "next/dynamic";



const LayoutProvider = dynamic(
  () => import('../../../metronic/_metronic/layout/core/LayoutProvider').then((component) => component.LayoutProvider),
  {ssr: false}
)


function MasterInit() {
  return null;
}

const CabinetLayout: FC = ({children}) => {
  useEffect(() => {
    typeof document !== 'undefined' ? require('bootstrap') : null
  }, [])
  if(typeof window !== 'undefined'){
    return (
      <LayoutProvider>
        <PageDataProvider>
          <div className='page d-flex flex-row flex-column-fluid'>
            <AsideDefault />
            <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
              <HeaderWrapper />

              <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>
                {/*<Toolbar />*/}
                <div className='post d-flex flex-column-fluid' id='kt_post'>
                  <Content>{children}</Content>
                </div>
              </div>
              {/*<Footer />*/}
            </div>
          </div>

          {/* begin:: Drawers */}
          <ActivityDrawer />
          {/*<ExploreMain />*/}
          <DrawerMessenger />
          {/* end:: Drawers */}

          {/* begin:: Modals */}
          <Main />
          <InviteUsers />
          <UpgradePlan />
          {/* end:: Modals */}

          <MasterInit />
          <ScrollTop />
        </PageDataProvider>
      </LayoutProvider>
    )
  }
    return (
        <PageDataProvider>
          <div className='page d-flex flex-row flex-column-fluid'>
            <AsideDefault />
            <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
              <HeaderWrapper />

              <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>
                {/*<Toolbar />*/}
                <div className='post d-flex flex-column-fluid' id='kt_post'>
                  <Content>{children}</Content>
                </div>
              </div>
              {/*<Footer />*/}
            </div>
          </div>

          {/* begin:: Drawers */}
          <ActivityDrawer />
          {/*<ExploreMain />*/}
          <DrawerMessenger />
          {/* end:: Drawers */}

          {/* begin:: Modals */}
          <Main />
          <InviteUsers />
          <UpgradePlan />
          {/* end:: Modals */}

          <MasterInit />
          <ScrollTop />
        </PageDataProvider>
    )

}

export default CabinetLayout
