import "./PlayerModal.css";

export default function PlayerModal({ movie, onClose }) {

  if (!movie) return null;

  return (
    <div className="player-overlay">

      <div className="player-box">

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✖
        </button>

        <h2>{movie.title}</h2>

        <iframe
          title={movie.title}
          src={`https://drive.google.com/file/d/${movie.driveId}/preview`}
          allow="autoplay"
          allowFullScreen
        ></iframe>

      </div>

    </div>
  );
}
