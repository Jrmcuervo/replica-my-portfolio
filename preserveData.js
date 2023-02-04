const storeData = {};
const nameData = document.getElementById('name');
const emailData = document.getElementById('mail');
const messageData = document.getElementById('msg');

nameData.addEventListener('change', (event) => {
  storeData.name = event.target.value;
  localStorage.setItem('info', JSON.stringify(storeData));
});

emailData.addEventListener('change', (event) => {
  storeData.mail = event.target.value;
  localStorage.setItem('info', JSON.stringify(storeData));
});

messageData.addEventListener('change', (event) => {
  storeData.msg = event.target.value;
  localStorage.setItem('info', JSON.stringify(storeData));
});

const localStorageData = JSON.parse(localStorage.getItem('info'));

if (localStorage.getItem('info') !== null) {
  nameData.value = localStorageData.name;
  emailData.value = localStorageData.mail;
  messageData.value = localStorageData.msg;
}
