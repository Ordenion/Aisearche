const AppShell = ({ children }: { children?: any }) => {
  return (
    <div>
      <header style={{display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem', borderBottom: '1px solid #ddd'}}>
        <div>Project Name</div>
        <div>Status: <em>OK</em></div>
      </header>
      <main style={{padding: '1rem'}}>
        {children}
      </main>
    </div>
  );
};

export default AppShell;
