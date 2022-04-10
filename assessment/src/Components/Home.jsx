import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Home.css';
import { Button, ButtonGroup } from 'react-bootstrap';

function Home() {
    return(
        <div className='background'>
            <div className='text'>
                <br></br>
                <h1 className='text'>Love For The Uglies</h1>
                <h2 className='text'>We are a non profit charity built around giving less fortunate looking animals a shot in the limelight!</h2>
                <h2 className='text'>Explore what our website has to offer below!</h2>
                <ButtonGroup aria-label="Basic example" className='bbg'>
                    <Link to="/Login">
                        <Button variant="flat" size="lg">Login</Button>
                    </Link>
                    <Link to="/Register">
                        <Button variant="flat" size='lg'>Register</Button>
                    </Link>
                    <Link to="/Events">        
                        <Button variant="flat" size='lg'>Events</Button>
                    </Link>    
                    <Link to="/Comments">    
                        <Button variant="flat" size='lg'>Comments</Button>
                    </Link>    
                </ButtonGroup>
            </div>
        </div>
    )
}

export default Home