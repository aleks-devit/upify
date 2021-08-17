import { HeaderWrapper } from 'metronic/_metronic/layout/components/header/HeaderWrapper';
import { Toolbar } from 'metronic_them_2/src/_metronic/layout/components/toolbar/Toolbar';
import { PageDataProvider, useLayout } from 'metronic_them_2/src/_metronic/layout/core';
import React from 'react';
import {classes} from "istanbul-lib-coverage";
import { AsideDefault } from 'metronic_them_2/src/_metronic/layout/components/aside/AsideDefault';
import { Content } from 'metronic_them_2/src/_metronic/layout/components/Content';
import { Footer } from 'metronic_them_2/src/_metronic/layout/components/Footer';
import { ActivityDrawer } from 'metronic_them_2/src/_metronic/partials/layout/activity-drawer/ActivityDrawer';
import { ExploreMain } from 'metronic_them_2/src/_metronic/partials/layout/explore/ExploreMain';
import { DrawerMessenger } from 'metronic_them_2/src/_metronic/partials/layout/drawer-messenger/DrawerMessenger';
import { Main } from 'metronic_them_2/src/_metronic/partials/modals/create-app/Main';
import { InviteUsers } from 'metronic_them_2/src/_metronic/partials/modals/invite-users/InviteUsers';
import { UpgradePlan } from 'metronic_them_2/src/_metronic/partials/modals/upgrade-plan/UpgradePlan';
import { MasterInit } from 'metronic_them_2/src/_metronic/layout/MasterInit';
import { ScrollTop } from 'metronic_them_2/src/_metronic/layout/components/ScrollTop';
import clsx from 'clsx'

const AdminLayout: React.FC = ({children}) => {
  const {classes} = useLayout()

  return (
    <div>
      <PageDataProvider>
        <div className='page d-flex flex-row flex-column-fluid'>
          <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
            <HeaderWrapper />

            <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>
              <Toolbar />
              <div
                className={clsx(
                  'd-flex flex-column-fluid align-items-start',
                  classes.contentContainer.join(' ')
                )}
                id='kt_post'
              >
                <AsideDefault />
                <Content>{children}</Content>
              </div>
            </div>
            <Footer />
          </div>
        </div>

        {/* begin:: Drawers */}
        <ActivityDrawer />
        <ExploreMain />
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
    </div>
  );
};

export default AdminLayout;


