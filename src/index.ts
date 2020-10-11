import { AxiaosRequestConfig } from "./types";
import xhr from "./xhr";
import { buildURL } from "./utils/url";

function axios(config: AxiaosRequestConfig): void {
  // 函数参数处理
  processConfig(config);
  // 请求发起
  xhr(config);
}

function processConfig(config: AxiaosRequestConfig): void {
  config.url = transformURL(config);
}

function transformURL(config: AxiaosRequestConfig): string {
  const { url, params } = config;
  return buildURL(url, params);
}

export default axios;
