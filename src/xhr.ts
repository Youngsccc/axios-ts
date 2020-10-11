import { AxiaosRequestConfig } from "./types";

export default function xhr(config: AxiaosRequestConfig): void {
  const { url, data = null, method = 'get' } = config;
  const request = new XMLHttpRequest();
  request.open(method.toUpperCase(), url, true);

  request.send(data);
}
