import type { ReactNode } from 'react'

export type GlobalImagesType = {
  id: number
  src: string
  alt: string
}

export type ModalProps = {
  isOpen: boolean
  onClose: () => void
  onClick?: () => void;
  children: ReactNode
}

export type ButtonProps = {
  onClick?: () => void;
};