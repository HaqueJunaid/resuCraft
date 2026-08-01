import prisma from "../config/prisma.js";

export const createResume = async (req, res) => {
    try {
        const { title, content } = req.body;

        const newResume = await prisma.resume.create({
            data: {
                title: title || "Untitled Resume",
                content: content || {},
                userId: req.user.id
            }
        });

        res.status(201).json({ message: "Resume created successfully", resume: newResume });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create resume" });
    }
};

export const getResumes = async (req, res) => {
    try {
        const resumes = await prisma.resume.findMany({
            where: { userId: req.user.id },
            orderBy: { updatedAt: 'desc' }
        });

        res.status(200).json({ resumes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch resumes" });
    }
};

export const getResumeById = async (req, res) => {
    try {
        const { id } = req.params;

        const resume = await prisma.resume.findFirst({
            where: {
                id,
                userId: req.user.id
            }
        });

        if (!resume) {
            return res.status(404).json({ error: "Resume not found" });
        }

        res.status(200).json({ resume });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch resume" });
    }
};

export const updateResume = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        const existingResume = await prisma.resume.findFirst({
            where: { id, userId: req.user.id }
        });

        if (!existingResume) {
            return res.status(404).json({ error: "Resume not found" });
        }

        const updatedResume = await prisma.resume.update({
            where: { id },
            data: {
                ...(title && { title }),
                ...(content && { content })
            }
        });

        res.status(200).json({ message: "Resume updated successfully", resume: updatedResume });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update resume" });
    }
};

export const deleteResume = async (req, res) => {
    try {
        const { id } = req.params;

        const existingResume = await prisma.resume.findFirst({
            where: { id, userId: req.user.id }
        });

        if (!existingResume) {
            return res.status(404).json({ error: "Resume not found" });
        }

        await prisma.resume.delete({
            where: { id }
        });

        res.status(200).json({ message: "Resume deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to delete resume" });
    }
};
