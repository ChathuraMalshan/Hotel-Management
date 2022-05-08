import React, { Component } from 'react'
import axios from 'axios'

export default class AddRestuarent extends Component {

constructor(props){
    super(props);
    this.state={
        RestaurantName:"",
        Date:"",
        OpeningTime:"",
        Closingtime:"",
        Price:""
      
    }
}
     
    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();

        const{RestaurantName,Date,OpeningTime,Closingtime,Price} = this.state;

        const data ={
            RestaurantName:RestaurantName,
            Date:Date,
            OpeningTime:OpeningTime,
            Closingtime:Closingtime,
            Price:Price
            
        }
        console.log(data)

        axios.post('/Restuarent/save',data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {
                        RestaurantName:"",
                        Date:"",
                        OpeningTime:"",
                        Closingtime:"",
                        Price:""
                        
                    }
                )
            }
        })


    }

    render(){
        return(
            <div className="col-mb-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Add Restuarent</h1>
                  <form className="needs-validation" noValidate>
                      <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}} >Restaurant Type</label>
                          <input type="text"
                          className="form-control"
                          name="RestaurantName"
                          placeholder="Indian/Thai/Chaines/Japanies"
                          value={this.state.RestaurantName}
                          onChange={this.handleInputChange}/>
                       </div>   

                       <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}} >Date</label>
                          <input type="date"
                          className="form-control"
                          name="Date"
                          placeholder="Enter Eventname Single or Double"
                          value={this.state.Date}
                          onChange={this.handleInputChange}/>
                       </div>   

                       <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}} >Opening Time</label>
                          <input type="text"
                          className="form-control"
                          name="OpeningTime"
                          placeholder="Enter Here"
                          value={this.state.OpeningTime}
                          onChange={this.handleInputChange}/>
                       </div>   

                       <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}} >Closing Time</label>
                          <input type="text"
                          className="form-control"
                          name="Closingtime"
                          placeholder="Enter Here"
                          value={this.state.Closingtime}
                          onChange={this.handleInputChange}/>
                       </div>   

                                             
                       <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}} >Price (Rs)</label>
                          <input type="text"
                          className="form-control"
                          name="Price"
                          placeholder="Enter Price"
                          value={this.state.Price}
                          onChange={this.handleInputChange}/>
                       </div>               
                                  
                
                       <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                           <i className="far fa-check-square"></i>
                           &nbsp; save
                       </button>

                    </form>

                 </div>          
        )
    }
  
}