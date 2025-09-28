import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{padding: '2rem'}}>
        <h1>Hello, I'm [Your Name]</h1>
        <p>Developer | Coder | Innovator</p>
        <p>Welcome to my portfolio!</p>
      </main>
    </>
  );
}
