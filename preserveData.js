const storeData = {};
const nameData = document.getElementById('name');
const emailData = document.getElementById('mail');
const messageData = document.getElementById('msg');

function saveToLocal(storeData) {
  localStorage.setItem('info', JSON.stringify(storeData));
}

nameData.addEventListener('change', (event) => {
  storeData.name = event.target.value;
  saveToLocal(storeData);
});

emailData.addEventListener('change', (event) => {
  storeData.mail = event.target.value;
  saveToLocal(storeData);
});

messageData.addEventListener('change', (event) => {
  storeData.msg = event.target.value;
  saveToLocal(storeData);
});

const localStorageData = JSON.parse(localStorage.getItem('info'));

if (localStorage.getItem('info') !== null) {
  nameData.value = localStorageData.name;
  emailData.value = localStorageData.mail;
  messageData.value = localStorageData.msg;
}
