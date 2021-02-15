import React  from 'react'

const CheckBox = ({setDone,setUndone}) => {
    

    return (
        <div>
            <input type='checkbox' onChange={(e)=>setDone(e.target.checked)}/>
            <label>isDone</label>
            <input type='checkbox' onChange={(e)=>setUndone(e.target.checked)}/>
            <label>unDone</label>
            
        </div>
    )
}

export default CheckBox

