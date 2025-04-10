import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://miniature-space-capybara-rxx69gw456cw59p-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-primary">Teams</h1>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Team ID</th>
              <th>Team Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team._id}>
                <td>{team._id}</td>
                <td>{team.name}</td>
                <td>
                  <ul>
                    {team.members.map(member => (
                      <li key={member._id}>
                        <a href={`mailto:${member.email}`} className="text-decoration-none text-primary">
                          {member.username}
                        </a>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;