import axios from "axios";
//import { API_DNI_URL, www.softwarelion.xyz/api/reniec/reniec-dni} from "@env";

export const request_api = (json_data) => {
  return axios
    .post(`${"https://api-nlp-pry20220112.herokuapp.com/spacy/"}`, {
      texto: json_data,
    })
    .then((response) => {
      const { data } = response;
      console.log(data);
      return data;
    });
};
