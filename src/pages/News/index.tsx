import React from 'react';
import { Box, Container, Grid } from '@mui/material/';
import CustomCard from '../../components/CustomCard';
import { IData } from '../../tyeps';

const NewsPage: React.FC = () => {
  const [data, setData] = React.useState<IData[]>([]);

  React.useEffect(() => {
    try {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setData(json));
    } catch (e) {
      // console.log(e);
    }
  }, []);
  if (data) {
    return (
      <Container>
        {data.length > 0 &&
          data.slice(0, 9).map(({ ...item }) => {
            return <CustomCard key={item.id} {...item} />;
          })}
      </Container>
    );
  } else {
    return <div>Something went wrong!</div>;
  }
};

export default NewsPage;

// src={`https://picsum.photos/id/${Math.ceil(Math.random() * 1000)}/300`}
