import express, { response } from "express";
import { request } from "http";
const app =express();

const students=[
{
    id: 1,
    name: "ahmed",
    city: "shibeen"
} ,
{
    id: 2 ,
    name: "mohamed" ,
    city: "sadat_city" ,
} ,
{
    id:3 ,
    name: "nader" ,
    city:"sharm_elsheikh" ,
}
,{
    id: 4,
    name: "sameh",
    city: "el fayoum"
} ,
{
    id: 5,
    name: "asser",
    city: "shibeen"
} ,
{
    id: 6,
    name: "zeiad",
    city: "shibeen"
} ,

];
//console.log(students)
const studentfunction=(request,response)=>{
    let output ="<ol>";
    for (let i=0;i<students.length;i++){
        const student= students[i];
        output+="<li style=font-size:30px;font-weight:bold>"+student.name+"</li>"
    }
    output+= "</ol>";
    response.send(output);

}
app.get("/student",studentfunction);
app.listen(9000);