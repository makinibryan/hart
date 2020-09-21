export interface IApiResponseObject<T> {
  wasSuccessful: boolean,
  responseCode: string,
  responseReason: string,
  data: T,
  errorMessages: IErrorMessage[]
}

export interface IErrorMessage {
  description: string,
  source: string,
}

