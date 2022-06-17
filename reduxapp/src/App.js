import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber } from './actions/index';
import { decNumber } from './actions/index';
function App() {
  const mystate=useSelector((state)=>state.changeNumber);
  const dispatch=useDispatch();
  return (
    <>
    <div className="container">
      <h1>counter</h1>
      <div className="quantity">
        <a onClick={()=>dispatch(decNumber())} className="quantity_minus" title="decrement"><span>-</span></a>
        <input type="text" name="quantity" class="quantity_input" value={mystate}/>
        <a onClick={()=>dispatch(incNumber())} className="quantity_plus" title="increment"><span>+</span></a>
      </div>
    </div>
    </>
  );
}

export default App;
