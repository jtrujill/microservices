import express from 'express';

const router = express.Router();

router.post('/', (req, resp) => {
    resp.json({id: 1});
});

router.get('/:id((\\d+))', (req, resp) => {
    const ticketId = +req.params.id;

    resp.json({id: ticketId});
});

export {router};
