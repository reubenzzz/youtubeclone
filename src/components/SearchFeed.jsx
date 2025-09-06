import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import VideoCard from './VideoCard'
import fetchFromAPI from '../utils/fetchFromAPI'


export default function SearchFeed(){
const { searchTerm } = useParams()
const [videos, setVideos] = useState([])


useEffect(()=>{
;(async ()=>{
try{
const data = await fetchFromAPI('search', { q: searchTerm, type: 'video' })
setVideos(data.items || [])
}catch(e){console.error(e)}
})()
},[searchTerm])


return (
<Box sx={{ p:2 }}>
<Grid container spacing={2}>
{videos.map(v=> (
<Grid item xs={12} sm={6} md={4} lg={3} key={v.id.videoId || v.id}>
<VideoCard video={v} />
</Grid>
))}
</Grid>
</Box>
)
}
