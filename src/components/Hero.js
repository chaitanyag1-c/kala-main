import React,{useState} from 'react'
import Dashboard from './Dashboard'
import Header from './LOGGEDINHEADER'
import Select from './Select'
import Banner from './Banner'
import { useAuth } from "../contexts/AuthContext"

const Hero = () => {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    return (
        <>





<Dashboard>
</Dashboard>
<Header>
</Header>
<Banner />
    </>      
        
    )
}

export default Hero
