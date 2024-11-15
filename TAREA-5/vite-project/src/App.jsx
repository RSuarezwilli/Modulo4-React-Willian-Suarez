import { useState } from 'react';
import './App.css'
import FormComponent from './form/formComponent';
import HomePage from './page/HomePage';


function App() {

 const [user,  setUser]= useState( [ ] );
 console.log(user,'codigo');
return (
    <div>
      <FormComponent setUser={setUser}/>
      <HomePage user={user} />
    </div>
    
  )
}

export default App