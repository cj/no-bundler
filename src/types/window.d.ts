type Env = {[key: string]: string | boolean}
type AsyncImport = () => Promise<any>

declare interface Window {
  asyncImport: AsyncImport

  process: {
    env: Env
  }
}
