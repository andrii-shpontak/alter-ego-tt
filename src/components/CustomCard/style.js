export const styles = {
  card: {
    margin: '15px auto',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  stack: {
    justifyContent: 'space-between',
    margin: '8px',
    flexDirection: { xs: 'column', sm: 'row' },
  },
  cardMedia: {
    width: '200px',
    height: '200px',
    borderRadius: '3px',
    margin: { xs: '0 auto', sm: 'none' },
  },
  deleteWrapper: { flexDirection: 'row', justifyContent: 'flex-end' },
  backspace: {
    margin: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s linear',
    '&:hover': { color: '#d30000', transform: 'scale(1.2)' },
  },
};
