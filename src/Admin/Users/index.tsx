import React, {useState} from 'react';
import clsx from "clsx";
import UserTable from "./UserTable";
import { useGetAdminUsers, useGetMerchantUsers } from 'apollo/actions';

const UsersWrapper = () => {
  const [tab, setTab] = useState('Header')
  const { data: { getAdminUsers } = {}, loadingAdmins, errorAdmins } = useGetAdminUsers();
  const { data: { getMerchantUsers } = {}, loadingUsers, errorUsers } = useGetMerchantUsers();
  console.log(loadingAdmins,
  loadingUsers)
  return (
    <div>
      <div className='card card-custom'>
        <div className='card-header card-header-stretch overflow-auto'>
          <ul
            className='nav nav-stretch nav-line-tabs fw-bold border-transparent flex-nowrap'
            role='tablist'
          >
            <li className='nav-item'>
              <a
                className={clsx(`nav-link`, {active: tab === 'Header'})}
                onClick={() => setTab('Header')}
                role='tab'
              >
                Admins
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link`, {active: tab === 'Toolbar'})}
                onClick={() => setTab('Toolbar')}
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
              <div className={clsx('tab-pane', {active: tab === 'Header'})}>
                <UserTable users={getAdminUsers}/>
              </div>

              <div className={clsx('tab-pane', {active: tab === 'Toolbar'})}>
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