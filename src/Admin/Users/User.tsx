import React, {FC} from 'react';
import {KTSVG, toAbsoluteUrl} from "../../../metronic/_metronic/helpers";
import {UserInterfaces} from "./interfaces";

interface UserInterface {
  user: UserInterfaces
}

const User: FC<UserInterface> = ({user}) => {
  return (
    <tr>
      <td>
        <div className='d-flex align-items-center'>
          <div className='symbol symbol-45px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/150-11.jpg')} alt='' />
          </div>
          <div className='d-flex justify-content-start flex-column'>
            <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
              {user?.name} Hero
            </a>
            <span className='text-muted fw-bold text-muted d-block fs-7'>
                       {user?.email} amdmin@admkin.com
                      </span>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-light-success fs-7 fw-bolder">Active</span>
      </td>
      <td >
        <div className='d-flex flex-column w-100 me-2' data-bs-toggle="tooltip" data-bs-placement="top" title="Plan expitarion date">
          {user?.plan_settings}PREMIUM
          <div>
            2021-09-09 09:10:32
          </div>
        </div>
      </td>
      <td>
        <div className='d-flex flex-shrink-0'>
          <div className="me-3" data-bs-toggle="tooltip" data-bs-placement="top" title=" Registration date: 27-06-2021 10:10:10">
            {user?.date}
              Registr
          </div>
          <div className="me-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Last activity: 27-06-2021 10:10:10">
            {user?.last_activity}
              Last
          </div>
          <div className="me-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Total logins: 0">
            {user?.total_logins}
            <div>
             Total
            </div>
          </div>
            <div className="me-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Ukraine">
              {user?.country}
              Ukr
            </div>
        </div>
      </td>
      <td>
        <div>
          ...
        </div>
      </td>
    </tr>
  );
};

export default User;