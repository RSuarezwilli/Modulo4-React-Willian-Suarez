let url = 'https://randomuser.me/api/';
let container = document.getElementById('container');
let userCard = document.getElementById('userCard');
let userImage = document.getElementById('userImage');
let userName = document.getElementById('userName');
let userGender = document.getElementById('userGender');
let userEmail = document.getElementById('userEmail');
let userPhone = document.getElementById('userPhone');

container.addEventListener('click', () => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      userImage.src = user.picture.large;
      userName.textContent = `${user.name.first} ${user.name.last}`;
      userGender.textContent = `Género: ${user.gender}`;
      userEmail.textContent = `Email: ${user.email}`;
      userPhone.textContent = `Celular: ${user.cell}`;
      userCard.classList.remove('hidden');
    })
    .catch(error => console.error('Error al obtener el usuario:', error));
});

