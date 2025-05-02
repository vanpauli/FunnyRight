const timeline = [];

const trial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div style="display: flex; justify-content: space-around;">
      <img src="DalciaMachado_Brazil.png" width="200" />
      <img src="DieterBevers_Belgium" width="200" />
    </div>
    <p>Which cartoon do you prefer?</p>
  `,
  choices: ['Left', 'Right'],
  data: { question_id: 'cartoon_preference_1' }
};

timeline.push(trial);

// Save to Google Sheets
timeline.push({
  type: jsPsychHtmlButtonResponse,
  stimulus: "<p>Thanks for your response!</p>",
  choices: ['Finish'],
  on_start: function () {
    const data = jsPsych.data.get().json();
    fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
      method: "POST",
      body: data,
      mode: "no-cors"
    });
  }
});

jsPsych.init({
  timeline: timeline
});
