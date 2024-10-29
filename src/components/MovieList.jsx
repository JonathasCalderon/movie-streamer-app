export default function MovieList({ movies }) {
  return (
    <ul>
      {
        movies.map(({ id, title }) => (
          <li key={id}>
            {title}
          </li>
        ))
      }
    </ul>
  )
}
