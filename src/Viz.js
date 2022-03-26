import React, { useRef, useEffect } from "react";
import ReactDOM from 'react-dom';
import {select} from "d3";



//import {useData} from './useData'

export const Viz=({x,svgRef,previousx})=>{
  
  const wrapperRef = useRef();

  useEffect(()=>{
  	const svg=select(svgRef.current)
 
      svg
      .selectAll(".teste")
      .data([x], (d,i) => d)
      .join(enter=>
            enter
            .append("text",(d,i)=>d)
            .attr("x", previousx),
            update=>
            update
            .append("text",(d,i)=>d)
            .attr("x", d=>d)
           )
                        
      .attr("class", "teste")
      
      .attr("y", 100)
    	.text((d,i)=>d)
      .transition()
      .attr("x", (d,i)=>d);
    
  },[x])
  

  return (
    <React.Fragment>
      <div ref={wrapperRef}>
      <svg ref={svgRef}></svg>
      </div>
      </React.Fragment>
   
  )
  
  
  //<svg><text x={x} y="100">teste</text></svg>
 
 
  
  
};  
