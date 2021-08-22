import React, {useEffect, useState} from 'react';
import clsx from "clsx";
import UserTable from "./UserTable";
import {useGetAdminUsers, useGetMerchantUsers} from 'apollo/actions';

const UsersWrapper = () => {
  const [tab, setTab] = useState('Admins')
  const [list, setList] = useState()
  const {data: {getAdminUsers} = {}} = useGetAdminUsers()
  const {data: {getMerchantUsers} = {}} = useGetMerchantUsers()


  return (
    <div>
      <div className='card card-custom'>
        <div className='card-header card-header-stretch overflow-auto'>
          <ul
            className='nav nav-stretch nav-line-tabs fw-bold border-transparent flex-nowrap'
            role='tablist'
          >
            <li className='nav-item btn'>
              <a
                className={clsx(`nav-link`, {active: tab === 'Admins'})}
                onClick={() => setTab('Admins')}
                role='tab'
              >
                Admins
              </a>
            </li>
            <li className='nav-item btn'>
              <a
                className={clsx(`nav-link`, {active: tab === 'Merchants'})}
                onClick={() => setTab('Merchants')}
                role='tab'
              >
                Merchants
              </a>
            </li>
          </ul>
        </div>
        {/* end::Header */}

        {/* begin::Form */}
        <form className='form'>
          {/* begin::Body */}
          <div className='card-body'>
            <div className='tab-content pt-3'>
              <div className={clsx('tab-pane', {active: tab === 'Admins'})}>
                <UserTable users={getAdminUsers}/>
              </div>

              <div className={clsx('tab-pane', {active: tab === 'Merchants'})}>
                <UserTable users={getMerchantUsers}/>
              </div>

            </div>
          </div>
          {/* end::Body */}

        </form>
        {/* end::Form */}
      </div>
    </div>
  );
};

export default UsersWrapper;