import React, { useRef, useEffect } from "react";
import ReactDOM from 'react-dom';
import {select,xml,scaleLinear,extent,range} from "d3";



//import {useData} from './useData'

export const Viz=({x,svgRef,previousx})=>{
  
  const wrapperRef = useRef();

  useEffect(()=>{
    const du=5000
  	const svg=select(svgRef.current)
    const size=scaleLinear()
       .domain(extent([10,500]))
       .range([10,900])
      svg
        .attr("width","100%")
        .attr("height","100vh")
    
 
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
      
//      .attr("y", 100)
//    	.text((d,i)=>d)
//      .transition()
//      .duration(du)
 //     .attr("x", (d,i)=>d);
      
  //    xml("heart.svg").then(data=>{
  //      svg.node().append(data.documentElement.childNodes[1])
        
  //      svg.selectAll("#Camada_1")
        
  //      .attr("x",`${400-size(previousx)/2}`)
  //      .attr("y","100")
  //      .attr("width", size(previousx))
 //       .transition()
 //       .duration(du)
//        .attr("width", size(x))
//        .attr("x",`${400-size(x)/2}`)

        
        
 //     })
      const array=range(10)
      const gap=0.7
      const screenwidth=+select("#root").style("width").slice(0,-2)
      const screenheight=+select("#root").style("height").slice(0,-2)
      

      array.map((d,i)=>{

        xml("heart.svg").then(data=>{
          svg.node().append(data.documentElement.childNodes[1])
          
          const img2 = svg.select(`image:nth-child(${d+1})`)
          img2
         
          .attr("x",`${screenwidth/2-size(previousx)*(1+gap*(d+1))/2}`)
          .attr("y",`${screenheight/2-size(previousx)*(1+gap*(d+1))/2}`)
          .attr("width", size(previousx)*(1+gap*(d+1)))
          .attr("height", size(previousx)*(1+gap*(d+1)))
          .attr("opacity",0.3)
          .transition()
          .delay(500*(1+gap*(d+1)))
          .duration(du*(1+gap*0.8*(d+1)))
          .attr("width", size(x)*(1+gap*(d+1)))
          .attr("height", size(x)*(1+gap*(d+1)))
          .attr("x",`${screenwidth/2-size(x)*(1+gap*(d+1))/2}`)
          .attr("y",`${screenheight/2-size(x)*(1+gap*(d+1))/2}`)

          setTimeout(() => { }, 300);
        })

      })
      console.log(+select("#root").style("height").slice(0,-2))
      
    
      
  },[x])
  

  return (
    <React.Fragment>
      
      <svg id="images" ref={svgRef}></svg>
      
      </React.Fragment>
   
  )
  
  
  //<svg><text x={x} y="100">teste</text></svg>
 
 
  
  
};  
