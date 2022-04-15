import React from "react";
import { Component } from "react";
import axios from "axios";

export default class AxiosCalls extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        const URL = "http://localhost:9090/userController/addUser";
        const data1 = {
            "UserId": "5",
            "userName": "Sakthi",
            "password": "sakthi07",
            "firstName": "S",
            "lastName": "V",
            "email": "sv@gmail.com"
        }
        axios.post(URL, data1).then(response =>
        {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }
    render() {
        return 
        {
            <div><h1>This is workingggg</h1></div>
        }
    }
}