import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Menu from './components/Menu';
import { useState } from 'react';
import AllTask from './components/AllTask';
import CreateNewTask from './components/CreateNewTask';
import MyTasks from './components/MyTasks';

function App() {

  const nav = useNavigate()

  const [data, setData] = useState([
    { taskCompliteName: 'Gilad', desc: 'lasfl lkajsdla', isComplited: false, isUrgentTask: 'yes' }
  ])

  const [currentUserTasks, setCurrentUserTasks] = useState([])

  const [users, setUsers] = useState([{ username: 'Gilad', password: '123456' }, { username: 'Alex', password: '123456' }, { username: 'Dani', password: '123456' }])

  console.log(data);

  // functions

  const addNewTask = (n, d, iU) => {
    let temp = {
      taskCompliteName: n,
      desc: d,
      isComplited: false,
      isUrgentTask: iU
    }
    setData([...data, temp])
  }

  const checkUser = (n, p) => {
    let checkUserName = users.find((val) => {
      return val.username == n && val.password == p;
    });

    if (checkUserName) {
      const currentUserData = data.filter((val) => {

        return val.taskCompliteName == checkUserName.username;
      });

      setCurrentUserTasks(currentUserData);
      nav('/');
    }
    else {
      alert('wrong username');
    }
  };



  // all data object

  const allData = {
    data: data,
    setData: setData,
    addNewTask: addNewTask,
    users: users,
    setData: setData,
    currentUserTasks: currentUserTasks,
    setCurrentUserTasks: setCurrentUserTasks,
    checkUser: checkUser
  }

  return (
    <div className="App">
      <div className='menuComponent'>
        <Menu />
      </div>
      <div className='routes'>
        <Routes>
          <Route path='/' element={<AllTask allData={allData} />} />
          <Route path='/CreateNewTask' element={<CreateNewTask allData={allData} />} />
          <Route path='/MyTask' element={<MyTasks allData={allData} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
