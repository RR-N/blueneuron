document.addEventListener('DOMContentLoaded', () => {
  const finerContainer = document.getElementById('finer-container');

  // Define stories
  const stories = {
    james: 'Story 1 about feasibility...',
    ida: 'Story 2 about interest...',
    amari: 'Story 3 about novelty...',
    emma: 'Story 4 about ethics...',
    juanita: 'Story 5 about relevance...'
  };

  const talkingHeads = document.querySelectorAll('.talking-head');
  talkingHeads.forEach(head => {
    head.addEventListener('click', function() {
      // Get clicked image id
      const id = this.id;

      // Display corresponding story
      const storyContainer = document.getElementById('story-container');
      storyContainer.innerHTML = stories[id];
    });
  });
});
