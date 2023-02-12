import React,{useState} from 'react'
import '../App.css'

const Container = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);

    const add_items = () => {
        if(inputData){
        setItems([ ...items, inputData]);
        setInputData('')
        }
    }
    const deleteItems = (ind) => {
        const updatedItems = items.filter((ele,i)=>{
               return i !== ind
        })
        setItems(updatedItems);
    }
  return (
    <>
        <div className='main_div'>
            <div className='label_head'>
            <img src='https://em-content.zobj.net/source/skype/289/memo_1f4dd.png' alt='notes' height='50px' width='50px'/>
            <div className='label'>
                 To Do List
            </div>
            </div>
            <div className='add_items'>
                <input type='text' placeholder="Add your tasks here" 
                 value={inputData}
                 onChange={(event)=>setInputData(event.target.value)}
                />
                <button className='add_btn' onClick={add_items}>Add</button>
            </div>
            <div className='itemsList'>
                    {
                        items.map((item,ind) => <span key={ind} className='list'><li>{item}</li><button className='delete' onClick={()=>deleteItems(ind)}>🚮</button></span>)
                    }
            </div>
        </div>
    </>
  )
}

export default Container