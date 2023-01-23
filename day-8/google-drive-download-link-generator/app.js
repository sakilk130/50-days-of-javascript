const pasteLink = document.getElementById('paste-link');
const pasteLinkSection = document.querySelector('.paste-link-section');
const radioBtn = document.querySelectorAll('input[name="tab"]');
const embedAudioSection = document.querySelector('.embed-audio-section');
const embedVideoSection = document.querySelector('.embed-video-section');

if (pasteLink.checked) {
  pasteLinkSection.style.display = 'flex';
}

radioBtn.forEach((btn) => {
  btn.addEventListener('change', () => {
    if (btn.id === 'paste-link') {
      pasteLinkSection.style.display = 'flex';
      embedAudioSection.style.display = 'none';
      embedVideoSection.style.display = 'none';
    } else if (btn.id === 'embed-audio') {
      pasteLinkSection.style.display = 'none';
      embedAudioSection.style.display = 'flex';
      embedVideoSection.style.display = 'none';
    } else {
      pasteLinkSection.style.display = 'none';
      embedAudioSection.style.display = 'none';
      embedVideoSection.style.display = 'flex';
    }
  });
});
