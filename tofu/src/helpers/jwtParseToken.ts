import { jwtDecode } from "jwt-decode";
import { getCookie } from "./getCookie";
import { UserData } from "../store/slices/userSlice";

enum JwtClaims {
    userName = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name",
}

type jwtTokenClaims = {
  [value in JwtClaims]: number | string;
};

export const jwtParseToken = () => {
  const token = getCookie("API_TOKEN") as string;

  const userData: jwtTokenClaims = jwtDecode(token);

  const mappedUserData: UserData = {
    userName: userData[JwtClaims.userName] as string,
  };

  return mappedUserData;
};