import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import fetchFromAPI from '../utils/fetchFromAPI'
import VideoCard from './VideoCard'


export default function VideoDetail(){
const { id } = useParams()
const [video, setVideo] = useState(null)
const [related, setRelated] = useState([])


useEffect(()=>{
;(async ()=>{
try{
const data = await fetchFromAPI('videos', { id, part: 'snippet,statistics' })
setVideo(data.items?.[0])
const rel = await fetchFromAPI('search', { relatedToVideoId: id, type: 'video' })
setRelated(rel.items || [])
}catch(e){console.error(e)}
})()
},[id])


if (!video) return <Box sx={{ color:'white', p:4 }}>Loading...</Box>


return (
<Box sx={{ display:{xs:'block', md:'flex'}, gap:2, p:2 }}>
<Box sx={{ flex:2 }}>
<Box sx={{ position:'relative', pb:'56.25%'}}>
<iframe
src={`https://www.youtube.com/embed/${id}`}
title={video.snippet.title}
style={{ position:'absolute', width:'100%', height:'100%', left:0, top:0, border:0 }}
allowFullScreen
/>
</Box>
<Typography variant="h6" sx={{ color:'white', mt:2 }}>{video.snippet.title}</Typography>
<Typography variant="body2" sx={{ color:'gray' }}>{video.snippet.channelTitle}</Typography>
</Box>


<Box sx={{ flex:1 }}>
<Typography variant="subtitle1" sx={{ color:'white', mb:2 }}>Related</Typography>
{related.map(r=> <VideoCard key={r.id.videoId || r.id} video={r} />)}
</Box>
</Box>
)
}
