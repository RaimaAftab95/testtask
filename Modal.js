import React from "react";
// import { Modal } from "bootstrap";
import Modal from "react-modal";

Modal.setAppElement("#root");

const UserModal = ({ isOpen, onRequestClose, userData}) => {
    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="User Modal"
         >

           <div className="container">
            <button onClick={onRequestClose} className="btn-close"></button>
            <h2 className="text-center"> {userData.name}</h2>
            <p className="text-center">Followers: {userData.followers}</p>
            <p className="text-center">Following: {userData.following}</p>
            <p className="text-center">Location: {userData.location}</p>

           </div>

         </Modal>
    );
};

export default UserModal;