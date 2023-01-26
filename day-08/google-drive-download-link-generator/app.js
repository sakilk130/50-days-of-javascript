const pasteLink = document.getElementById('paste-link');
const pasteLinkSection = document.querySelector('.paste-link-section');
const radioBtn = document.querySelectorAll('input[name="tab"]');
const embedAudioSection = document.querySelector('.embed-audio-section');
const embedVideoSection = document.querySelector('.embed-video-section');
const gdriveLink = document.getElementById('gdrive-link');
const generateBtn = document.getElementById('btn');
const directLink = document.getElementById('direct-download-link');
const copyBtn = document.querySelector('.copy');
const embedAudio = document.querySelector('#embed-audio-link');
const embedAudioCopyBtn = document.querySelector('#embed-audio-copy');
const embedVideo = document.getElementById('embed-video-link');
const embedVideoCopyBtn = document.querySelector('#embed-video-copy');

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

generateBtn.addEventListener('click', () => {
  const link = gdriveLink.value;
  const isValid = link.includes('https://drive.google.com/file/d/');
  if (!isValid) {
    alert('Please enter a valid Google Drive link');
  }
  const getDirectLink = gdriveLink.value
    .replace(
      'https://drive.google.com/file/d/',
      'https://drive.google.com/uc?export=download&id='
    )
    .replace('/view?usp=sharing', '');
  directLink.value = getDirectLink;

  // Embed Audio
  const audio1 = '<audio width="300" height="32" controls="controls" src="';
  const audio2 = '" type="audio/mp3"></audio>';
  const embedAudioLink = audio1 + getDirectLink + audio2;
  embedAudio.value = embedAudioLink;

  // Embed Video
  const getVideoLink = gdriveLink.value.replace('/view?usp=sharing', '');
  const video1 = '<iframe src="';
  const video2 = '/preview" width="560" height="315"></iframe>';
  const embedVideoLink = video1 + getVideoLink + video2;
  embedVideo.value = embedVideoLink;
});

const copy = (link, btn) => {
  link.select();
  document.execCommand('copy');
  btn.innerHTML = 'Copied!';
  setTimeout(() => {
    btn.innerHTML = 'Copy';
  }, 2000);
};

copyBtn.addEventListener('click', () => {
  return copy(directLink, copyBtn);
});

embedAudioCopyBtn.addEventListener('click', () => {
  return copy(embedAudio, embedAudioCopyBtn);
});
embedVideoCopyBtn.addEventListener('click', () => {
  return copy(embedVideo, embedVideoCopyBtn);
});
