import React, { useState,useEffect } from 'react'
import './Sidebar.js';



export default function Sidebar(props) {

  const[Species,setSpecies]=useState([]);
  const[Gender,setGender]=useState([]);
  const[Origin,setOrigin]=useState([]);



//Function to Find Distinct values from the array which is recieving as props i.e. props.results...
  const uniqueValues = array => {
    let map = new Map();
    array.forEach(value => map.set(value, value));
    return [...map.values()];
  };


 //Fetching Species ..... 
// Fetching and creating new array from the results array for only species items of each ids... 

// here   props.data.results.map(function(element){
  //   return element.species;
  // });   this is actually giving new array ...of species with duplicate values..

  const SpeciesArray = props.data.results.map((element)=>{
    return element.species;
  });

  const uniqueSpeciesArray = uniqueValues(SpeciesArray);

  // setSpecies(uniqueSpeciesArray);
  // console.log('Unique Species Array...',uniqueSpeciesArray);





 //Fetching Gender ..... 

  const GenderArray = props.data.results.map((element)=>{
    return element.gender;
  });

  const uniqueGenderArray = uniqueValues(GenderArray);
  // setGender(uniqueGenderArray);

  // console.log('Unique Gender Array...',uniqueGenderArray);




 //Fetching Origin ..... 
//this is needed in case of origin as results[origin] i.e. for nested array ...

  const newArr=[];
  const originExistingArray=props.data.results.forEach((temp)=>{
      newArr.push(temp.origin);
  });

  const OriginArray =newArr.map(function(element){
    return element.name;
  });

  const uniqueOriginArray = uniqueValues(OriginArray);
  // setOrigin(uniqueOriginArray);

  //Not setting the state without useeffect becuase it will run the infinite loops ..



  useEffect(() => {
    setSpecies(uniqueSpeciesArray);
    setGender(uniqueGenderArray);
    setOrigin(uniqueOriginArray);

 }, [])


 console.log('Species Array',Species);
 console.log('Gender Array',Gender);
 console.log('Origin Array',Origin);




  // console.log("Sidebar ...",props)
  return (

    <div className="container" style={{width:'20%',backgroundColor: '#161B22',height:'100%',color:'white'}}>
           <div className="container" style={{position:'fixed',width: '20%',height:'100vh'}}>

                  <h1 style={{marginTop: '12vh',marginLeft:'3vw'}}>Filters</h1>

                      
                  <div style={{alignItems:'center',marginTop: '5vh',height: '100%'}} >

                      <div className="p-2" style={{border: '2px solid black',height:'25%',width:'100%'}}>
                        
                      <h5><b>Species</b></h5>

                            <div className="form-check mb-1">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                Human
                                </label>
                            </div>
                            <div className="form-check mb-1">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                Alien
                                </label>
                            </div>
                            
                            
                      
                      </div>


                      <div className="p-2" style={{border: '2px solid black',height:'25%',width:'100%'}}>

                      <h5><b>Gender</b></h5>

                            <div className="form-check mb-1">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Male
                                </label>
                            </div><div className="form-check mb-1">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Female
                                </label>
                            </div>



                      </div>



                      
                      <div className="p-2" style={{border: '2px solid black',height:'25%',width:'100%'}}>
                        
                      {/* <h5 className='text-center'>Origin</h5>
                            <ul style={{listStyleType:'disc'}} >
                              <li  className="li-container" >Unknown</li>
                              <li className="li-container" >Earth (C-137)</li>
                              <li className="li-container" >Earth (Replacement Dimension)</li>
                            </ul> */}

                            <h5><b>Origin</b></h5>


                            <div className="form-check mb-1">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                Unknown
                                </label>
                            </div>
                            <div className="form-check mb-1">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                Earth(C-137)
                                </label>
                            </div>
                            <div className="form-check mb-1">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                Earth(RD)
                                </label>
                            </div>
                            
                      </div>

                  </div>
           </div>
     </div>
  )
}

