import { Router } from "express";
const resumeRouter = Router();
import {resumeModel} from "../models/resume.model.js"

// Get all reusmes
resumeRouter.get("/getAllResumes/", async (req, res) => {
    try {
        // @ts-ignore
        let {id} = req.user;
        let resumes = await resumeModel.find({userId: id});
        return res.status(200).json({ message: "Resumes fetched successfully", resumes });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
})

// Get reusme by id
resumeRouter.get("/getResumeById/:id", async (req, res) => {
    try {
        // @ts-ignore
        let {id} = req.params;
        let resumes = await resumeModel.findOne({_id: id});
        return res.status(200).json({ message: "Resumes fetched successfully", resumes });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
})

// Create resume
resumeRouter.post("/createResume", async (req, res) => {
    // @ts-ignore
    let {id} = req.user;
    // @ts-ignore
    let {title} = req.body;

    try {
        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }

        let resume = await resumeModel.create({
            userId: id,
            title,  
        })

        res.status(201).json({ message: "Resume created successfully", resumeId: resume._id });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }    
})

// Delete resume
resumeRouter.delete("/deleteResume/:id", async (req, res) => {
    // @ts-ignore
    let {id} = req.params;
    try {   
        if (!id) {
            return res.status(400).json({ message: "Resume ID is required" });
        }

        let resume = await resumeModel.findByIdAndDelete(id);
        if (!resume) {
            return res.status(404).json({ message: "Resume not found" });
        }
        return res.status(200).json({ message: "Resume deleted successfully" });
    } catch(error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
})

// Rename resume
resumeRouter.patch("/renameResume/:id", async (req, res) => {
    let {id} = req.params;
    let {title} = req.body;
    try {
       if (!id || !title) {
           return res.status(400).json({ message: "Resume ID & new title is required" });
       }

       let resume = await resumeModel.findOneAndUpdate({_id: id}, {title});
       if (!resume) {
           return res.status(404).json({ message: "Resume not found" });
       }
       return res.status(200).json({ message: "Resume renamed successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
})

export default resumeRouter;