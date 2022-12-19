import React, {  useState } from 'react';
import '../component/Basic.css';
import LargeHeader from './LargeHeader';
import SmallHeader from './SmallHeader';

function Header(){
    const [head,setHead] = useState(1);
    
    const update = ()=>{
        if(head===0){
            setHead(1);
        }
        else{
            setHead(0);
        }
    };


    function Check(){
        if(head===0)
            return (<SmallHeader/>);
        else
            return (<></>);
    }
    return (
        <div>
            <div className="navbar navbar-default navbar-fixed-top align-content-center">
                <div className="navbar-header">
                <a className="navbar-brand text-pop"  id="brand-link"  href="#brief">Amit Kumar</a>
                </div>
                <LargeHeader/>
                <div id="_small_screen_nav">
                    <button onClick={update} id="show_options" className='button'>
                        <img src="images/menu.png" alt="options"/>
                    </button>
                </div>
            </div>
            
            <Check/>
        </div>
    );
}

export default Header;