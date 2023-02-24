import React from 'react';
import { Card, CardMedia, CardContent, Typography, Stack } from '@mui/material';
import { Backspace } from '@mui/icons-material/';
import { useDispatch } from 'react-redux';

import { IData } from '../../types';
import { removePostById } from '../../store/slice';
import { styles } from './style';

const CustomCard: React.FC<IData> = (item) => {
  const dispatch = useDispatch();
  const { summary, title, id, imageUrl } = item;

  return (
    <Card sx={styles.card}>
      <Stack sx={styles.stack}>
        <CardMedia sx={styles.cardMedia} component="img" alt="photo" image={imageUrl} />
        <CardContent>
          <Typography gutterBottom variant="h5" align="center">
            {title}
          </Typography>
          <Typography gutterBottom variant="body1" align="center">
            {summary.replace('[…]', '...')}
          </Typography>
        </CardContent>
      </Stack>
      <Stack sx={styles.deleteWrapper}>
        <Backspace sx={styles.backspace} onClick={() => dispatch(removePostById(id))} />
      </Stack>
    </Card>
  );
};

export default React.memo(CustomCard);
