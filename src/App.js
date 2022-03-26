//this code is eniely based on the developmet made in youtube video https://www.youtube.com/watch?v=lx5k8oQHaJQ
//by "the Muratorium"
import React, {useState,useRef,useEffect} from 'react'
import {Viz} from './Viz'
import useInterval from "./useInterval";
import {csv,csvParse} from 'd3';
import useSWR, {SWRConfig,useSWRConfig} from 'swr'
import axios from 'axios';
import { filerecords } from './filerecord';

const rawdata=[{"count":5000,"max":0},{"count":5000,"max":100}];

filerecords('teste');

var csvUrl

csvUrl='https://raw.githubusercontent.com/Jon83Carvalho/DataAndArt/main/LoveWord.csv'
csvUrl='/data/data.json'


const fetcher = async (url) => {
  
  const request= await axios.get(url).then(res=>res.data)

const resp= await request

  return resp;
};



export const App=()=>{
  const iteration=useRef()
  const [start, setStart]   = useState(false);
  const respdata=useRef()
  const previousdata=useRef()
  const svgRef = useRef();
    
  const {data} = useSWR(csvUrl,fetcher)

  function usePrevious (value){
    const ref=useRef()
  useEffect(()=>{
    ref.current=value
  },[value]);

  return ref.current

}

////////

//////////////
console.log("data",data)


useEffect (()=>{
  iteration.current=1

})

if(typeof data==='undefined'& typeof iteration.current==='undefined'){
  respdata.current=rawdata[0]
  
}else{
  previousdata.current=data
}

console.log("current",respdata.current)
//const previousdata= usePrevious(respdata.current)





console.log("previous",previousdata)
  
  if (!data) {return <div>loading...</div>}
    

respdata.current=data

  //useInterval(() => {
  //  if (start) { 
  //  console.log("teste");
  // respdata=csvParse(data)
  //  mutate(csvUrl)
  //  }
  //}
  //  , 2000);


//respdata=csvParse(data)
//if(iteration===1){

// setpData(respdata.max)

//}


//setIteration(iteration + 1);
console.log("ACTUAL",data,"PREVIOUS",previousdata)



//

    
//      if (start) {
      
      
 //     setpData(data[0].max)


//      csvUrl='https://raw.githubusercontent.com/Jon83Carvalho/DataAndArt/main/LoveWord.csv?v='+ Math.random()*100+makeid(Math.floor(Math.random()*10)*Math.floor(Math.random()*10))
          
   		//csv(csvUrl,row).then(setData);
      
      
//      if(data) {
//          console.log(data[0],csvUrl)
     
///      }
      

//      setIteration(iteration + 1);

///    
  
  return (

  	<>
    
    
    
    <Viz x={respdata.current.max} svgRef={svgRef} previousx={previousdata}/>
    
      <button onClick={() => setStart(!start)}>
        {start ? "End Animation" : "Start Animation"}
      </button>
      
    </>
    
  );
}

//export const App=function(){
//  const [data,setData]=useState(initialdata);
//  return <Viz/>
//}
