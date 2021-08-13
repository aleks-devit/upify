import React, {FC} from 'react';
import {AlertRow, CheckpointAlert} from './styles';

interface AlertInterface {
  text: string;
  setAlert: (item: string) => void;
}

const Alert: FC<AlertInterface> = ({text, setAlert}) => {
  return (
    text && (
  <CheckpointAlert>
    <AlertRow>
      <svg className="svg-inline--fa fa-times-circle fa-w-16 fa-fw text-danger mr-1" aria-hidden="true"
           focusable="false" data-prefix="fa" data-icon="times-circle" role="img"
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
        <path fill="currentColor"
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
      </svg>
      <div>
        {text}
      </div>
    </AlertRow>
    <div onClick={() => setAlert('')}>
      <svg className="svg-inline--fa fa-times fa-w-11 fa-fw fa-sm text-danger" aria-hidden="true"
           focusable="false" data-prefix="fa" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 352 512" data-fa-i2svg="">
        <path fill="#E35D6A"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
      </svg>
    </div>
  </CheckpointAlert>
    )
  );
};

export default Alert;


