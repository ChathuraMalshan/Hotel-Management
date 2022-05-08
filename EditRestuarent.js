import React, { Component } from 'react'
import axios from 'axios'

export default class EditRestuarent extends Component {


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
        const id = this.props.match.params.id;

        const{RestaurantName,Date,OpeningTime,Closingtime,Price} = this.state;

        const data ={
            RestaurantName:RestaurantName,
            Date:Date,
            OpeningTime:OpeningTime,
            Closingtime:Closingtime,
            Price:Price
            
        }
        console.log(data)

        axios.put(`/Restuarent/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Updated Successfully")
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


  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`/Restuarent/${id}`).then((res) =>{
        if(res.data.success){
            this.setState({
                RestaurantName:res.data.Restuarent.RestaurantName,
                Date:res.data.Restuarent.Date,
                OpeningTime:res.data.Restuarent.OpeningTime,
                Closingtime:res.data.Restuarent.Closingtime,
                Price:res.data.Restuarent.Price,
              
            });

            console.log(this.state.Restuarent);
        }
    })



}


render(){
    return(
        <div className="col-mb-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Edit Restuarent Details</h1>
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
                       &nbsp; Update
                   </button>

                </form>

             </div>          
    )
}

}