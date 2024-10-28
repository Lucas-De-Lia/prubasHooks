import React from 'react';
import ReactDOM from 'react-dom/client';
//import {BrowserRouter} from 'react-router-dom';
import './index.css'
//import { CallBackHook } from './06-memo/CallBackHook'
//import { Padre } from './07-tarea-memo/Padre'
//import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterWithCustimHook } from './01-useState/CounterWithCustimHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-useLayoutEffect/Layout'
//import { Memorize } from './06-memo/Memorize'
//import { MemoHook } from './06-memo/MemoHook'
//import '../src/08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'
//import {MainApp} from './09-useContext/MainApp';
ReactDOM.createRoot(document.getElementById('root')).render(
    <TodoApp/>
)
