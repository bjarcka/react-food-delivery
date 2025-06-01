export const Layout = ({ children }) => {
  return (
    <>
      <header>
        APP HEADER <hr></hr>
      </header>
      <main>{children}</main>
      <footer>
        <hr></hr>APP FOOTER
      </footer>
    </>
  );
};
