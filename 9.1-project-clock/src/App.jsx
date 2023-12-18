import './App.css'
import ClockHeading from './components/ClockHeading';
import ClockTimes from './components/ClockTimes';
import Clockslogan from './components/Clockslogan';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return <center>
    <ClockHeading/>
    <Clockslogan/>
    <ClockTimes/>
  </center>
}

export default App;