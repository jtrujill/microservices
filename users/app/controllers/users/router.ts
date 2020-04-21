import express from 'express';

const router = express.Router();

router.post('/', (req, resp) => {
    resp.json({id: 1});
});

router.get('/:id((\\d+))', (req, resp) => {
    const user_id = +req.params.id;

    resp.json({id: user_id, first_name: 'bob', last_name: 'billy'});
});

export {router};
