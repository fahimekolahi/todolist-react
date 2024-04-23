
import { useState } from 'react';
import './App.css';
import TodoBox from './components/todobox';
import add from './components/todobox/plus-lg.svg';


// import image from './GettyImages-484576000-c-bc46733.webp'
function App() {

  const [inputValue, setInputValue] = useState("")

  const [todoList, setTodoList] = useState([
    { id: 0, todoText: "shoping" },
    { id: 1, todoText: "watching movie" }

  ])


  function btnAdd() {
    setTodoList([...todoList, { id: Date.now() * Math.random(), todoText: inputValue }])
  }



  function deleteIt(id) {
    setTodoList(todoList.filter(item => item.id !== id))
  }






  return (
    <>
      <header className='pl-2 w-full border border-purple-500 rounded-[4px] border-4'>
        <h1 className="text-[#353347] text-left text-[1.5rem] sm:text-[2.5rem] pt-1 ">TO DO LIST</h1>

      </header>


      <div className="w-full h-full  ">







        <div className='  flex flex-col justify-center'>

          <div className="w-[85%] md:w-[65%] h-full mx-auto flex justify-center gap-2 rounded-[5px] my-[0.75rem] py-[1.25rem]">
            <input className="rounded-[5px] w-[70%] md:w-[60%] md:text-[1.5rem] bg-[#E5E7EB] border border-[#BF7DF7]" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button className="text-white bg-gradient-to-r from-[#E5E7EB] to-[#3D4958] rounded-[5px] p-2" onClick={btnAdd}><img src={add} alt='add'/></button>

          </div>
          <div className=' w-[90%] py-2 mt-[-10px] bg-[#EAD5FE] mx-auto mt-4 mb-2'>
            <p className='text-center md:text-[1.7rem]'>MY TASKS</p>
          </div>




          <div className="todoWrapper">
            {todoList.map(item => (
              <TodoBox id={item.id} deleteFunction={deleteIt} todoText={item.todoText} />
            ))}





          </div>

        </div>























      </div>


    </>
  );
}

export default App;
