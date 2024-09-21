import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'



export type Nulleable<T> = {
  [key in keyof T]: T[key] | null
}

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function queryToString(obj: any): string {
  return Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
}

export function currencyFormat(num: number, isCurrency: boolean = true) {
  const formattedNumber = num
    .toFixed()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  return isCurrency ? '$ ' + formattedNumber : formattedNumber
}

export function formatMillion(number: number) {
  if (number >= 1000000) {
    const millions = Math.floor(number / 1000000)
    return millions + 'M'
  }
  return currencyFormat(number)
}


export function formatDate(date: Date) {
  return date.toLocaleDateString('es-CO')
}

export function transformToSelectOption(
  data: any,
  value: string,
  label: string
) {
  return data?.map((item: any) => ({
    label: item[label],
    value: item[value]
  }))
}

export const addMonths = (months: number) => {
  return new Date(new Date().setMonth(new Date().getMonth() + months))
}

export const addDays = (date: Date, days: number) => {
  const normalizedDate = new Date(
    date?.getFullYear(),
    date?.getMonth(),
    date?.getDate()
  )
  return new Date(normalizedDate?.setDate(normalizedDate?.getDate() + days))
}
