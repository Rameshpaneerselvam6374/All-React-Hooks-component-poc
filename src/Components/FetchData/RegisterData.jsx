import { useState } from "react"


const RegisterData = () => {
const[formData , setFormData] = useState(
   { firstName:"" ,
    email:""
})


const handleChange = (e) => {
    const {name , value} = e.target;
    setFormData({
    ...formData,
    [name]:value
    
})
}

const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submit from Data ${formData.firstName} Email ${formData.email}`);
    setFormData({
        firstName:"",
        email:""
    })
}


    return(
        <>
        <form onSubmit={handleSubmit}>

            <h1>Form Example</h1>
            <label htmlFor="firstname">FirstName:</label>
            <input type="text" id="firstname" className="firstname" value={formData.firstName} onChange={handleChange}/>
            <br />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="email" value={formData.email} onChange={handleChange}/>
            <br /><br />
            
            <button onClick={handleSubmit}>Submit</button>

        </form>
        </>
    )
}

export default RegisterData;