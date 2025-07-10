import {atom} from 'nanostores'
import type { ModalContent, Modality } from '@/types'

export const isModalActive = atom(true)
export const modalContent = atom<ModalContent>('form')
export const modality = atom<Modality>('kimono - gi')
