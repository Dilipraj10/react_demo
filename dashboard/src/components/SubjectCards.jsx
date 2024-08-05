import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function SubjectCards({ datas }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, flexWrap: 'wrap', mt: 1 }}>
      {datas.map((data, index) => (
        <Card
          key={index}
          sx={{
            minWidth: '100%',
            maxWidth: '100%',
            marginLeft: 2,
            justifyContent: 'center',
            cursor: 'pointer',
            marginBottom: 2,
            display: 'flex',
            flexDirection: 'column',
            minHeight: 90,
            maxHeight: 90,
          }}
        >
          <CardContent style={{ flexGrow: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <div>
                <Typography variant='h6' gutterBottom>
                  {data.date}
                  <p style={{ fontSize: '12px' }}>{data.day}</p>
                </Typography>
              </div>
              <div>
                <Typography variant='h6' gutterBottom>
                  {data.session}
                </Typography>
                <Typography variant='body2'>
                  {data.from}-{data.to} || {data.subject} || Class:{data.standard}
                </Typography>
              </div>
              <div style={{ color: 'lightblue', marginTop: '20px' }}>
                <DeleteOutlineIcon />
                <TextSnippetOutlinedIcon />
                <PlayArrowIcon />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

