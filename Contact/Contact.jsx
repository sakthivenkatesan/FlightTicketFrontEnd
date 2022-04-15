import React, { Component } from 'react'
import UserService from '../../services/UserService';


class CreateContact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            addressLine: '',
            city: '',
            country: '',
            mobileNo: '',
            state: '',
            zipCode: '',


        }
        this.changeAddressLineHandler = this.changeAddressLineHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeCountryHandler = this.changeCountryHandler.bind(this);
        this.changeMobileNoHandler = this.changeMobileNoHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changeZipCodeHandler = this.changeZipCodeHandler.bind(this);
        
        this.saveOrUpdateContact = this.saveOrUpdateContact.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            UserService.getContactById(this.state.id).then( (res) =>{
                let user = res.data;
                this.setState({addressLine: contact.addressLine,
                    city: contact.city,
                    country : contact.country,
                    mobileNo : contact.mobileNo,
                    state : contact.state,
                    zipCode : contact.zipCode

                });
            });
        }        
    }
    saveOrUpdateContact = (e) => {
        e.preventDefault();
        let user = {addressLine: this.state.addressLine, city: this.state.city, country: this.state.country, mobileNo: this.state.mobileNo, state: this.state.state, zipCode: this.state.zipCode};
        console.log('Contact => ' + JSON.stringify(contact));

        // step 5
        if(this.state.id === '_add'){
            ContactService.createContact(contact).then(res =>{
                this.props.history.push('/contacts');
            });
        }else{
            ContactService.updateContact(contact, this.state.id).then( res => {
                this.props.history.push('/contacts');
            });
        }
    }
    
    changeAddressLineHandler= (event) => {
        this.setState({addressLine: event.target.value});
    }

    changeCityHandler= (event) => {
        this.setState({city: event.target.value});
    }

    changeCountryHandler= (event) => {
        this.setState({country: event.target.value});
    }

    changeMobileNoHandler= (event) => {
        this.setState({mobileNo: event.target.value});
    }

    changeStateHandler= (event) => {
        this.setState({state: event.target.value});
    }

    changeZipCodeHandler= (event) => {
        this.setState({zipCode: event.target.value});
    }

    cancel(){
        this.props.history.push('/contacts');
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
                                            <label> AddressLine: </label>
                                            <input placeholder="Enter Address" name="addressLine" className="form-control" 
                                                value={this.state.addressLine} onChange={this.changeAddressLineHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> City: </label>
                                            <input placeholder="Enter City" name="city" className="form-control" 
                                                value={this.state.city} onChange={this.changeCityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Country: </label>
                                            <input placeholder="Enter Country" name="country" className="form-control" 
                                                value={this.state.country} onChange={this.changeCountryHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> MobileNo: </label>
                                            <input placeholder="Enter MobileNo" name="mobileNo" className="form-control" 
                                                value={this.state.mobileNo} onChange={this.changeMobileNoHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> State: </label>
                                            <input placeholder="Enter State" name="state" className="form-control" 
                                                value={this.state.state} onChange={this.changeStateHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Zipcode: </label>
                                            <input placeholder="Enter Zipcode" name="zipCode" className="form-control" 
                                                value={this.state.zipCode} onChange={this.changeZipCodeHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateContact}>Update</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateContact;
