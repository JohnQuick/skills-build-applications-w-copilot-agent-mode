import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://miniature-space-capybara-rxx69gw456cw59p-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-primary">Activities</h1>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Username</th>
              <th>Activity Type</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(activity => (
              <tr key={activity._id}>
                <td>
                  <a href={`mailto:${activity.user.email}`} className="text-decoration-none text-primary">
                    {activity.user.username}
                  </a>
                </td>
                <td>{activity.activity_type}</td>
                <td>{activity.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Activities;