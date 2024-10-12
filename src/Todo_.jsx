import React, { useState } from 'react'

function Todo() {
    let [entered, setEntered] = useState('')
    let [display, setDisplay] = useState([])

    let [taskcomplete,setTaskcomplete] = useState([])

    let [edit,setEdit] = useState();
    
    let [edited,setEdited] = useState('');


    function onChangehandle(e) {
        setEntered(e.target.value)
    }
    function onClickhandle() {
        setDisplay([...display,entered])
        setEntered('');
        
    }

    function onClickHandler2(i){
        display.splice(i,1)
        setDisplay([...display])

    }

    function onClickHandler3(j){
        
        let arr=[...display]
        let completed_item=arr.at(j)
        setTaskcomplete(completed_item)

        display.splice(j,1)
        setDisplay([...display])

    }

    function onClickEditor(i) {
        setEdit(i)
    }

    function onChangehandle4(f){
        setEdited(f.target.value)
    }

    function onClickEdited(k){
        display.splice(k,1,edited)
        setEdited([...display].join(''))
        setEdited('');
        setEdit(100000);

    }

    
    return (
        <>

        <div className='flex justify-center items-center h-[75vh]'>
        <div className='todo_container'>

            <div className='flex justify-center'><h2 className='text-[35px] font-[350] text-[#3b3bff]'>Todo List App</h2></div>
        
        <div className='flex gap-[35px]'>

        <input className='input_box' type="text" onChange={(e) => onChangehandle(e)} value={entered} />
        <button className='button_add' onClick={() => onClickhandle()}>Add +</button>
        </div>
            {
                display.map((ele,ind)=>{
                    return(
                        <div className='added_item_container'>
                            <div className='added_item_div'>
                            
                            <div className='flex '>
                            <h2 className='added_item'>
                                {ele}</h2> {edit== ind? <><input className='input_2' type="text" onChange={(f) => onChangehandle4(f)} value={edited} /> <button onClick={()=>onClickEdited(ind)}>✅</button> <button onClick={()=> onClickEditor()}>❎</button></> 
                                : <></> }
                            </div>
                            
                            <div className='flex items-center'>
                                <button className='edit_butt' onClick={()=> onClickEditor(ind)}>Edit</button>
                            </div>

                            <div className='flex gap-[15px]'>    
                            <img className='h-[32px]' onClick={()=> onClickHandler3(ind)} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/480px-Eo_circle_green_white_checkmark.svg.png" alt="" />
                            <img className='delete_item' onClick={()=> onClickHandler2(ind)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf0dbGKz3N9aq1XRqjwjG6SZ5JSnGgMTXADg&s" alt="" />
                            </div>
                        </div>  
                        </div>
                    )
                })
            }
            
            <div className='h-[2px] bg-black'></div>

            <div className='task_com'>
            <div>{taskcomplete}</div>
            </div>

        </div>
        </div>
        </>
    )
}
export default Todo;