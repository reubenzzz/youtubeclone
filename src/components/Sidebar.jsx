import React from 'react'
import { Box, Stack, Button } from '@mui/material'


const categories = ['New','Music','Sports','Gaming','News','Movie','Technology','Education']


export default function Sidebar({ selected, onSelect }){
return (
<Box sx={{ width:{xs:'100%', md:240}, bgcolor:'transparent', color:'white', p:2 }}>
<Stack spacing={1}>
{categories.map(c=> (
<Button key={c} variant={selected===c?'contained':'text'} onClick={()=>onSelect(c)} sx={{ color:'white', justifyContent:'flex-start' }}>{c}</Button>
))}
</Stack>
</Box>
)
}
