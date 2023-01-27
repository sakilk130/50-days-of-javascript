const getUserBtn = document.getElementById('get-user');
const result = document.querySelector('.result');
const errorDiv = document.getElementById('error');
const getUserSpan = document.getElementById('get-users-span');

const getUser = async () => {
  getUserSpan.textContent = 'Loading...';
  try {
    const response = await fetch('users.json');
    if (!response.ok) {
      throw new Error('Something went wrong with the request!');
    }
    const users = await response.json();
    let userDiv = '';
    users.forEach((user) => {
      const { name, phone, email } = user;
      userDiv += `
            <div class="user">
                <h3>Name : ${name}</h3>
                <p>Phone : ${phone}</p>
                <p>Email : ${email}</p>
            </div>`;
    });
    getUserSpan.textContent = 'Refetch Users';
    result.innerHTML = userDiv;
  } catch (error) {
    errorDiv.textContent = error.message;
  }
};

getUserBtn.addEventListener('click', getUser);
