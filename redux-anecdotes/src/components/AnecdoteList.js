import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { orderBy } from "lodash"
import store from '../store'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const filteredAnecdotes = anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))

  const handleVote = (id) => {
    const anecdotes = store.getState().anecdotes
    const anecdote = anecdotes.find(a => a.id === id)
    const message = `You voted '${anecdote.content}'`
    dispatch(vote(id))
    dispatch(setNotification(message))
    setTimeout(() => {
      const emptyMessage = ''
      dispatch(setNotification(emptyMessage))
    }, 5000)
  } 

  const sortedAnecdotes = orderBy(filteredAnecdotes, ['votes'], ['desc'])

  return(
    sortedAnecdotes.map(anecdote =>
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