const pasteLink = document.getElementById('paste-link');
const pasteLinkSection = document.querySelector('.paste-link-section');
const radioBtn = document.querySelectorAll('input[name="tab"]');

if (pasteLink.checked) {
  pasteLinkSection.style.display = 'flex';
}

radioBtn.forEach((btn) => {
  btn.addEventListener('change', () => {
    if (btn.id === 'paste-link') {
      pasteLinkSection.style.display = 'flex';
    } else {
      pasteLinkSection.style.display = 'none';
    }
  });
});
