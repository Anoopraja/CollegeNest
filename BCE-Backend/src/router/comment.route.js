import { Router } from 'express';
import {
    createComment,
    getAllComments,
    getCommentById,
    updateComment,
    deleteComment
} from '../controllers/comment.controller.js';

const router = Router();

router.post('/comment', createComment);     
router.get('/comments', getAllComments);
router.get('/comment/:id', getCommentById);
router.patch('/comment/:id', updateComment);
router.delete('/comment/:id', deleteComment);

export default router;