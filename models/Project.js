import mongoose from 'mongoose';

const _projectenSchema = new mongoose.Schema({
    _sector: { type: String },
    project: { type: String },
    title: { type: String },
    description: { type: String },
    keywords: { type: [String] },
    video: { type: Boolean },
    url: { type: String },
    tech: { type: [String] },
}, { collection: '_projecten' });

const Project = mongoose.model('Project', _projectenSchema);
export default Project;
