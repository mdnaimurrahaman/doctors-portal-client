import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, refetch}) => {
    const {email, role} = user;
    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            // refetch korle ui sate sate update hoye jay , refetch react query er modde theke use kara hoy . use korar jonno map korar somoy props akare pathate hoy . 
            refetch();
            toast.success(`Successfully made an admin`)
        })
    }
    return (
    <tr>
        <th>1</th>
        <td>{email}</td>
        <td>{role !== "admin" && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
        <td><button class="btn btn-xs">Remove user</button></td>
      </tr>
      
    );
};

export default UserRow;