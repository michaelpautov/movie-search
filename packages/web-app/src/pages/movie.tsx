import React from 'react'
import { useParams } from 'react-router-dom'
import { type MovieShortInfo } from 'core'
import {
  Card,
  CardContent, CardMedia, Grid,
  Skeleton, Typography
} from '@mui/material'
import { useGetMovie } from '../api/use-get-movie'

export function Movie () {
  const { id } = useParams()
  const { data, isPending } = useGetMovie(id)
  const item = (data?.fake ?? {}) as MovieShortInfo
  if (isPending) {
    return <Skeleton sx={{ margin: '10px', width: '100%', height: '600px' }} />
  }
  return (
    <Grid key={item['#IMDB_ID']} item xs={6}>
      <Card>
        <CardMedia
          component="img"
          sx={{ height: 600, padding: '1em 1em 0 1em', objectFit: 'contain' }}
          image={item['#IMG_POSTER']}
          title="green iguana"
        />
        <CardContent sx={{ height: 80 }}>
          <Typography gutterBottom variant="h5" component="div">
            {item['#TITLE']}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Actors: {item['#ACTORS']}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
