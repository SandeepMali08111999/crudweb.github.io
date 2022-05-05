import express from "express"
import studentmodel from "../models/student.js"

class StudentController {

    static createDoc=async (req,res) => {       
        //console.log(req.body)
       try {
        const{name,age,fees}=req.body
        const doc=new studentmodel({
            name:name,
            age:age,
            fees:fees
        })
        //saving Document
        const result=await doc.save()
        //console.log(result)
        res.redirect("/student")
       } catch (error) {
           console.log(error)
       }
    }

    static getAllDOc=async (req,res)=>{
        try {
           const result=await studentmodel.find() 
           res.render("index",{data: result})
           //console.log(result)
        } catch (error) {
            console.log(error)
        }
       
    }

    static editDOc=async (req,res)=>{
        //console.log(req.params.id)
        try {
            const result =await studentmodel.findById(req.params.id)
            //console.log(result)
            res.render("edit",{data:result})
        } catch (error) {
            console.log(error)
        }
       
    }

    
    static updateDOcById=async (req,res)=>{
        // console.log(req.params.id)
        // console.log(req.body)
        try {
            const result= await studentmodel.findByIdAndUpdate(req.params.id,req.body)
        } catch (error) {
            console.log(error)
        }
        res.redirect("/student")
    }

    static deleteDOcById= async(req,res)=>{
         // console.log(req.params.id)
         try {
             const result =await studentmodel.findByIdAndDelete(req.params.id)
             res.redirect("/student")
         } catch (error) {
             console.log(error)
         }
        
    }
}

export default StudentController