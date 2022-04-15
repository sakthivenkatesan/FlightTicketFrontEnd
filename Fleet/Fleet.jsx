import React, { Component } from 'react'
import Fleet from './fleetservice';


class CreateFleet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            fleetcode: '',
            fleetmodel: '',
            economyseats: '',
            premiumseats: '',
            businessseats: '',

        }
        this.changefleetcodeHandler = this.changefleetcodeHandler.bind(this);
        this.changefleetmodelHandler = this.changefleetmodelHandler.bind(this);
        this.changeeconomyseatsHandler = this.changeeconomyseatsHandler.bind(this);
        this.changepremiumseatsHandler = this.changepremiumseatsHandler.bind(this);
        this.changebusinessseatsHandler = this.changebusinessseatsHandler.bind(this);
        
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            UserService.getEmployeeById(this.state.id).then( (res) =>{
                let user = res.data;
                this.setState({fleetcode: user.fleetcode,
                    fleetmodel: user.fleetmodel,
                    economyseatsId : user.economyseatsId,
                    premiumseats : user.premiumseats,
                    businessseats : user.businessseats,
                    businessseats2 : user.businessseats2

                });
            });
        }        
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {fleetcode: this.state.fleetcode, fleetmodel: this.state.fleetmodel, economyseatsId: this.state.economyseatsId, premiumseats: this.state.premiumseats, businessseats: this.state.businessseats, businessseats2: this.state.businessseats2};
        console.log('employee => ' + JSON.stringify(user));

        // step 5
        if(this.state.id === '_add'){
            UserService.createUser(user).then(res =>{
                this.props.history.push('/users');
            });
        }else{
            UserService.updateUser(user, this.state.id).then( res => {
                this.props.history.push('/users');
            });
        }
    }
    
    changefleetcodeHandler= (event) => {
        this.setState({fleetcode: event.target.value});
    }

    changefleetmodelHandler= (event) => {
        this.setState({fleetmodel: event.target.value});
    }

    changeeconomyseatsHandler= (event) => {
        this.setState({economyseatsId: event.target.value});
    }

    changepremiumseatsHandler= (event) => {
        this.setState({premiumseats: event.target.value});
    }

    changebusinessseatsHandler= (event) => {
        this.setState({businessseats: event.target.value});
    }

    changebusinessseats2Handler= (event) => {
        this.setState({businessseats2: event.target.value});
    }

    cancel(){
        this.props.history.push('/fleet');
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
                                            <label> Fleet Code: </label>
                                            <input placeholder="Fleet Code" name="fleetcode" className="form-control" 
                                                value={this.state.fleetcode} onChange={this.changefleetcodeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Fleet Model: </label>
                                            <input placeholder="Fleet Model" name="fleetmodel" className="form-control" 
                                                value={this.state.fleetmodel} onChange={this.changefleetmodelHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> economyseats Id: </label>
                                            <input placeholder="economyseats" name="economyseats" className="form-control" 
                                                value={this.state.economyseatsId} onChange={this.changeeconomyseatsHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> premiumseats: </label>
                                            <input placeholder="premiumseats" name="premiumseats" className="form-control" 
                                                value={this.state.premiumseats} onChange={this.changepremiumseatsHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> businessseats: </label>
                                            <input placeholder="businessseats" name="businessseats" className="form-control" 
                                                value={this.state.businessseats} onChange={this.changebusinessseatsHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateUser}>Make Payement</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateFleet