export enum modalInfoType {
    OPEN_MODAL_INFO = 'OPEN_MODAL_INFO',
    CLOSE_MODAL_INFO = 'CLOSE_MODAL_INFO'
}

export const openModalInfo = (message: string) => {
    return { type: modalInfoType.OPEN_MODAL_INFO, message}
}

export const closeModalInfo = () => {
    return { type: modalInfoType.CLOSE_MODAL_INFO }
}