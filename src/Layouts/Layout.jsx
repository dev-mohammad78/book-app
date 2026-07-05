function Layout({ children }) {
  return (
    <>
      <header className="flex align-center justify-between bg-[var(--bg-secondary)] p-4 mt-4 mb-10 rounded-md ">
        <h1 className="text-2xl font-bold">Book app</h1>
        <p className="text-md ">React.js Course</p>
      </header>
      {children}
      <footer className="bg-[var(--bg-secondary)] p-4 mt-10 rounded-md text-center text-md">
        Developed by dev-mohammad78 with ❤️
      </footer>
    </>
  );
}

export default Layout;
