import express from 'express';
import Project from '../models/Project.js';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('projecten pagina');
})

router.get('/collection', async (req, res) => {
    try {
        const projecten = await Project.find();
        res.status(200).json(projecten);
    } catch(err) {
        console.log(err);
    }
});

export default router;