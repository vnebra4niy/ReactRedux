import React from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)

    const withdraw = (cash) => {
        dispatch({type : 'WITHDRAW', payload: cash})
    }

    const deposit = (cash) => {
        dispatch({type : 'DEPOSIT', payload: cash})
    }

    return (
        <div className={'app'}>
            <div style={{fontSize:"3rem"}}>{cash}</div>
            <div style={{display:'flex'}}>
                <button onClick={()=>deposit(Number(prompt()))}>Deposit</button>
                <button onClick={()=>withdraw(Number(prompt()))}>Withdraw</button>
            </div>
        </div>
    )
}

export default App