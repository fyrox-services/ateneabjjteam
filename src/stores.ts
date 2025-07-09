import {atom} from 'nanostores'
import type { ModalContent } from '@/types'

export const isModalActive = atom(false)
export const modalContent = atom<ModalContent>('form')