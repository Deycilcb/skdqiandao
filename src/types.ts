export interface SklandResponse<T> {
  code: number
  message: string
  data: T
}

export interface AuthResponse {
  status: number
  type: string
  msg: string
  data?: { code: string, uid: string }
}

export type CredResponse = SklandResponse<{ cred: string, userId: string, token: string }>

export type BindingResponse = SklandResponse<{
  list: {
    appCode: string
    appName: string
    bindingList: {
      uid: string
      isOfficial: boolean
      isDefault: boolean
      channelMasterId: string
      channelName: string
      nickName: string
      isDelete: boolean
    }[]
    defaultUid: string
  }[]
}>

export type AttendanceResponse = SklandResponse<{
  ts: number
  awards: {
    resource: {
      id: string
      name: string
      type: string
    }
    count: number
  }[]
}>

/** 森空岛版面id */
export enum SklandBoard {
  /** 明日方舟 */
  Arknight = 1
}
