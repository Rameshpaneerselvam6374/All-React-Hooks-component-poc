// import React,
// {
//     useState,
//     useEffect
// } from 'react';

// function FetchDataApi() {
//     const [userList, setUserList] = useState([0]);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.org/users/')
//             .then(response => response.json())
//             .then(data => setUserList(data));
//     }, [userList]);

//     return (
//         <div>
//             <h2>Random User List</h2>
//             <ul>
//                 {userList.map(user => (
//                     <li key={user.id}>
//                         <p>
//                             Name:
//                             {user.first_name}
//                             {user.last_name}
//                         </p>
//                         <p>
//                             Email:
//                             {user.email}
//                         </p>
//                         {/* Add more user data fields as needed */}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default FetchDataApi;


import React,
{
    useState,
    useEffect
} from 'react';

function RandomUserData() {
    const [userData, setUserData] = useState(0);

    useEffect(() => {
        fetch('https://random-data-api.com/api/users/random_user')
            .then(response => response.json())
            .then(data => setUserData(data));
    }, [userData]);

    const increment = () =>{
        setUserData(userData+1)
    }

    return (
        <>
        <div>
            {userData && (
                <div>
                    <h2>User Information</h2>
                    <p>
                        Name:
                        {userData.first_name}
                        {userData.last_name}
                    </p>
                    <p>
                        Email: {userData.email}
                    </p>
                    {/* Add more user data fields as needed */}
                </div>
            )}
           
        </div>
         <button onClick={increment}>Change data</button>
         </>
    );
}

export default RandomUserData;