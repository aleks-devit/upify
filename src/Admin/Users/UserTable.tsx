import React, {FC} from 'react';
import {KTSVG} from "../../../metronic/_metronic/helpers";
import {UserInterfaces} from "./interfaces";
import User from './User';

interface UserTableInterface {
  users: [UserInterfaces]
}

const UserTable: FC<UserTableInterface> = ({users}) => {
  return (
    <div>
      <div className={`card `}>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bolder fs-3 mb-1'>Members Statistics</span>
            <span className='text-muted mt-1 fw-bold fs-7'>Over 500 members</span>
          </h3>
          <div
            className='card-toolbar'
            data-bs-toggle='tooltip'
            data-bs-placement='top'
            data-bs-trigger='hover'
            title='Click to add a user'
          >
            <a
              href='#'
              className='btn btn-sm btn-light-primary'
              // data-bs-toggle='modal'
              // data-bs-target='#kt_modal_invite_friends'
            >
              <KTSVG path='media/icons/duotone/Communication/Add-user.svg' className='svg-icon-3' />
              Create User
            </a>
          </div>
        </div>
        {/* end::Header */}
        {/* begin::Body */}
        <div className='card-body py-3'>
          {/* begin::Table container */}
          <div className='table-responsive'>
            {/* begin::Table */}
            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
              {/* begin::Table head */}
              <thead>
              <tr className='fw-bolder text-muted'>

                <th className='min-w-150px'>User</th>
                <th className='min-w-140px'>Status</th>
                <th className='min-w-120px'>Plan</th>
                <th className='min-w-100px'>Details</th>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  </div>
                </th>
              </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
              {users && users.map((user, id) => <User key={id} user={user}/>)}
              <User  user={null}/>
              </tbody>
              {/* end::Table body */}
            </table>
            {/* end::Table */}
          </div>
          {/* end::Table container */}
        </div>
        {/* begin::Body */}
      </div>
    </div>
  );
};

export default UserTable;