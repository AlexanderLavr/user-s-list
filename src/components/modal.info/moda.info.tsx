import React from 'react';
import './modal.info.scss';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { closeModalInfo } from '../../redux/modal.info.redux/modal.info.action';

const ModalInfo: React.FC = (props: any) => {
  const closeModalInfo = () => {
    props.closeModalInfo()
  }
  return (  
    <div>
      <Modal isOpen={props.modalInfo.open} toggle={closeModalInfo}>
        <ModalHeader toggle={closeModalInfo} className="atention">Atention</ModalHeader>
        <ModalBody className="atention">
          {props.modalInfo.text}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>closeModalInfo()}>Ok</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
    modalInfo: state.modalInfo
})

export default connect(
    mapStateToProps,
    { closeModalInfo }
  )(ModalInfo)