import "./index.css";

function TopNav(){
    return(
    <nav className="topnav">
        <h1 className="textCenter">Rebounce</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/accountSignIn">Account</a>
        </div>
        
        
    </nav>
    );
}

export default TopNav;