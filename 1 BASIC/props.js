import './App.css';


const Person = (unique) => {
  return (
    <>
      <h1>Name : {unique.name}</h1>
      <h1>Age : {unique.age}</h1>
      <h1>Address : {unique.add}</h1>
    </>
  )
}

const App =() =>{
  const name="sanket";
  const condition = true;

  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      <h1>{condition ? name : "else"}</h1>
      <Person 
      name={'Sanket'} 
      age={50} 
      add={"pune"}
      />
      <Person name={'abc'} age={20} add={"Mumbai"}/>
      <Person name={'xyz'} age={40} add={"Delhi"}/>
        
      
    </div>
  );
}

export default App;
