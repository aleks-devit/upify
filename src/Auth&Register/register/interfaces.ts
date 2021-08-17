interface SubValidationInterface {
  status: boolean
  text: string[]
}

export interface ValidationInterfaces {
  name: SubValidationInterface
  email: SubValidationInterface
  password: SubValidationInterface
}