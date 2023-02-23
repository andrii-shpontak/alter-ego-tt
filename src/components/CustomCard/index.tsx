import React from 'react';
import { Card, CardMedia, CardContent, Typography, Stack } from '@mui/material';
import { Backspace } from '@mui/icons-material/';
import { useDispatch } from 'react-redux';

import { IData } from '../../tyeps';
import { removePostById } from '../../store/slice';
import { styles } from './style';

const CustomCard: React.FC<IData> = (item) => {
  const dispatch = useDispatch();
  const { summary, title, id, imageUrl } = item;

  return (
    <Card sx={styles.card}>
      <Stack sx={styles.stack}>
        <CardMedia sx={styles.cardMedia} component="img" alt="photo" image={imageUrl} />
        <CardContent sx={styles.cardContentBig}>
          <Typography gutterBottom variant="h5" align="center">
            {title}
          </Typography>
          <Typography gutterBottom variant="body1" align="center">
            {summary.replace('[…]', '...')}
          </Typography>
        </CardContent>
        <Backspace sx={styles.backspace} onClick={() => dispatch(removePostById(id))} />
      </Stack>
      <CardContent sx={styles.cardContentSmall}>
        <Typography gutterBottom variant="h5" align="center">
          {title}
        </Typography>
        <Typography gutterBottom variant="body1" align="center">
          {summary}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
