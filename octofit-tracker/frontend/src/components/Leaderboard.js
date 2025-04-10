import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://miniature-space-capybara-rxx69gw456cw59p-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  // Sort leaderboard data by score in descending order
  const sortedLeaderboard = leaderboard.sort((a, b) => b.score - a.score);

  return (
    <div className="container mt-4">
      <h1 className="text-primary">Leaderboard</h1>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Score</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {sortedLeaderboard.map(entry => (
              <tr key={entry._id}>
                <td>{entry.score}</td>
                <td>
                  <a href={`mailto:${entry.user.email}`} className="text-decoration-none text-primary">
                    {entry.user.username}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;