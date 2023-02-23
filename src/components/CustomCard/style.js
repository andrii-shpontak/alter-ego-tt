export const styles = {
  card: {
    margin: '15px auto',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  stack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '8px',
  },
  cardMedia: { width: '200px', borderRadius: '3px' },
  backspace: {
    cursor: 'pointer',
    transition: 'all 0.2s linear',
    '&:hover': { color: '#d30000', transform: 'scale(1.2)' },
  },
  cardContentBig: { display: { xs: 'none', sm: 'block' } },
  cardContentSmall: { display: { xs: 'block', sm: 'none' } },
};
