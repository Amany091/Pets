import { ReactElement, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

type Props = {
    children: ReactElement[]
}

const Modal = ({ children }: Props) => {
    const modalRef = useRef<null | HTMLDivElement>(null)

    if (!modalRef.current) {
        modalRef.current = document.createElement('div')
    }

    useEffect(() => {
        const modalRoot = document.getElementById('modal')
        if (modalRoot && modalRef.current) {
            modalRoot.appendChild(modalRef.current)
        }
        return (() => {
            if (modalRoot && modalRef.current) { 
                modalRoot.removeChild(modalRef.current)
            }
        })
    }, [])

    return createPortal(children, modalRef.current)
}

export default Modal
