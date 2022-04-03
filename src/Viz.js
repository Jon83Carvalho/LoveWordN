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
           .domain(extent([0,1500]))
           .range([10,screenwidth])
 
      const len=30
      const array=range(len)


      const gap=0.7
      const del=0.05
      const g=svg.append("g")
      
var k=0
      array.map((d,i)=>{

        xml("heart.svg").then(data=>{
         
          
          g.node().append(data.documentElement.childNodes[1])

       
          const img2 = g.select(`image:nth-child(${k+1})`)  

          img2
          .attr("x",`${screenwidth/2-size(previousx)*(1+gap*(k+1))/2}`)
          .attr("y",`${screenheight/2-size(previousx)*(1+gap*(k+1))/2}`)
          .attr("width", size(previousx)*(1+gap*(k+1)))
          .attr("height", size(previousx)*(1+gap*(k+1)))
          .attr("opacity",0.3)
          .transition()
          .delay(()=>{
            if (previousx-x>0){
              return 0//500*(1+del*(len-k))
          } else {
            return 0//500*(1+del*(k))

          }
          })
          .duration(du*(1+gap*del*(k)))
          .attr("width", size(x)*(1+gap*(k+1)))
          .attr("height", size(x)*(1+gap*(k+1)))
          .attr("x",`${screenwidth/2-size(x)*(1+gap*(k+1))/2}`)
          .attr("y",`${screenheight/2-size(x)*(1+gap*(k+1))/2}`)
        
          

          k=k+1
          if(k==len){
            g
            .append("text") 
            .text("Developed by jonas 03/04/2022")
            .attr("x",`${screenwidth/2-90}`)
            .attr("y",`${screenheight-100}`)
            .attr("id","author")
            .attr("fill","gray")
            .attr("style","font-family: 'Yanone Kaffeesatz', sans-serif;")
            
           }
          svg.selectAll("text").raise()
          
        })
        
        
        
        

      })
     
 

  },[x])
  

  return (
    <React.Fragment>
      
      <svg id="images" ref={svgRef} fill="none">

      </svg>
     
      </React.Fragment>
   
  )
  
  
  //<svg><text x={x} y="100">teste</text></svg>
 
 
  
  
};  
