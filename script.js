const timeline = [];

const trial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div style="display: flex; justify-content: center; gap: 40px;">
      <img src="cartoon1.jpg" width="200" />
      <img src="cartoon2.jpg" width="200" />
    </div>
    <p>Which cartoon do you prefer?</p>
  `,
  choices: ['Left', 'Right'],
  data: { question_id: 'cartoon_preference_1' }
};

timeline.push(trial);

// Initialize the experiment with the new function (initJsPsych)
initJsPsych({
  timeline: timeline
});
