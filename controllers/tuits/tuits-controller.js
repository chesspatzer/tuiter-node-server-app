import posts from "./tuits.js";
let tuits = posts;

const TuitController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = parseInt(new Date().getTime() + '');
    newTuit.likes = 0;
    newTuit.liked = false;
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuits = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const tuitUpdateID = parseInt(req.params.tid);
    const updates = req.body;
    const tuitIndex = tuits.findIndex((t) => t._id === tuitUpdateID)
    tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}

const deleteTuit =(req, res) => {
    const tuitId = parseInt(req.params.tid);
    tuits = tuits.filter(usr =>
        usr._id !== tuitId);
    res.sendStatus(200);
}



export default TuitController
