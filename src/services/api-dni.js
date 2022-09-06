import axios from "axios";
//import { API_DNI_URL, www.softwarelion.xyz/api/reniec/reniec-dni} from "@env";

const headers = {
  "Content-Type": "application/json",
};

export const exists_DNI = (json_data) => {
  return axios
    .post(
      `${"https://www.softwarelion.xyz/api/reniec/reniec-dni"}`,
      json_data,
      {
        headers: headers,
      }
    )
    .then((response) => {
      const { data } = response;
      return data;
    });
};
