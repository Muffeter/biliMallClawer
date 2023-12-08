import { stringify } from "querystring";
import axios, { Axios } from "axios";

export async function sc_send(text, desp = '', key = '[SENDKEY]') {
  const postData = stringify({ text, desp });
  const url = `https://sctapi.ftqq.com/${key}.send`;
  const response = await axios.post(url, postData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": JSON.stringify(Buffer.byteLength(postData))
    }
  })

  const data = await response.data;
  return data;
}