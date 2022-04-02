import React, { useRef, useEffect } from "react";
import ReactDOM from 'react-dom';
import {select,xml,scaleLinear,extent,range} from "d3";



//import {useData} from './useData'

export const Viz=({x,svgRef,previousx})=>{
  
  const wrapperRef = useRef();
  

  

  useEffect(()=>{
    const du=5000
  	const svg=select(svgRef.current)
    

     svg
       .attr("width","100%")
       .attr("height","100vh")

        const screenwidth=+select("#root").style("width").slice(0,-2)
        const screenheight=+select("#root").style("height").slice(0,-2)
          
        const size=scaleLinear()
           .domain(extent([0,150]))
           .range([20,screenwidth])
 

      const array=range(10)


      const gap=0.7
      console.log(array)
var k=0
      array.map((d,i)=>{

        xml("heart.svg").then(data=>{
          svg.node().append(data.documentElement.childNodes[1])
          const img2 = svg.select(`image:nth-child(${k+1})`)  

          img2
          .attr("x",`${screenwidth/2-size(previousx)*(1+gap*(k+1))/2}`)
          .attr("y",`${screenheight/2-size(previousx)*(1+gap*(k+1))/2}`)
          .attr("width", size(previousx)*(1+gap*(k+1)))
          .attr("height", size(previousx)*(1+gap*(k+1)))
          .attr("opacity",0.3)
          .transition()
          .delay(500*(1+gap*(k+1)))
          .duration(du*(1+gap*0.8*(k+1)))
          .attr("width", size(x)*(1+gap*(k+1)))
          .attr("height", size(x)*(1+gap*(k+1)))
          .attr("x",`${screenwidth/2-size(x)*(1+gap*(k+1))/2}`)
          .attr("y",`${screenheight/2-size(x)*(1+gap*(k+1))/2}`)
        
          k=k+1
          console.log(k)
        })
        
        

      })

      


  },[x])
  

  return (
    <React.Fragment>
      
      <svg id="images" ref={svgRef}></svg>
      
      </React.Fragment>
   
  )
  
  
  //<svg><text x={x} y="100">teste</text></svg>
 
 
  
  
};  
