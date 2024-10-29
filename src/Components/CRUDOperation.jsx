const { useState, useEffect } = require("react");

function CRUDOperation() {
    const [users , setUsers] = useState([]);

    useEffect ( () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => setUsers(json))
    },[]);
    
    
    return(
        <>
        <div className="crud">
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </table>
            <tbody>
                {users.map(user =>(
                   <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>{user.action}</td>
                        <td>
                            <button>Update</button>
                            <button>Delete</button>
                        </td>
                   </tr>
                ))}
            </tbody>
        </div>
        </>
    );
}

export default CRUDOperation;