import React, { Component } from 'react';
import axios from 'axios';

export default class HomeData extends Component {
constructor(props){
  super(props);

  this.state={
    restuarent:[]
  };

}  

componentDidMount(){
  this.retrieveRestuarent()
}

retrieveRestuarent(){
  axios.get("/restuarent").then(res =>{
    if(res.data.success){
      this.setState({
        restuarent:res.data.existingRestuarent
      });

      console.log(this.state.restuarent);

    }
  });
}

onDelete =(id) =>{
  axios.delete(`/Restuarent/delete/${id}`).then((res) =>{
    alert("Delete Successfully");
    this.retrieveRestuarent();
  })
}

filterData(restuarent,searchkey){

  const result = restuarent.filter((Restuarent)=>
   Restuarent.RestaurantName.toLowerCase().includes(searchkey)||
   Restuarent.Date.toLowerCase().includes(searchkey)
   
   )

   this.setState({restuarent:result})
}

handleSearchArea = (e) =>{
  const searchkey= e.currentTarget.value;

  
    axios.get("/restuarent").then(res =>{
      if(res.data.success){
       
        this.filterData(res.data.existingRestuarent,searchkey)
      }
    });
}


  render() {
    return (
      <div className="container">
       <div className="row">
         <div className="col-lg-9 mt-2 mb-2">
         <h4>Restaurant Details</h4>  
         </div>
         <div className="col-lg-3 mt-2 mb-2">
           <input
           className="form-control"
           type="search"
           placeholder="Search"
           name="searchQuery"
           onChange={this.handleSearchArea}>

           </input>
           </div>
           </div>
           <table className="table table-hover" style={{marginTop:'40px'}}>
          <thead>
            <tr>
              <th scope="col">Restaurant Id</th>
              <th scope="col">Restaurant Type</th>
              <th scope="col">Date</th>
              <th scope="col">Opening Time</th>
              <th scope="col">Closing Time</th>
              <th scope="col">Price (Rs)</th>
            

            </tr>
          </thead>
          <tbody>
            {this.state.restuarent.map((restuarent,index) =>(
              <tr key={index}>

                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/Restuarent/${restuarent._id}`} style={{textDecoration:'none'}}>
                    {restuarent.RestaurantName}
                    </a>
                    
                    </td>   
                <td>{restuarent.Date}</td>
                <td>{restuarent.OpeningTime}</td>
                <td>{restuarent.Closingtime}</td>
                <td>{restuarent.Price}</td>
            
                <td>
                  <a className="btn btn-warning" href={`/edit/${restuarent._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(restuarent._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}




          </tbody>
        </table>

        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add</a></button>

        

      </div>
    )
    
  }
}