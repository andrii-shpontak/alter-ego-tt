import React from 'react';
import { Button, Container, Typography } from '@mui/material/';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import CustomCard from '../../components/customCard';
import { IData } from '../../tyeps';
import { IState } from '../../store/slice';
import { setLoading, setError, getPostsData } from '../../store/slice';
import ErrorMessage from '../../components/errorMessage';

import { styles } from './style';

const NewsPage: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const data: IData[] = useSelector((state: IState) => state?.posts);
  const [offset, setOffset] = React.useState<number>(5);

  const getData = async () => {
    dispatch(setLoading(true));
    dispatch(setError(false));

    try {
      const { data } = await axios.get('https://api.spaceflightnewsapi.net/v3/articles', {
        headers: {
          Accept: 'application/json',
        },
      });
      dispatch(getPostsData(data));
      dispatch(setLoading(false));
    } catch (e) {
      dispatch(setError(true));
      dispatch(setLoading(false));
      console.log(e);
    }
  };

  if (data.length < 1) {
    getData();
  }

  if (data) {
    return (
      <Container sx={styles.container}>
        <Button sx={styles.buttonRefresh} variant="contained" onClick={() => getData()}>
          {t('news.refresh')}
        </Button>
        {data.length > 0 &&
          data.slice(0, offset).map(({ ...item }) => {
            return <CustomCard key={item.id} {...item} />;
          })}

        {offset < data.length ? (
          <Button sx={styles.buttonLoad} variant="contained" onClick={() => setOffset(offset + 5)}>
            {t('news.loadmore')}
          </Button>
        ) : (
          <Typography sx={styles.typography} variant="h4">
            {t('news.all_news')}
          </Typography>
        )}
      </Container>
    );
  } else {
    return <ErrorMessage />;
  }
};

export default NewsPage;