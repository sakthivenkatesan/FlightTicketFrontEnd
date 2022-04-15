import React, { Component } from 'react'
import BookingService from '../../services/UserService';


class CreateBooking extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
        bookingNumber: '',
        bookingDate: '',
        travelDate: '',
        totalCost: ''


        }
        this.changeBookingIdHandler = this.changeBookingIdHandler.bind(this);
        this.changeBookingNumberHandler = this.changeBookingNumberHandler.bind(this);
        this.changeBookingDateHandler = this.changeBookingDateHandler.bind(this);
        this.changeTraveDateHandler = this.changeTraveDateHandler.bind(this);
        this.changeTravelCostHandler = this.changeTravelCostHandler.bind(this);
    
        
        this.saveOrUpdateBooking = this.saveOrUpdateBooking.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            BookingService.getUserById(this.state.id).then( (res) =>{
                let user = res.data;
                this.setState({id: booking.id,
                bookingNumber: booking.bookingNumber,
                bookingDate: booking.bookingDate,
                travelDate: booking.travelDate,
                totalCost: booking.travelCost

                });
            });
        }        
    }
    saveOrUpdateBooking = (e) => {
        e.preventDefault();
        let booking = {id: this.state.id, bookingNumber: this.state.bookingNumber, bookingDate: this.state.bookingDate, travelDate: this.state.travelDate, travelCost: this.state.travelCost};
        console.log('booking => ' + JSON.stringify(booking));

        // step 5
        if(this.state.id === '_add'){
            BookingService.createBooking(booking).then(res =>{
                this.props.history.push('/bookings');
            });
        }else{
            BookingService.updateBooking(user, this.state.id).then( res => {
                this.props.history.push('/bookings');
            });
        }
    }
    
    changeBookingIdHandler= (event) => {
        this.setState({id: event.target.value});
    }

    changeBookingNumberHandler= (event) => {
        this.setState({bookingNumber: event.target.value});
    }

    changeBookingDateHandler= (event) => {
        this.setState({bookingDate: event.target.value});
    }

    changeTravelDateHandler= (event) => {
        this.setState({travelDate: event.target.value});
    }

    changeTravelCostHandler= (event) => {
        this.setState({travelCost: event.target.value});
    }

    cancel(){
        this.props.history.push('/booking');
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
                                            <label> Booking Id: </label>
                                            <input placeholder="BookingId" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeBookingIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Booking Number: </label>
                                            <input placeholder="BookingNumber" name="bookingNumber" className="form-control" 
                                                value={this.state.bookingNumber} onChange={this.changeBookingNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Booking Date: </label>
                                            <input placeholder="BookingDate" name="bookingDate" className="form-control" 
                                                value={this.state.bookingDate} onChange={this.changeBookingDateHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Travel Date: </label>
                                            <input placeholder="TravelDate" name="travelDate" className="form-control" 
                                                value={this.state.travelDate} onChange={this.changeTravelDateHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> travelCost: </label>
                                            <input placeholder="TravelCost" name="travelCost" className="form-control" 
                                                value={this.state.travelCost} onChange={this.changeTravelCostHandler}/>
                                        </div>


                                        <button className="btn btn-success" onClick={this.saveOrUpdateBooking}>Make Payment</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateBooking