import React, {useState} from 'react';
import SignIn from "./login";

const SignInContainer = () => {
  const [email, setEmail] = useState <string>('')
  const [password, setPassword] = useState <string>('')
  const [alert, setAlert] = useState<string>('')

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value)
  }

  const changePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setAlert('Your login combination is invalid!')
    console.log(email, password)
  }

  return (
      <SignIn changeEmail={changeEmail} changePassword={changePassword} onSubmit={onSubmit} alert={alert} setAlert={setAlert}/>
  );
};

export default SignInContainer;