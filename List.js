import React from "react";
import Item from "./Item";
import UserModal from "./Modal";

const List = ({ userList }) => {
    return(
        <div className="card-container">
            {userList.map((user) =>  (
                <div key={user.id}>
                    <Item userData={user} />
                    <UserModal userData={user} />
                     </div>
            ))}
        </div>
    );
};

export default List;