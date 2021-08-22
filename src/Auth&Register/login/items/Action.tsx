import React, {FC} from 'react';

interface ActionInterface {
  loading: boolean
}

const Action: FC<ActionInterface> = ({loading}) => {
  return (
    <div>
      {/* begin::Action */}
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
        >
          {!loading && <span className='indicator-label'>Continue</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>

      </div>
      {/* end::Action */}
    </div>
  );
};

export default Action;