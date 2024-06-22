import { SklandBoard } from './types'

export const SKLAND_AUTH_URL = 'https://as.hypergryph.com/user/oauth2/v2/grant'
export const CRED_CODE_URL = 'https://zonai.skland.com/api/v1/user/auth/generate_cred_by_code'
/** 查询绑定角色 url */
export const BINDING_URL = 'https://zonai.skland.com/api/v1/game/player/binding'
/** 明日方舟每日签到 url */
export const SKLAND_ATTENDANCE_URL = 'https://zonai.skland.com/api/v1/game/attendance'
/** 登岛检票 url */
export const SKLAND_CHECKIN_URL = 'https://zonai.skland.com/api/v1/score/checkin'

export const SKLAND_BOARD_IDS = [SklandBoard.Arknight]
export const SKLAND_BOARD_NAME_MAPPING: Record<SklandBoard, string> = {
  [SklandBoard.Arknight]: '明日方舟'
}
