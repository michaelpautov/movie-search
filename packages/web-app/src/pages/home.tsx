import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Box,
  TextField,
  Skeleton
} from '@mui/material'
import React, { useState } from 'react'
import { useGetMovies } from '../api/use-get-movies'
import { Link } from 'react-router-dom'
import { useDebounce } from '../hooks/use-debounce'

export function Home () {
  const [queryString, setQueryString] = useState('')
  const value = useDebounce(queryString)
  const { data, isPending } = useGetMovies(value)

  return (
    <Box>
      <Box sx={{ margin: '10px' }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setQueryString(event.target.value)
          }}
        />
      </Box>
      {isPending
        ? (
        <Skeleton sx={{ margin: '10px', width: '100%', height: '600px' }} />
          )
        : data?.length === 0
          ? (
        <Typography>No results</Typography>
            )
          : (
        <Grid container spacing={2}>
          {data?.map((item) => (
            <Grid key={item['#IMDB_ID']} item xs={3}>
              <Card>
                <CardMedia
                  sx={{ height: 240 }}
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
                <CardActions>
                  <Button>
                    <Link to={`movie/${item['#IMDB_ID']}`}>More Info</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
            )}
    </Box>
  )
}
