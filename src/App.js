//this code is eniely based on the developmet made in youtube video https://www.youtube.com/watch?v=lx5k8oQHaJQ
//by "the Muratorium"
import React, {useState,useRef,useEffect} from 'react'
import {Viz} from './Viz'
import {csv,csvParse} from 'd3';
import useSWR, {SWRConfig,useSWRConfig} from 'swr'
import axios from 'axios';
import { laggy } from './laggy';


const rawdata=[{"count":5000,"max":0},{"count":5000,"max":100}];

var csvUrl




csvUrl='https://raw.githubusercontent.com/Jon83Carvalho/DataAndArt/main/LoveWord.csv'
csvUrl='/data/data.json'


const fetcher = async (url) => {
  
  const request= await axios.get(url).then(res=>res.data)

const resp= await request

  return resp;
};

//localStorage.setItem('pdata', 'teste')

export const App=()=>{
  const iteration=useRef()
  const [start, setStart]   = useState(false);
  const previousdata = useRef();
  const respdata=useRef()
  
  const svgRef = useRef();
  

  const {data} = useSWR(csvUrl,fetcher,{
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateOnMount:true,
    use:[laggy]
  })


previousdata.current=localStorage.getItem('pdata')
if (previousdata.current===null){
  localStorage.setItem('pdata',`count,max\n${rawdata[0].count},${rawdata[0].max}`);
  previousdata.current=localStorage.getItem('pdata');
}
console.log(previousdata.current)
previousdata.current=csvParse(previousdata.current,
  (d)=>{
    d.max=+d.max;
     return d}
     )

  
if (!data) {return <div></div>}

respdata.current=data
localStorage.setItem('pdata', `count,max\n${respdata.current.count},${respdata.current.max}`);



if(typeof data!=='undefined'){
  console.log("ACTUAL",data.max,"PREVIOUS",previousdata.current[0].max)
  return (
    
  	<>
    <Viz x={respdata.current.max} svgRef={svgRef} previousx={previousdata.current[0].max}/>
      <button onClick={() => setStart(!start)}>
        {start ? "End Animation" : "Start Animation"}
      </button>
    </>
  );}
}

//export const App=function(){
//  const [data,setData]=useState(initialdata);
//  return <Viz/>
//}
