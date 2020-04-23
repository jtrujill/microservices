import express from 'express';

const router = express.Router();

router.post('', (req, resp) => {
    resp.json({id: 1});
});

router.get('', (req, resp) => {
    resp.json([{id: 1, title: 'a test'}]);
});

router.get('/:id((\\d+))', (req, resp) => {
    const ticketId = +req.params.id;

    resp.json({id: ticketId, title: 'a test'});
});

export {router};
