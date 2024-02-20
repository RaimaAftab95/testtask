import React, {useState} from "react";
import UserModal from "./Modal";

const Item = ({ userData}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return(
        <div className="card mx-auto my-3" style={{width: "18rem"}}>
            <img className="card-img-top rounded-circle"  src={userData.avatar_url} 
            alt={userData.login} />
            <div className="card-body text-center"> 
<h5 className="card-title" onClick={openModal }>{userData.name}</h5>
<p className="card-text">
    Github: <a href={userData.html_url}>{userData.html_url}</a>
</p>

</div>
<UserModal 
isOpen={modalIsOpen}
onRequestClose={closeModal}
userData={userData}
/>

        </div>
    );
};

export default Item;