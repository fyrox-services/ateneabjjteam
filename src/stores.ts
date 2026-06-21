import {atom} from 'nanostores'
import type { ModalContent, Modality } from '@/types'

export const isModalActive = atom(false)
export const modalContent = atom<ModalContent>('form')
export const modality = atom<Modality>('')

function detectSeason(): 'normal' | 'verano' {
  if (typeof window === 'undefined') return 'normal'
  const m = new Date().getMonth()
  const d = new Date().getDate()
  const afterJune22 = m > 5 || (m === 5 && d >= 22)
  const beforeAug29 = m < 7 || (m === 7 && d <= 28)
  return afterJune22 && beforeAug29 ? 'verano' : 'normal'
}

export const season = atom<'normal' | 'verano'>(detectSeason())
