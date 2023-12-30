// Function to create snowflakes dynamically
function createSnowflake() {
  const snowfall = document.querySelector('.snowfall');
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 2 + 1}s`;
  snowfall.appendChild(snowflake);
  snowflake.addEventListener('animationiteration', () => {
    snowfall.removeChild(snowflake);
  });
}

// Function to create multiple snowflakes
function createSnowfall() {
  for (let i = 0; i < 50; i++) {
    createSnowflake();
  }
}

// Call the function to create snowflakes when the page loads
window.addEventListener('load', createSnowfall);
