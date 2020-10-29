import React, { useState } from 'react'
import { Route ,useRouteMatch } from 'react-router-dom'

import { About } from './components/About'
import { AnecdoteList } from './components/AnecdoteList'
import { CreateNew } from './components/CreateNew'
import { AnecdoteDetails }from './components/AnecdoteDetails'
import { Container } from './components/Container'

import './App.css'
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

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    console.log(anecdote)
    setAnecdotes(anecdotes.concat(anecdote))
    showNotification(anecdote)
  }

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id)

  const anecdote = match ? anecdoteById(match.params.id) :  undefined

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    }

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)))
  }
  let idTimer = undefined

  const showNotification = (anecdote) => {

    setNotification(anecdote.content)
    if (idTimer){
      clearTimeout(idTimer)
    }
    idTimer = setTimeout(() => setNotification(''),10000 )
  }
  return (

    <div>

      <h1>Software anecdotes</h1>

      <Container notification={notification} >
        <Route path="/about">
          <About />
        </Route>
        <Route path="/create">

          <CreateNew addNew={addNew}/>

        </Route>
        <Route path='/anecdote/:id'>

          <AnecdoteDetails anecdote={anecdote}/>




        </Route>
        <Route path="/" exact>

          <AnecdoteList anecdotes={anecdotes} />

        </Route>
      </Container>
    </div>

  )
}

export default App
