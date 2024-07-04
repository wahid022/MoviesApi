import React, { useState,useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Main.css';

export default function Main() {

      const[results,setResults]=useState([]);

      
      const fetchingApi = async ()=> {
        const url = 'https://rickandmortyapi.com/api/character/'; 
        
        let data = await fetch(url);
        
        let parsedData = await data.json()
        setResults(parsedData.results);  
        console.log('length : ',results.length);
        
        
        

    }


    useEffect(() => {
      fetchingApi(); 
      // eslint-disable-next-line
  }, [])


    
  
  return (

    



    <div className="d-flex flex-row" style={{backgroundColor:'#0D1117'}}>
    {/* <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}

    <Sidebar data={{results}}></Sidebar>

    


    <div className='container' style={{ width:'80%',backgroundColor: '#0C0717',color:'white'}}>

        <h1  style={{marginTop: '100px',marginLeft:'3vw',fontSize: '22px'}}>Selected Filters</h1>
        
        
        <div className="container filter-container" style={{position:'static'}}>
            <ul className="list-group" style={{flexDirection:'row',width:'auto',height: '4vh'}}>
                
               
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{marginLeft:'1vw',borderRadius: '20px 20px 20px 20px',backgroundColor:'#12193E',color:'white'}}>
                  Item1
                  <a href="#"><span><i className="fa-solid fa-square-xmark"></i></span></a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{marginLeft:'1vw',borderRadius: '20px 20px 20px 20px',backgroundColor:'#12193E',color:'white'}}>
                  Item2
                  <a href="#"><span><i className="fa-solid fa-square-xmark"></i></span></a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{marginLeft:'1vw',borderRadius: '20px 20px 20px 20px',backgroundColor:'#12193E',color:'white'}}>
                  Item3
                  <a href="#"><span><i className="fa-solid fa-square-xmark"></i></span></a>
                </li>
                
              </ul>
        </div>





        <div className="container search-container my-3" style={{position:'static'}}>
            <form className="form-inline d-flex">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{marginLeft: '0.5vh'}}>Search</button>
            </form>
        </div>


      <div className="container d-flex flex-row flex-wrap justify-content-around " style={{color:'white'}}>

        {results.map((element)=>{

          console.log(element);

            return  <div className="card border-button" key={element.id} style={{width: '18rem',margin: '20px',backgroundColor:'#0C1027'}}>
                                      <div className="container image-container my-3" style={{height:'30%'}}>
                                          <img className="card-img-top" src={element.image} alt="Card image cap"/>

                                      </div>
                                      <div className="card-body" style={{height:'20%'}}>
                                        <h5 className="card-title">{element.name}</h5>
                                        <p className="card-text">Some quick example</p>
                                      </div>
                                      <div className="container" style={{height:'50%'}}>
                                          <ul className="list-group list-group-flush">
                                            <li className="list-group-item" style={{backgroundColor:'#12193E',color:'white'}}><span>Gender</span> <span className='s-left'>{element.gender}</span></li>
                                            <li className="list-group-item" style={{backgroundColor:'#12193E',color:'white'}}><span>Status</span> <span className='s-left'>{element.status}</span></li>

                                            <li className="list-group-item" style={{backgroundColor:'#12193E',color:'white'}}><span>Species</span> <span className='s-left'>{element.species}</span></li>
                                            <li className="list-group-item" style={{backgroundColor:'#12193E',color:'white'}}><span>Origin</span> <span className='s-left'>{element.origin.name}</span></li>
                                            <li className="list-group-item" style={{backgroundColor:'#12193E',color:'white'}}><span>Gender</span> <span className='s-left'>{element.gender}</span></li>
                                                            
                                          </ul>

                                      </div>
                                      
                                </div>         

      })}

      </div>
  </div>



    // </div>
  )
}
