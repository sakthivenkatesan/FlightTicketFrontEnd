import React, { Component } from 'react'
import PassengerService from './PassengerService';


class CreatePassengerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            passengerId: this.props.match.params.id,
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            passportNo: '',
            mealPref: '',
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeAgeHandler = this.changeFirstNameHandler.bind(this);
        this.changeGenderHandler = this.changeFirstNameHandler.bind(this);
        this.changePassportNoHandler = this.changeFirstNameHandler.bind(this);
        this.changeMealPrefHandler = this.changeFirstNameHandler.bind(this);
        this.saveOrUpdatePassenger = this.saveOrUpdatePassenger.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            PassengerService.getPassengerById(this.state.id).then( (res) =>{
                let Passenger = res.data;
                this.setState({
                    passengerId: Passenger.passengerId,
                    firstName: Passenger.firstName,
                    lastName: Passenger.lastName,
                    age: Passenger.age,
                    gender: Passenger.gender,
                    passportNo: Passenger.passportNo,
                    mealPref: Passenger.mealPref
                });
            });
        }        
    }
    saveOrUpdatePassenger = (e) => {
        e.preventDefault();
        let Passenger = {passengerId: this.state.passengerId, 
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            age: this.state.age, 
            gender: this.state.gender, 
            passportNo: this.state.passengerNo, 
            mealPref: this.state.mealPref};
        console.log('Passenger => ' + JSON.stringify(Passenger));

        // step 5
        if(this.state.id === '_add'){
            PassengerService.createPassenger(Passenger).then(res =>{
                this.props.history.push('/Passengers');
            });
        }else{
            PassengerService.updatePassenger(Passenger, this.state.id).then( res => {
                this.props.history.push('/Passengers');
            });
        }
    }
    changePassengerIdHandler= (event) => {
        this.setState({passengerId: event.target.value});
    }
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }
    changeGenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }
    changePassportNoHandler= (event) => {
        this.setState({passportNo: event.target.value});
    }
    changeMealPrefHandler= (event) => {
        this.setState({mealPref: event.target.value});
    }
    cancel(){
        this.props.history.push('/passenger');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Passenger</h3>
        }else{
            return <h3 className="text-center">Update Passenger</h3>
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
                                            <label> Passenger Id: </label>
                                            <input placeholder="Passenger Id" name="passengerId" className="form-control" 
                                                value={this.state.passengerId} onChange={this.changePassengerIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Age: </label>
                                            <input placeholder="Age" name="age" className="form-control" 
                                                value={this.state.age} onChange={this.changeAgeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender: </label>
                                            <input placeholder="Gender" name="gender" className="form-control" 
                                                value={this.state.gender} onChange={this.changeGenderHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> PassportNo: </label>
                                            <input placeholder="PassportNo" name="passportNo" className="form-control" 
                                                value={this.state.passportNo} onChange={this.changePassportNoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> MealPref: </label>
                                            <input placeholder="MealPref" name="mealPref" className="form-control" 
                                                value={this.state.mealPref} onChange={this.changeMealPrefHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdatePassenger}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreatePassengerComponent
