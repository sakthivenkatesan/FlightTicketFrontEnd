import logo from "./logo.png";
import { Link } from "react-router-dom"
import "./AdminHome.css"

function UserHome(){
    return(
        <div className="form-group" id="bd"><img id = "logo" src={logo} alt="Logo"/><span id="name">Buon Viaggio</span><br/>
        <div class="cards1">
        <article class="card1" id="c1"><div class="content"><Link to= "/add_flight">Add Flight</Link></div></article><br/>
        <article class="card1" id="c1"><div class="content"><Link to= "/add_location">Add Location</Link></div></article><br/>
        </div>
        </div>
    )
}
export default UserHome;