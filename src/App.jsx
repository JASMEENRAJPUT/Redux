import {useSelector , useDispatch} from 'react-redux'
import {increment, decrement, reset} from './features/counterSlice';

export default function App(){
  const count = useSelector((state)=> state.counter.count);
  const dispatch = useDispatch();

  return(
    <>
    <h1>{count}</h1>

    <button onClick={()=>dispatch(increment())}>
      Increase
    </button>
    <button onClick={()=>dispatch(decrement())}>
      Decrease
    </button>
    <button onClick={()=>dispatch(reset())}>
      Reset
    </button>
    </>
  )
}