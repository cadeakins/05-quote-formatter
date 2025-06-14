const form = document.getElementById('form');  // Get the form element

form.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the default form submission

  const noun = document.getElementById('noun').value;  // Get the noun input value
  const verb = document.getElementById('verb').value;  // Get the verb input value
  const adjective = document.getElementById('adjective').value;  // Get the adjective input value

  const sentence = `The  ${adjective} ${noun} had one goal: to ${verb}. What happened next was unexpected.`; // Create the sentence using template literals

  document.getElementById('result').textContent = sentence; // Display the generated sentence
})