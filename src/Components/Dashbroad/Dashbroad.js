import LineChart from '../LineChart/LineChart'
import Chart from '../Chart/Chart'
import './Dashbroad.css'
import PieCart from '../PieCart/PieCart'



export default function AbcD() {

    return (
      <div>
        <div className='line-chat'>
        <LineChart></LineChart>
        </div>
        <div className='line-chat'>
        <Chart></Chart>
        </div>
        <div className='line-chat'>
        <PieCart></PieCart>
        </div>
      </div>
    );
  }


