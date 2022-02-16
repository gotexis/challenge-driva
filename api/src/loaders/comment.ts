import DataLoader from 'dataloader'
import { Quote } from '../models/quote'

// [1, 78, 8, 9]
export const createCommentLoader = () =>
  new DataLoader<number, Quote>(async (commentIds) => {
    const comments = await Quote.findByIds(commentIds as number[])
    const commentIdToComment: Record<number, Quote> = {}
    comments.forEach((u) => {
      commentIdToComment[u.id] = u
    })

    const sortedComments = commentIds.map((commentId) => commentIdToComment[commentId])
    // console.log("commentIds", commentIds);
    // console.log("map", commentIdTocomment);
    // console.log("sortedcomments", sortedcomments);
    return sortedComments
  })
