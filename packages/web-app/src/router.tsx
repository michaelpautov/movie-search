import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Home, Movie } from './pages'
import { Layout } from './components/layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/movie/:id',
        element: <Movie/>
      }
    ]
  }

])
