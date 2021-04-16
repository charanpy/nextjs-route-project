import Header from './main-header';
const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
