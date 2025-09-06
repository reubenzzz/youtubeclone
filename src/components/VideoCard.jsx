import React from 'react'
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'


export default function VideoCard({ video }){
const id = video.id.videoId || video.id
const snippet = video.snippet
return (
<Card sx={{ bgcolor:'transparent', color:'white', boxShadow:'none' }}>
<Link to={`/video/${id}`} style={{ textDecoration:'none' }}>
<CardMedia component="img" image={snippet.thumbnails.medium.url} alt={snippet.title} sx={{ borderRadius:2 }} />
</Link>
<CardContent sx={{ p:1 }}>
<Typography variant="body2" noWrap>{snippet.title}</Typography>
<Box sx={{ mt:0.5 }}>
<Typography variant="caption" color="gray">{snippet.channelTitle}</Typography>
</Box>
</CardContent>
</Card>
)
}
