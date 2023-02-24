export const styles = {
  box: { flexGrow: 0, textAlign: 'center', position: 'relative' },
  navbarLink: {
    textDecoration: 'none',
    color: 'inherit',
    margin: '0 10px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 'large',
  },
  pages: { display: 'flex', width: '80px', flexDirection: 'row', justifyContent: 'space-between' },
  language: { display: 'flex', flexDirection: 'row', alignItems: 'space-between' },
  login: { cursor: 'pointer', display: { xs: 'felx', sm: 'none' }, margin: '0 15px' },
  select: { color: 'inherit', marginRight: '10px' },
  buttonSm: { height: '25px', color: 'inherit', display: { xs: 'none', sm: 'flex' } },
  iconXs: { display: { xs: 'felx', sm: 'none' } },
  mode: { cursor: 'pointer' },
};
