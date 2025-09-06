import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import Sidebar from './Sidebar'
import VideoCard from './VideoCard'
import fetchFromAPI from '../utils/fetchFromAPI'


export default function Feed(){
const [category, setCategory] = useState('New')
const [videos, setVideos] = useState([])


useEffect(()=>{
let cancelled = false
;(async ()=>{
try{
const data = await fetchFromAPI('search', { q: category, type: 'video' })
if (!cancelled) setVideos(data.items || [])
}catch(e){
console.error(e)
}
})()
return ()=> cancelled = true
},[category])


return (
<Box sx={{ display:'flex', gap:2 }}>
<Sidebar selected={category} onSelect={setCategory} />
<Box sx={{ flex:1 }}>
<Grid container spacing={2}>
{videos.map(v=> (
<Grid item xs={12} sm={6} md={4} lg={3} key={v.id.videoId || v.id}>{/* responsive */}
<VideoCard video={v} />
</Grid>
))}
</Grid>
</Box>
</Box>
)
}
