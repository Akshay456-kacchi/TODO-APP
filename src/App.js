// import logo from './logo.svg';
import './App.css';
import {Footer} from './Mycomponent/Footer';
import Header from './Mycomponent/Header';
import Todos  from './Mycomponent/Todos';


function App() {

  const onDelete  = (todo) => {
    console.log('I am on Delete',todo)
  }
 
  let todo = [
    {
      sno: "001",
      title:"Go to The Market",
      desc:'you need to go Vegatable Market'
    },
    {
      sno: "002",
      title:"Go to The Mall",
      desc:'you need to go Mall'
    },
    {
      sno: "003",
      title:"Go to The Bike Showroom",
      desc:'you need to go bike showroom'
    },
  ]
  return (
   <>
    {/* <Header title= 'Ajay Fish Merchant' searchBar={true}/>
    <Todos todos ={todos} onDelete={onDelete}/>         
    <Footer/> */}
    
   <Header title ="sweet shop" searchBar ={true}/>
   <Todos  todo ={todo}  onDelete ={onDelete}/>
   <Footer/>
   
  </>
  )
}

export default App;
