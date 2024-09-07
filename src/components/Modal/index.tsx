// biome-ignore lint/style/useImportType: <explanation>
import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import './style.scss'
import type { ModalProps } from '../../types/index'
import { ClipLoader } from 'react-spinners'

export default function ModalComponent(props: ModalProps) {
  const { isOpen, onClose, children } = props

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      const loadingTime = setTimeout(() => {
        setIsLoading(false)
      }, 1500)

      return () => clearTimeout(loadingTime)
    }
  }, [isOpen])

  const handleOutsideClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.target === e.currentTarget) {
        onClose()
      }
    },
    [onClose],
  )

  if (!isOpen) return null

  return (
    <>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div className="modal-overlay" onClick={handleOutsideClick}>
        <div className="modal-content">
          {isLoading ? (
            <ClipLoader />
          ) : (
            <>
              <IoCloseCircleOutline
                onClick={onClose}
                className="close-button"
                size={60}
              />
              {children}
            </>
          )}
        </div>
      </div>
    </>
  )
}
