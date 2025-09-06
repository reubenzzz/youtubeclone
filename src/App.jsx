import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import VideoDetail from './components/VideoDetail'
import SearchFeed from './components/SearchFeed'


export default function App(){
return (
<Box>
<Navbar />
<Container maxWidth="xl" sx={{ mt:2 }}>
<Routes>
<Route path="/" element={<Feed/>} />
<Route path="/video/:id" element={<VideoDetail/>} />
<Route path="/search/:searchTerm" element={<SearchFeed/>} />
</Routes>
</Container>
</Box>
)
}
