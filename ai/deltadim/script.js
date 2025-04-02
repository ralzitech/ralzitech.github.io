document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('vanishing-form');
  const reportsContainer = document.getElementById('reports-container');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const location = document.getElementById('location').value;
    const size = document.getElementById('size').value;
    const time = document.getElementById('time').value;
    const description = document.getElementById('description').value;

    const reportData = {
      location,
      size,
      time,
      description
    };

    // Simulate sending data to a server (replace with actual API call)
    try {
      // In a real application, you'd send this data to your backend
      // const response = await fetch('/api/reports', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(reportData)
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to submit report');
      // }

      // const newReport = await response.json();
      // For now, we'll just simulate a successful submission
      const newReport = reportData;
      displayReport(newReport);
      form.reset();


    } catch (error) {
      console.error('Error submitting report:', error);
      alert('Failed to submit report. Please try again.');
    }
  });

  function displayReport(report) {
    const reportDiv = document.createElement('div');
    reportDiv.classList.add('report');
    reportDiv.innerHTML = `
      <h3>Location: ${report.location}</h3>
      <p>Size: ${report.size}</p>
      <p>Time: ${report.time}</p>
      <p>Description: ${report.description}</p>
    `;
    reportsContainer.appendChild(reportDiv);
  }

  // Load initial/dummy reports (replace with actual API call)
  const initialReports = [
    { location: 'Sector 4', size: 'medium', time: '2024-01-28T10:00', description: 'Observed a medium-sized chunk vanish suddenly.' },
    { location: 'Crystal Caves', size: 'small', time: '2024-01-27T14:30', description: 'A small piece disappeared with a faint shimmer.' }
  ];

  initialReports.forEach(report => displayReport(report));
});