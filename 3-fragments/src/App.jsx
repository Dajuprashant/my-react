// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


// {/* <React.Fragment></React.Fragment> */} 
function App(){
  let foodItems=['Milk','Meat','Eggs','Green-vegetables','salad']
  // let foodItems=[]
  return <>
    <h1 className='head'>Healthy food</h1>
    {foodItems.length===0 ? <h3>I am still hungry</h3>: null};
    <ul className="list-group">
      {/* map method */}
      {foodItems.map((item)=>(<li key={item} className="list-group-item p-items">{item}</li>))}
  {/* <li class="list-group-item">Milk</li>
  <li class="list-group-item">meat</li>
  <li class="list-group-item">Eggs</li>
  <li class="list-group-item">green-vegetables</li>
  <li class="list-group-item">salad</li> */}
</ul>

  </>
}

export default App;