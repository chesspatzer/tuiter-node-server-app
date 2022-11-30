import * as tuitsDao from "./tuits-dao.js";

// import posts from "./tuits.js";
// let tuits = posts;


const TuitController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    // newTuit._id = parseInt(new Date().getTime() + '');
    newTuit.likes = 0;
    newTuit.liked = false;
    // tuits.push(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

// const findTuits = (req, res) => {
//     res.json(tuits);
// }

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}


const updateTuit = async (req, res) => {
    const tuitUpdateID = parseInt(req.params.tid);
    const updates = req.body;
    // const tuitIndex = tuits.findIndex((t) => t._id === tuitUpdateID)
    // tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    const status = await tuitsDao
        .updateTuit(tuitUpdateID,
            updates);

    res.sendStatus(status);
}

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = parseInt(req.params.tid);
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    // tuits = tuits.filter(usr =>
    //     usr._id !== tuitId);
    res.json(status);
}



export default TuitController
