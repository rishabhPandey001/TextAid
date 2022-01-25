import { Link } from "react-router-dom";

function Navbar( props ){
    
    return(
        <div>
        <nav class={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} py-3`}>
        <div class="container">
         <a href="/" class="navbar-brand"> {props.title} </a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
             <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
                 <li class="active nav-items">
                     <Link to="/" class="nav-link" >Home</Link>
                 </li>
                 <li class="nav-items">
                     <Link to="/about" class="nav-link" >About</Link>
                 </li>
                 <li class="nav-items">
                     <a href="/" class="nav-link">Contact Us</a>
                 </li>
            </ul>
            <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
            </div>
         </div>
        </div>
        <button className="btn btn-warning mr-3 border-radius-10 {`btn btn-${props.mode==='light'?'dark':'light'}`}">
            <Link to="/login" >Login</Link>
        </button>
        <button className={`btn btn-${props.mode==='light'?'dark':'light'}`} onClick={props.toggleMode}>Toggle </button>
     </nav>
     </div>
    )
}


export default Navbar;