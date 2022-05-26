import React, {Fragment,useState} from "react";
import Profile from "./components/Profile";
import Card from './components/Card';
import './index.css';
import data from './data';
import img from './images/images';




function App() {
  const [timeframe, setTimeFrame] = useState('daily') 
  
  const filterOften = (selectedOften) => {

    setTimeFrame(selectedOften.value);
    
  }
  
  
  return (
    <Fragment>
      <Profile onComingOftenData={filterOften}/>
      <div className="card">
        
        {/* <Card title={data[0].title} img={img.work} time={timeframe}/>
        <Card title={data[1].title} img={img.play} time={timeframe}/>  
        <Card title={data[2].title} img={img.study} time={timeframe}/>
        <Card title={data[3].title} img={img.exercise} time={timeframe}/>
        <Card title={data[4].title} img={img.social} time={timeframe}/>
        <Card title={data[5].title} img={img.selfCare} time={timeframe}/>  */}

        { data.map( (val, index) => {
            const image = val.title
            return (
                <Card 
                  title={val.title} 
                  img={img[image]} 
                  key={index} 
                  time={data[index].timeframes[timeframe]} 
                  often={timeframe}/>
            )
            })
        } 
      </div>
    </Fragment>
  );
}

export default App;


