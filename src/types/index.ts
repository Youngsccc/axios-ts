export type Method = 'get' | 'GET' | 'post' | 'POST' | 'delete' | 'DELETE' | 'pu' | 'PUT' |'options' | 'OPTIONS'

export interface AxiaosRequestConfig {
  url: string,
  method?: Method,
  data?: any,
  params?: any,
}
