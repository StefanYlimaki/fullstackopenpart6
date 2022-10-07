import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { orderBy } from "lodash"
import store from '../store'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const filteredAnecdotes = anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))

  const handleVote = async (id) => {
    const anecdotes = store.getState().anecdotes
    const anecdote = anecdotes.find(a => a.id === id)
    const changedAnecdote = {...anecdote, votes: anecdote.votes + 1}
    dispatch(voteAnecdote(changedAnecdote))
    dispatch(setNotification(`you voted '${anecdote.content}'`, 2))
  } 

  const sortedAnecdotes = orderBy(filteredAnecdotes, ['votes'], ['desc'])

  return(
    sortedAnecdotes 
    .map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes} votes
          <button onClick={() => handleVote(anecdote.id)}>vote</button>
        </div>
      </div>
    )
  )
}

export default AnecdoteList