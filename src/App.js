import './App.css';
import Flights from './Components/Flights';
import NavBar from './Components/NavBar';
import flightData from './flightData.json'

function App() {
  return (
    <div className='w-full pb-5 h-screen overflow-scroll flex flex-col justify-start items-start bg-slate-200'>
     <NavBar />
    <div className='w-full px-[10rem] h-auto flex flex-col justify-start items-start'>
      <div className='w-full h-auto py-2 text-2xl font-bold font-serif border-b-2 border-slate-300'>Master Price</div>
      <Flights flightData={flightData}/>
    </div>
    </div>
    
  );
}

export default App;
