import 'pinia'

declare module 'pinia' {
  export interface DefineStoreOptionsBase<S> {
    persist?: Array<keyof S>
  }
}
