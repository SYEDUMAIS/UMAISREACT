import React from 'react';
import {button, input} from 'react-bootstrap';

const Searchbar = () => 
{
    return (
        <div>
            <input type="text" class="mysearchbar" placeholder="Search" ></input>
            <button class="mysearchbar1"><img src="search_logo1.png" alt="" class="mysearchbar2" /></button>
            <a href="/"><p className="userlogintext">Login</p><img src="user_icon_black1.png" alt="" className="userlogin"/></a>
            <img src="source.gif" alt="" className="applogo"/>
        </div>
    );
};

export default Searchbar;