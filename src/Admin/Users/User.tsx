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
              {user.name}
            </a>
            <span className='text-muted fw-bold text-muted d-block fs-7'>
                       {user.email}
                      </span>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-light-success fs-7 fw-bolder">Active</span>
      </td>
      <td className='text-end'>
        <div className='d-flex flex-column w-100 me-2'>
          {user.plan_settings}
        </div>
      </td>
      <td>
        <div className='d-flex justify-content-end flex-shrink-0'>
          <span>
            {user.date}
          </span>
          <span>
            {user.last_activity}
          </span>
          <span>
            {user.total_logins}
          </span>

            <span>
              {user.country}
            </span>
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