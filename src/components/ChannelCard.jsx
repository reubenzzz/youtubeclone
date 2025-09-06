import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'


export default function ChannelCard({ channel }){
if (!channel) return null
const snippet = channel.snippet
return (
<Card sx={{ bgcolor:'transparent', color:'white', boxShadow:'none' }}>
<CardContent>
<Typography variant="h6">{snippet.title}</Typography>
<Typography variant="body2" color="gray">{snippet.description}</Typography>
</CardContent>
</Card>
)
}
