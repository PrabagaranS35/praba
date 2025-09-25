// moved from original <script> block
const scriptURL = 'https://script.google.com/macros/s/AKfycbyy-rhwqbd4tyIQGjZUhG3ZxYw9ZpgxflhLdcs7bJvBTjdcYYjQUzqNMqhQAiG9Stb3/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(res => res.json())
  .then(data => {
    if (data.result === 'success') {
      alert('✅ Form submitted successfully!');
      form.reset();
    } else {
      alert('❌ Error: ' + JSON.stringify(data.error));
    }
  })
  .catch(err => alert('⚠️ Submit error: ' + err));
});
