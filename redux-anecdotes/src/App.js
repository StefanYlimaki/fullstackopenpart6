import AnecdoteList from './components/AnecdoteList'
import NewAnecdote from './components/AnecdoteForm'
import Notification from './components/Notification'

const App = () => {
  return (
    <div>
      <Notification />
      <AnecdoteList />
      <NewAnecdote />
    </div>
  )
}

export default App