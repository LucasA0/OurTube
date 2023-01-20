import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import {CheckCircle } from '@mui/icons-material'

const VideoCard = ({ video: { id: {videoId}, snippet} }) => {
  return (
  <Card sx={{width: { xs: '100%', sm: '358px', md: '320px'}, boxShadow: 'none', borderRadius: '8px'}}>
    <Link to={`/video/${videoId}`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{width: {
          xs: '100%',
          sm: '358px',
          md: '320px'
        }, height: 180}}
      />
      <CardContent sx={{backgroundColor: '#1e1e1e', height:'106px'}}>
        <Link to={`/video/${videoId}`}>
          <Typography variant='body1' sx={{ width: {xs: '100%'} }} fontWeight='bold' color='#FFF'>
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={`/channel/${snippet?.channelId}`}>
          <Typography variant='subtitle2' fontWeight='bold' sx={{ marginTop: 1 }} color='gray'>
            {snippet?.channelTitle.slice(0, 60)}
            <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}} />
          </Typography>
        </Link>
        <Typography variant='subtitle2' pt={1} fontWeight='bold' color='gray'>
          Publicado em: {snippet?.publishTime.slice(0, 10).split('-').reverse().join('/')}
        </Typography>
      </CardContent>
    </Link>
  </Card>
  )
}

export default VideoCard
