import React, { Component } from 'react'
import LocationService from '../../services/LocationService';


class CreateLocation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            locationId:'',
		    name: '',
		    code :'',
		    country :'',
		    airportName:'',


        }
        this.changeLocationIdHandler = this.changeLocationIdHandler.bind(this);
        this.changeLocationNameHandler = this.changeLocationNameHandler.bind(this);
        this.changeLocationCodeHandler = this.changeLocationCodeHandler.bind(this);
        this.changeCountryHandler = this.changeCountryHandler.bind(this);
        this.changeAirportNameHandler = this.changeAirportNameHandler.bind(this);
        
        this.saveOrUpdateLocation = this.saveOrUpdateLocation.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            LocationService.getLocationById(this.state.id).then( (res) =>{
                let user = res.data;
                this.setState({firstName: user.firstName,
                    lastName: user.lastName,
                    emailId : user.emailId,
                    age : user.age,
                    password : user.password,
                    password2 : user.password2

                });
            });
        }        
    }
    saveOrUpdateLocation = (e) => {
        e.preventDefault();
        let loction = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, age: this.state.age, password: this.state.password, password2: this.state.password2};
        console.log('location => ' + JSON.stringify(user));

        // step 5
        if(this.state.id === '_add'){
            LocationService.createLocation(user).then(res =>{
                this.props.history.push('/locations');
            });
        }else{
            LocationService.updateLocation(user, this.state.id).then( res => {
                this.props.history.push('/locations');
            });
        }
    }
    
    changeLocationIdHandler= (event) => {
        this.setState({locationId: event.target.value});
    }

    changeLocationNameHandler= (event) => {
        this.setState({LocationName: event.target.value});
    }

    changeLocationCodeHandler= (event) => {
        this.setState({code: event.target.value});
    }

    changeCountryHandler= (event) => {
        this.setState({country: event.target.value});
    }

    changeAirportNameHandler= (event) => {
        this.setState({airportName: event.target.value});

    }

    cancel(){
        this.props.history.push('/location');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center"></h3>
        }else{
            return <h3 className="text-center"></h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Location Id: </label>
                                            <input placeholder="LocationId" name="LocationId" className="form-control" 
                                                value={this.state.id} onChange={this.changeLocationIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Location Name: </label>
                                            <input placeholder="Location Name" name="LcationName" className="form-control" 
                                                value={this.state.name} onChange={this.changeLocationNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Location Code: </label>
                                            <input placeholder="Location Code" name="Location Code" className="form-control" 
                                                value={this.state.code} onChange={this.changeLocationCodeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Country: </label>
                                            <input placeholder="Country" name="Country" className="form-control" 
                                                value={this.state.country} onChange={this.changeCountryHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Airport: </label>
                                            <input placeholder="airport" name="airport" className="form-control" 
                                                value={this.state.airportName} onChange={this.changeAirportNameHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateUser}>ADD LOCATION</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateUser