'use strict';


const svg = d3.select("svg");//css selectors

svg.style("background-color","red");

const height = parseFloat(svg.attr("height"));
const width = parseFloat(svg.attr("width"));
const cy = height/2;
const cx = width/2;
const r = cy;
const eyeSpacing = 100;
const eyeOffset = -40
const eyeRadius = 40;
const eyeBrowWidth = 80;
const eyeBrowHeight = 15;
const eyebrowOffset = -70;

const dg = Math.PI / 180;
// time 400 + eyebrows(300 + 300)  + eye wink(200+200) + mouth (250+250)
//lets say group is a point .
const g = svg.append("g")
    .attr("transform",`translate(${cx},${cy})`);
    
const circle = g.append("circle")
    .attr("r",r)
    .attr("fill","yellow")
    .attr("stroke","black");
    
const eyesg = g.append("g")
    .attr("transform",`translate(0,-70)`);
    
const leftEye = eyesg.append("circle")
    .attr("r",r/10)
    .attr("cx",-100);
    
const rightEye = eyesg.append("circle")
    .attr("r",r/10)
    .attr("cx",+100);
    
const mouthG = g.append("g")
    .attr("transform",`translate(0,0)`);;
mouthG.transition().duration(1400)
    .transition().duration(250)
        .attr("transform",`translate(0,40)`)
    .transition().duration(250)
        .attr("transform",`translate(0,0)`);

const mouth = mouthG.append("path")
        .attr("d",d3.arc()({
            innerRadius:100,
            outerRadius:110,
            startAngle:Math.PI/2,
            endAngle:(3*Math.PI)/2,
        }))
    .transition().duration(1400)
    .transition().duration(250)
        .attr("d",d3.arc()({
            innerRadius:10,
            outerRadius:30,
            startAngle:Math.PI * 1/2 ,
            endAngle:Math.PI * 3/2 ,
        }))
    .transition().duration(250)
        .attr("d",d3.arc()({
            innerRadius:100,
            outerRadius:110,
            startAngle:Math.PI/2,
            endAngle:(3*Math.PI)/2,
        }))
    ;
    
    
const eyebrowG = eyesg.append("g")
    .attr("transform",`translate(0,-45)`);
eyebrowG
    .transition().duration(400)
    .transition().duration(300)
        .attr("transform",`translate(0,-90)`)
    .transition().duration(300)
        .attr("transform",`translate(0,-45)`)
    ;

const leftEyeBrow = eyebrowG
    .append("rect")
        .attr("width",eyeBrowWidth)
        .attr("height",eyeBrowHeight)
        .attr("x",-eyeSpacing-eyeBrowWidth/2)
        .transition().duration(1000)
        .transition().duration(200)
        .attr("height",eyeBrowHeight+80)
        .transition().duration(200)
        .attr("height",eyeBrowHeight)
        ;

const rightEyeBrow = eyebrowG
    .append("rect")
        .attr("width",eyeBrowWidth)
        .attr("height",eyeBrowHeight)
        .attr("x",eyeSpacing-eyeBrowWidth/2)
        ;