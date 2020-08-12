import React from 'react';
import notify from '../components/notify';
const Home = () => {

    const handleNotify=()=>{
        // notify();
    }
    return (
        <div>
            <h1>Home Component</h1>
            <button onClick={handleNotify}>Notify Me</button>
        </div>
    );
}

export default Home;
