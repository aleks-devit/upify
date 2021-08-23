export interface SetterInterface{
  (value: string): void;
}

const ChangeValue = (event: React.ChangeEvent<HTMLInputElement>, setter: SetterInterface): void => {
  setter(event.target.value)
}

export default ChangeValue