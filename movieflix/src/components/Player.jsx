export default function Player({ movie }) {

  if (!movie) return null;

  return (

  <div style={{marginTop:30}}>

  <iframe
  title={movie.title}
  width="100%"
  height="500"
  src={`https://drive.google.com/file/d/${movie.driveId}/preview`}
  allow="autoplay"
  style={{border:"none"}}
  />

  </div>

  );

  }
}