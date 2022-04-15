import { Link } from "react-router-dom"
import logo from "./logo.png";
import product from "./product.jpg"
import service from "./service.jpg"
import offer from "./offer.jpg"
import ig from "./ig.png"
import twt from "./twt.png"
import fb from "./fb.png"
import "./Users.css"
function Users()
{
    return (
        <div className="form-group" id="bd"><img id = "logo" src={logo} alt="Logo"/><span id="name">Buon Viaggio</span><br/>
        <button type="button" class="btn" id = "al"><Link id="al1" to= "/admin_login">Admin Login</Link></button>
        <button type="button" class="btn" id = "l"><Link id = "l1" to= "/login">Login</Link></button>
        <button type="button" class="btn" id = "su"><Link id = "su1" to= "/sign_up">Sign up</Link></button>
        <div class="cards">
            <article class = "card"><header><h4>Products</h4></header><img src={product}/><div class="content">
            <p> We offer transport services for both passengers and freight at affordable price. Currently, the airlines is limited within the country.</p>
        </div></article>
        <article class = "card"><header><h4>Services</h4></header><img src={service}/><div class="content">
            <p> Our flights are not only limited to international airports, instead they also cover almost every airport in the country to provide great customer satisfaction.</p>
        </div></article>
        <article class = "card"><header><h4>Deals of the day</h4></header><img src={offer}/><div class="content">
            <p> Everyday we offer special offers for flight booking from a certain city to another for our premium customers. Visit our Instagram page to know more.</p>
        </div></article>
        </div>
        <div class = "footer"><h3 class = "au">About us:</h3><p class="au">Established at 2017, Buon Viaggio has constantly helped the commoners to achieve their dream of travelling in airplane since the beginning. We're planning to get another feather on our hat by adding accommodation services which will be added shortly. </p>
        <h6 class="fo">Follow us on:</h6>
        <a target="_blank" href="https://www.instagram.com/"><img class="lg" src={ig}/></a>
        <a target="_blank" href="https://www.twitter.com/"><img class="lg" src={twt}/></a>
        <a target="_blank" href="https://www.facebook.com/"><img class="lg" src={fb}/></a>
        </div>
        </div>
    )
}
export default Users;
