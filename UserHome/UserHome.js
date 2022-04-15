import logo from "./logo.png";
import { Link } from "react-router-dom"
import "./UserHome.css"

function UserHome(){
    return(
        <div className="form-group" id="bd"><img id = "logo" src={logo} alt="Logo"/><span id="name">Buon Viaggio</span><br/>
        <div class="cards1">
        <article class="card1" id="c1"><div class="content"><Link to= "/">View Flight Details</Link></div></article><br/>
        <article class="card1" id="c1"><div class="content"><Link to= "/booking">Make Booking</Link></div></article><br/>
        <article class="card1" id="c1"><div class="content"><Link to= "/contact">Update Personal Details</Link></div></article><br/>
        <article class="card1" id="c1"><div class="content"><Link to= "/">Sign Out</Link></div></article><br/>
        </div>
        </div>
    )
}
export default UserHome;