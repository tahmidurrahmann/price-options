import './App.css'
import Axios from './components/Axios/Axios'
import BarChart from './components/BarChart/BarChart'
import NavBar from './components/NavBar/NavBar'
import PieChart from './components/PieChart/PieChart'
import PriceOptions from './components/PriceOptions/PriceOptions'
import RadarChart from './components/RadarChart/RadarChart'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <section className='grid grid-cols-1 lg:grid-cols-3 my-10'>
      <RadarChart></RadarChart>
      <PieChart></PieChart>
      <BarChart></BarChart>
      </section>
      <Axios></Axios>
    </>
  )
}

export default App