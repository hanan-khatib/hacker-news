import React from 'react';


function Header() {
  return (
    <div>
    	<img src="./images/y18.gif" className="logo" width="18" height="18" alt="" />
        
        <span class="pagetop">
        	<b class="hnname"><a className="text-color-4" href="news">Hacker News</a></b>
            <a className="text-color-4" href="/newest">new</a> | 
            <a className="text-color-4" href="/front">past</a> | 
            <a className="text-color-4" href="/newcomments">comments</a>
        </span>
  	</div>
  );
}

export default Header;