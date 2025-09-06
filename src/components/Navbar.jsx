import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, InputBase, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { useNavigate } from 'react-router-dom'


export default function Navbar(){
const [q, setQ] = useState('')
const navigate = useNavigate()


const onSearch = (e) =>{
e.preventDefault()
if (!q.trim()) return
navigate(`/search/${encodeURIComponent(q.trim())}`)
}


return (
<AppBar position="sticky" sx={{ background: '#0b1020' }}>
<Toolbar sx={{ display:'flex', gap:2 }}>
<IconButton edge="start" color="inherit"><MenuIcon /></IconButton>
<Box sx={{ display:'flex', alignItems:'center', cursor:'pointer' }} onClick={()=>navigate('/')}>
<YouTubeIcon sx={{ color:'#ff0000', mr:1}} />
<Box component="span" sx={{ fontWeight:700 }}>YT Clone</Box>
</Box>


<Box component="form" onSubmit={onSearch} sx={{ ml:4, flex:1, display:'flex', justifyContent:'center' }}>
<InputBase placeholder="Search" value={q} onChange={(e)=>setQ(e.target.value)} sx={{ background:'#0f172a', px:2, borderRadius:1, color:'#fff', width:{xs:'60%', md:'50%'} }} />
<IconButton type="submit" sx={{ ml:1, color:'white' }}><SearchIcon/></IconButton>
</Box>


</Toolbar>
</AppBar>
)
}
