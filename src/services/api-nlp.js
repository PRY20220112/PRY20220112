import axios from "axios";
//import { API_DNI_URL, www.softwarelion.xyz/api/reniec/reniec-dni} from "@env";

const headers = {
  "Content-Type": "application/json",
};
export default request_api = (json_data) => {
  return axios
    .post(
      `${"https://api-nlp-pry20220112.herokuapp.com/spacy/"}`,
      {
        texto: json_data,
      },
      headers
    )
    .then((response) => {
      const { data } = response;
      console.log(data);
      return data;
    });
};
