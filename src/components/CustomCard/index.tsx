import React from 'react';
import { Card, CardMedia, CardContent, Typography, Stack } from '@mui/material';
import { Backspace } from '@mui/icons-material/';
import { useDispatch } from 'react-redux';

import { IData } from '../../tyeps';
import { removePostById } from '../../store/slice';

const CustomCard: React.FC<IData> = (item) => {
  const dispatch = useDispatch();
  const { body, title, id } = item;

  return (
    <Card sx={{ margin: '15px auto', display: 'flex', flexDirection: 'column' }}>
      <Stack flexDirection={'row'} justifyContent={'space-between'} margin={1}>
        <CardMedia
          sx={{ width: '200px', borderRadius: '3px' }}
          component="img"
          alt="photo"
          image={`https://picsum.photos/200/200?random=${item.id}`}
        />
        <CardContent sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Typography gutterBottom variant="h5" align="center">
            {title}
            <br />
            {id}
          </Typography>
          <Typography gutterBottom variant="body1" align="center">
            {body}
          </Typography>
        </CardContent>
        <Backspace
          sx={{
            cursor: 'pointer',
            transition: 'all 0.2s linear',
            '&:hover': { color: '#d30000', transform: 'scale(1.2)' },
          }}
          onClick={() => dispatch(removePostById(id))}
        />
      </Stack>
      <CardContent sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Typography gutterBottom variant="h5" align="center">
          {title}
        </Typography>
        <Typography gutterBottom variant="body1" align="center">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
