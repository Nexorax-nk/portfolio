import Navbar from '../components/Navbar';

const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Python', 'AWS', 'GraphQL'];

export default function Skills() {
  return (
    <>
      <Navbar />
      <main style={{padding: '2rem'}}>
        <h2>Skills & Tech Stack</h2>
        <ul style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: 0, listStyle: 'none'}}>
          {skills.map(skill => (
            <li key={skill} style={{padding: '0.5rem 1rem', border: '1px solid #333', borderRadius: '8px'}}>
              {skill}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
