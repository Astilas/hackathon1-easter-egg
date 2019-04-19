import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '20px', right: '20px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <Button color="danger" className="gamebutton mx-auto" onClick={this.toggle}>Niveau Hardcore-PGM</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Niveau Bloqué</ModalHeader>
          <ModalBody>
            <b>Tu dois d'abord finir le niveau Noob pour débloqué celui-ci</b><br />
          </ModalBody>
          <ModalFooter>
            <Link to="/">
              <Button color="primary" onClick={this.toggle}>Aller au niveau Noob</Button>
            </Link>

            <Button href="https://i.giphy.com/media/500nU68uqNEt2/giphy.webp" color="secondary" onClick={this.toggle}>Je peux pas j'ai curling</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;