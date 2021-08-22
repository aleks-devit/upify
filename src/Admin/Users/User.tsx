import React, {FC} from 'react';
import {KTSVG, toAbsoluteUrl} from "../../../metronic/_metronic/helpers";
import {UserInterfaces} from "./interfaces";

interface UserInterface {
  user: UserInterfaces
}

const User: FC<UserInterface> = ({user}) => {
  console.log(user)
  return (
    <tr>
      <td>
        <div className='d-flex align-items-center'>
          <div className='symbol symbol-45px me-5'>
            <img src={'/image/adminUsers/avatars/girl.jpg'} alt=''/>
          </div>
          <div className='d-flex justify-content-start flex-column'>
            <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
              {user?.name}
            </a>
            <span className='text-muted fw-bold text-muted d-block fs-7'>
                       {user?.email}
            </span>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-light-success fs-7 fw-bolder">Active</span>
      </td>
      <td>
        <div className='d-flex flex-column w-100 me-2 fs-5' data-bs-toggle="tooltip" data-bs-placement="top"
             title="Plan expitarion date">
          {user?.plan_settings} FREE
          <div className="fs-6 text-gray-500">
            2021-09-09 09:10:32
          </div>
        </div>
      </td>
      <td>
        <div className='d-flex flex-shrink-0'>
          <div className="me-3" data-bs-toggle="tooltip" data-bs-placement="top"
               title={"Registration date: " + user?.date}>
            <KTSVG path='/image/adminUsers/icons/startData.svg' className='svg-icon-2' />
          </div>
          <div className="me-3" data-bs-toggle="tooltip" data-bs-placement="top"
               title={"Last activity: " + user?.last_activity}>
            <KTSVG path='/image/adminUsers/icons/lastActive.svg' className='svg-icon-2' />
          </div>
          <div className="me-3" data-bs-toggle="tooltip" data-bs-placement="top"
               title={"Total logins: " + user?.total_logins}>
            <div>
              <KTSVG path='/image/adminUsers/icons/totalUsers.svg' className='svg-icon-2' />
            </div>
          </div>
          <div className="me-3" data-bs-toggle="tooltip" data-bs-placement="top" title={user?.country ? user?.country : 'Unknown'}>
            <KTSVG path='/image/adminUsers/icons/country.svg' className='svg-icon-2' />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default User;