import Navbar from '../components/Navbar';

const projects = [
  {
    title: 'Awesome Project',
    description: 'A web app for something cool.',
    tech: ['React', 'Next.js', 'CSS'],
    url: 'https://github.com/yourusername/awesome-project'
  },
  {
    title: 'Another Project',
    description: 'Machine learning project with TensorFlow.',
    tech: ['Python', 'TensorFlow'],
    url: 'https://github.com/yourusername/ml-project'
  }
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <main style={{padding: '2rem'}}>
        <h2>My Projects</h2>
        <ul style={{listStyle: 'none', padding: 0}}>
          {projects.map(({title, description, tech, url}) => (
            <li key={title} style={{marginBottom: '2rem'}}>
              <h3><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></h3>
              <p>{description}</p>
              <small>Tech Stack: {tech.join(', ')}</small>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
