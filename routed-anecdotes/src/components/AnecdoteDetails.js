import React from 'react'


export const AnecdoteDetails = ({ anecdote }) => {

  return (<div>
    <h2>{anecdote.content} by {anecdote.author}</h2>
    <br/>
    <div>has {anecdote.votes} votes</div>
    <br/>
    <div>for more info see <a href={anecdote.info}>{anecdote.info}</a></div>
  </div>)
}