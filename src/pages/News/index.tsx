import React from 'react';
import { Button, Container } from '@mui/material/';
import { useDispatch, useSelector } from 'react-redux';
import CustomCard from '../../components/CustomCard';
import { IData } from '../../tyeps';
import { IState } from '../../store/slice';
import { setLoading, setError, getPostsData } from '../../store/slice';

const NewsPage: React.FC = () => {
  const dispatch = useDispatch();
  const data: IData[] = useSelector((state: IState) => state?.posts);
  const [offset, setOffset] = React.useState<number>(5);

  const getData = async () => {
    dispatch(setLoading(true));
    try {
      await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => dispatch(getPostsData(json)));
      dispatch(setLoading(false));
    } catch (e) {
      dispatch(setError(true));
      dispatch(setLoading(false));
      console.log(e);
    }
  };

  React.useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  if (data) {
    return (
      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {data.length > 0 &&
          data.slice(0, offset).map(({ ...item }) => {
            return <CustomCard key={item.id} {...item} />;
          })}
        <Button
          sx={{ margin: '10px auto' }}
          variant="contained"
          onClick={() => setOffset(offset + 5)}>
          Load more
        </Button>
      </Container>
    );
  } else {
    return <div>Something went wrong!</div>;
  }
};

export default NewsPage;
