import React from 'react';
import { Button, Container } from '@mui/material/';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import CustomCard from '../../components/CustomCard';
import { IData } from '../../tyeps';
import { IState } from '../../store/slice';
import { setLoading, setError, getPostsData } from '../../store/slice';

const NewsPage: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const data: IData[] = useSelector((state: IState) => state?.posts);
  const [offset, setOffset] = React.useState<number>(5);

  const getData = async () => {
    dispatch(setLoading(true));
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts', {
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
      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Button sx={{ margin: '15px auto' }} variant="contained" onClick={() => getData()}>
          {t('news.refresh')}
        </Button>
        {data.length > 0 &&
          data.slice(0, offset).map(({ ...item }) => {
            return <CustomCard key={item.id} {...item} />;
          })}
        <Button
          sx={{ margin: '10px auto' }}
          variant="contained"
          onClick={() => setOffset(offset + 5)}>
          {t('news.loadmore')}
        </Button>
      </Container>
    );
  } else {
    return <div>Something went wrong!</div>;
  }
};

export default NewsPage;
