import React,{useState} from 'react'
import Dashboard from './Dashboard'
import Header from './LOGGEDINHEADER'
import Select from './Select'
import { useAuth } from "../contexts/AuthContext"

const Hero = () => {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    return (
        <>
<Header>
</Header>
<Dashboard>
</Dashboard>


<div id="login-cont">
<h1>Hello {currentUser.email} </h1>
</div>

<Select>

</Select>
    </>      
        
    )
}

export default Hero
