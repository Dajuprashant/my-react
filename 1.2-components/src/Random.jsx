function Random(){
  let random = Math.random()*100;

  return <h3 style={{'background-color':'skyblue'}}>
    Random number is : {Math.round(random)}
  </h3>
}

export default Random;