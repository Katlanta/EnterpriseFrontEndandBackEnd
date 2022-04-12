//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Standard Imports!
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Home.css';
import { Button} from 'react-bootstrap';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Super basic buttons and background for the home page, nothing fancy
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function Home({user,setUser}) {

    const handleLogOut = (e) => {
        e.preventDefault();
        setUser(false)
      };
    return(
        <div className='bbg'>
            <div className='background'>
                <div className='text'>
                    <br></br>
                    <h1 className='text'>Love For The Uglies</h1>
                    <h2 className='text'>We are a non profit charity built around giving less fortunate looking animals a shot in the limelight!</h2>
                    <h2 className='text'>Explore what our website has to offer below!</h2>
                    {/*Linked up buttons to redirect where stated*/}
                        {/*Conditionally rendering the appropriate buttons!*/}
                        {
                        !user
                        ? <><Link to="/Login">
                                                    <Button size="lg">Login</Button>
                                                </Link>
                                                <Link to="/Register">
                                                    <Button  size="lg">Register</Button>
                                                </Link></>
                        : null
                        }
                        <Link to="/Events">        
                            <Button size="lg">Events</Button>
                        </Link>    
                        <Link to="/Comments">    
                            <Button size="lg">Comments</Button>
                        </Link>  
                        {/*Logout Button*/}
                        {
                        user
                        ? <Button size="lg" onClick={(e) => handleLogOut(e)}>Log out</Button>
                        : null
                        }  
                </div>
            </div>
        </div>
    )
}

export default Home