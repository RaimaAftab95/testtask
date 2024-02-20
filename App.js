import React from 'react';
import Input from './components/Input';
import List from './components/List';
import  { useSelector } from "react-redux";
// import './App.css';

function App() {

  const userData = useSelector ((state) => state.userData);
  return (
    <div className="App">
      <header className="App-header">
      <h1 className='text-center'>Github user Search</h1>
      </header>
      <main>
        <Input />
        {userData && <List userList={[userData]} /> }
      </main>
    </div>
  );
}

export default App;
