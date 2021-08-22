import jwt_decode from "jwt-decode";

interface IsAdminInterface {
  is_admin: boolean
}

export const checkAdmin = (token: string | null ): boolean => {
  if (typeof token === "string"){
    const {is_admin}: IsAdminInterface  = jwt_decode(token)
    return is_admin
  }
  return false
}