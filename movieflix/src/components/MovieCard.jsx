export default function MovieCard({ movie, onOpen }) {
    return (
        <div
              onClick={() => onOpen(movie)}
                    style={{
                            width: 180,
                                    cursor: "pointer"
                                          }}
                                              >
                                                    <img
                                                            src={movie.poster}
                                                                    style={{
                                                                              width: "100%",
                                                                                        borderRadius: 10
                                                                                                }}
                                                                                                      />

                                                                                                            <h3>{movie.title}</h3>
                                                                                                                </div>
                                                                                                                  );
                                                                                                                  }
}