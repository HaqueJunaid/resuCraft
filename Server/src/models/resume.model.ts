import mongoose from "mongoose";
const { Schema } = mongoose;

const PersonalInfoSchema = new Schema({
  full_name: { type: String },
  email: { type: String },
  phone: { type: String },
  location: { type: String },
  linkedin: { type: String },
  website: { type: String },
  profession: { type: String },
  image: { type: String, default: null } 
}, { _id: false }); 


const ExperienceSchema = new Schema({
  company: { type: String },
  position: { type: String },
  start_date: { type: String }, 
  end_date: { type: String },
  description: { type: String },
  is_current: { type: Boolean, default: false }
});


const EducationSchema = new Schema({
  institution: { type: String },
  degree: { type: String },
  field: { type: String },
  graduation_date: { type: String },
  gpa: { type: String }
});


const ProjectSchema = new Schema({
  name: { type: String },
  type: { type: String },
  description: { type: String }
});


const ResumeSchema = new Schema({
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', // Reference to a User collection
    required: true 
  },
  title: { type: String, default: 'My Resume' },
  personal_info: { type: PersonalInfoSchema, default: {} },
  professional_summary: { type: String },
  
  skills: [{ type: String }],

  experience: [ExperienceSchema],
  education: [EducationSchema],
  project: [ProjectSchema],

  public: { type: Boolean, default: false },
  template: { type: String, default: 'minimal-image' },
  accent_color: { type: String, default: '#14B8A6' }

}, { 
  timestamps: true
});


export const resumeModel = mongoose.model('Resume', ResumeSchema);