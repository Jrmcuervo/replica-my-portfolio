const storeData = JSON.parse(localStorage.getItem('info')) || {
  name: '',
  mail: '',
  msg: '',
};
const nameData = document.getElementById('name');
const emailData = document.getElementById('mail');
const messageData = document.getElementById('msg');

function saveToLocal(storeData) {
  localStorage.setItem('info', JSON.stringify(storeData));
}

function inputData() {
  nameData.value = storeData.name;
  emailData.value = storeData.mail;
  messageData.value = storeData.msg;
}

nameData.addEventListener('input', (event) => {
  storeData.name = event.target.value;
  saveToLocal(storeData);
});

emailData.addEventListener('input', (event) => {
  storeData.mail = event.target.value;
  saveToLocal(storeData);
});

messageData.addEventListener('input', (event) => {
  storeData.msg = event.target.value;
  saveToLocal(storeData);
});

window.onload = inputData();
