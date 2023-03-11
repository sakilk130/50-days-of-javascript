import { errorMess, profile, repos } from './variables.js';

export const errorMessage = (message) => {
  errorMess.innerHTML = ` <div class="alert alert-danger mt-4" role="alert">
        <i class="fas fa-exclamation-triangle"></i> ${message}
    </div>
`;

  profile.innerHTML = '';
  repos.innerHTML = '';
};

export const hideError = () => {
  errorMess.innerHTML = '';
};

export const showProfile = (data) => {
  profile.innerHTML = `
      <img
      style="height: 300px; width: 300px"
      class="img-thumbnail rounded-circle"
      src="${data.avatar_url}"
      alt=""
      />
      <h2 class="mt-4">${data.login}</h2>
      <p class="text-muted">${data.bio}</p>
      <a
      href="${data.html_url}"
      target="_blank"
      style="width: 100%"
      type="button"
      class="btn btn-outline-secondary"
      >
      View Profile
      </a>
      <p class="mt-1 text-muted">${data.followers} Followers ${data.following} Following</p>
      <p class="mt-1 text-muted">${data.public_repos} Repos</p>
      <p class="mt-1 text-muted">
      <i class="fas fa-map-marker-alt"></i> ${data.location}
      </p>
      `;
};

export const showRepos = (data) => {
  repos.innerHTML = `
  <div class="row">
    <h2>Latest Repositories</h2>
    ${
      data.length === 0
        ? '<p class="text-muted">No repositories found</p>'
        : data
            .map(
              (repo) => `
            <div class="col-lg-6 mb-4">
                <div class="card" style="height:200px;">
                    <div class="card-body">
                        <h5 class="card-title">${repo.name}</h5>
                        ${
                          repo.description
                            ? ` <p class="card-text">${
                                repo.description.length > 50
                                  ? repo.description.substring(0, 50) + '...'
                                  : repo.description
                              }</p>`
                            : ''
                        }
                        <p class="card-text">
                            <span class="badge bg-primary">Stars: ${
                              repo.stargazers_count
                            }</span>
                            <span class="badge bg-secondary">Watchers: ${
                              repo.watchers_count
                            }</span>
                            <span class="badge bg-success">Forks: ${
                              repo.forks_count
                            }</span>
                        </p>
                        <a href="${
                          repo.html_url
                        }" target="_blank" class="btn btn-outline-secondary">View Repo</a>
                    </div>
                </div>
            </div>`
            )
            .join('')
    }
    </div>`;
};

export const getRepos = async (user) => {
  try {
    const res = await fetch(`https://api.github.com/users/${user}/repos`);
    const data = await res.json();
    if (data.message) {
      errorMessage(data.message);
      return;
    }
    hideError();
    showRepos(data);
  } catch (error) {
    errorMessage(
      error.response.data.message || 'Something went wrong, please try again'
    );
  }
};

export const getData = async (user) => {
  try {
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json();
    if (data.message) {
      errorMessage(data.message);
      return;
    }
    hideError();
    showProfile(data);
    getRepos(user);
  } catch (error) {
    errorMessage(
      error.response.data.message || 'Something went wrong, please try again'
    );
  }
};
