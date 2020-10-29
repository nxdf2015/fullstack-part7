import React, { useState } from 'react'
import { Route ,useRouteMatch } from 'react-router-dom'

import { About } from './components/About'
import { AnecdoteList } from './components/AnecdoteList'
import { CreateNew } from './components/CreateNew'
import { AnecdoteDetails }from './components/AnecdoteDetails'
import { Container } from './components/Container'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1',
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2',
    },
  ])

  const match = useRouteMatch('/anecdote/:id')

  const anecdote = match ? anecdotes.find(item => item.id === match.params.id) :  undefined
  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    }

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)))
  }

  return (

    <div>
      <h1>Software anecdotes</h1>

      <Route path="/about">
        <Container>
          <About />
        </Container>
      </Route>
      <Route path="/create">
        <Container>
          <CreateNew addNew={addNew} />
        </Container>
      </Route>
      <Route path='/anecdote/:id'>
        <Container>
          <AnecdoteDetails anecdote={anecdote}/>

        </Container>

      </Route>
      <Route path="/" exact>
        <Container>
          <AnecdoteList anecdotes={anecdotes} />
        </Container>
      </Route>
    </div>

  )
}

export default App
