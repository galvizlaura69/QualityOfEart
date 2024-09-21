

export const session = {
  idleTime: 10 * 60 * 1000,
  autoRefresh: 10 * 60 * 1000
} as const

export const SERVER_BASE_URL_LOCAL = import.meta.env.VITE_BASE_URL_LOCAL  as string
export const SERVER_BASE_URL = import.meta.env.VITE_BASE_URL_LOCAL  as string
export const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL as string

export const API_BASE_URL_LOCAL = `${SERVER_BASE_URL_LOCAL}/api`
export const API_BASE_URL = `${SERVER_BASE_URL}/api`


export const ConnectionStatuses = {
  starting: 'starting',
  started: 'started',
  failedToStart: 'failedToStart',
  stopping: 'stopping',
  stopped: 'stopped',
  failedToStop: 'failedToStop'
} as const

export const SessionStatuses = {
  connecting: 'connecting',
  dialing: 'dialing ',
  connected: 'connected',
  terminating: 'terminating',
  terminated: 'terminated'
} as const

export const errorsAuth: { [key: string]: string } = {
  500: 'Se ha encontrado un error en el servidor intente nuevamente, si el error persiste comuníquese con TI',
  501: 'Se ha encontrado un error en el servidor intente nuevamente, si el error persiste comuníquese con TI',
  503: 'Se ha encontrado un error en el servidor intente nuevamente, si el error persiste comuníquese con TI',
  504: 'Se ha encontrado un error en el servidor intente nuevamente, si el error persiste comuníquese con TI',
  401: 'Usuario o contraseña incorrecta',
  '': 'Se encontró un error en el servidor por favor intente mas tarde'
}
