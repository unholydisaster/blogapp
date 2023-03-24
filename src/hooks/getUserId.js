import Cookies from "js-cookie"

export const useGetId=()=>{
    return Cookies.get("userID")
}