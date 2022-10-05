import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const Anecdotes = () => {

  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)
  const handleVote = (id) => {
    console.log('vote', id)
    dispatch(vote(id))
  }

  return(
    <div>
      <h2>Anecdotes</h2>
      {anecdotes
        .sort(( a, b ) => {
        if(a.votes < b.votes) {
          return 1
        }
        if(a.votes > b.votes) {
          return -1
        }
        return 0
        })
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
        )}
    </div>
  )
}

export default Anecdotes