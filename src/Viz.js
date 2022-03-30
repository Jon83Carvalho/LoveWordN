import React, { useRef, useEffect } from "react";
import ReactDOM from 'react-dom';
import {select,xml} from "d3";



//import {useData} from './useData'

export const Viz=({x,svgRef,previousx})=>{
  
  const wrapperRef = useRef();

  useEffect(()=>{
  	const svg=select(svgRef.current)

      svg
        .attr("width","100%")
        .attr("height","1000px")
        
 
   //   svg
   //   .selectAll(".teste")
   //   .data([x], (d,i) => d)
   //   .join(enter=>
   //         enter
   //         .append("text",(d,i)=>d)
   //         .attr("x", previousx),
   //         update=>
   //         update
   //         .append("text",(d,i)=>d)
   //         .attr("x", d=>d)
   //        )
//      .attr("class", "teste")
      
      .attr("y", 100)
    	.text((d,i)=>d)
      .transition()
      .duration(2000)
      .attr("x", (d,i)=>d);
      
      xml("heart.svg").then(data=>{
        svg.node().append(data.documentElement.childNodes[1])
        
        svg.selectAll("#Camada_1")
        .attr("height","400px")
        .attr("x",`${400-previousx/2}`)
        .attr("y","100")
        .attr("width", previousx)
        .transition()
        .duration(10000)
        .attr("width", x)
        .attr("x",`${400-x/2}`)
        
        
      })
      
    
      
  },[x])
  

  return (
    <React.Fragment>
      <div >
      <svg ref={svgRef}></svg>
      </div>
      </React.Fragment>
   
  )
  
  
  //<svg><text x={x} y="100">teste</text></svg>
 
 
  
  
};  
