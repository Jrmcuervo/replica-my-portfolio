const open = document.getElementById('btnOpen');
const close = document.getElementById('btnClose');

open.addEventListener('click', () => {
  close.style.display = 'block';
});

close.addEventListener('click', () => {
  close.style.display = 'none';
});

const projects = [{
  title: 'Tonic',
  img: 'images/img-projects-1.jpg',
  client: 'CANOPY',
  role: 'Back End Dev',
  year: '2015',
  desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  tech: ['HTML', 'CSS', 'JavaScript'],
  button: 'See Project',
  link: '#',
},
{
  title: 'Spotify',
  img: 'images/img-projects-2.jpg',
  client: 'EXAMPLE ',
  role: 'Front End Dev',
  year: '2016',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur assumenda aperiam perferendis quaerat sunt saepe?',
  tech: ['HTML', 'CSS', 'JavaScript'],
  button: 'See Project',
  link: '#',
},
{
  title: 'Facebook',
  img: 'images/img-projects-3.jpg',
  client: 'CANOPY',
  role: 'Full Stack Dev',
  year: '2018',
  desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  tech: ['HTML', 'CSS', 'JavaScript'],
  button: 'See Project',
  link: '#',
},
{
  title: '3Dweb',
  img: 'images/img-projects-4.jpg',
  client: 'EXAMPLE',
  role: 'Full Stack Dev',
  year: '2018',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur assumenda aperiam perferendis quaerat sunt saepe?',
  tech: ['HTML', 'CSS', 'JavaScript'],
  button: 'See Project',
  link: '#',
},
];

const projectsContainer = document.getElementById('works');

for (let i = 0; i < projects.length; i += 1) {
  const project = document.createElement('article');
  project.className = 'project';
  project.innerHTML = `
    <img class="project__img" src = ${projects[i].img} alt = "frontpage first project">
        <div>
          <h3 class="project__title">${projects[i].title}</h3>
          <p class="project__reference"><span class="project__client">${projects[i].client}</span> <svg width="8" height="8"
            viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
          </svg> <span class="project__role">${projects[i].role}</span> <svg width="8" height="8" viewBox="0 0 8 8"
            fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
            </svg> <span class="project__year">${projects[i].year}</span>
          </p>
          <p class="project__paragraph">${projects[i].desc}</p>
          <ul class="project__technologies">
            <li>${projects[i].tech[0]}</li>
            <li>${projects[i].tech[1]}</li>
            <li>${projects[i].tech[2]}</li>
          </ul>
          <button class="project__button">${projects[i].button}</button>
        </div>`;
  const button = project.querySelector('.project__button');
  button.addEventListener('click', () => {
    displayPopup(projects[i]);
  });
  projectsContainer.appendChild(project);
}

const popup = document.querySelector('#popup');
const popupTitle = popup.querySelector('#popupTitle');
const popupReferences = popup.querySelector('#popupReferences');
const popupImg = popup.querySelector('#popupImg');
const popupDesc = popup.querySelector('#popupDesc');
const popupTechs = popup.querySelector('#popupTechs');
const popupLive = popup.querySelector('#popupLive');
const popupSource = popup.querySelector('#popupSource');

function displayPopup(project) {
  const popUpContainer = document.getElementById('popUpContainer');
  popUpContainer.classList.remove('display-none');
  console.log(project);
  popupTitle.textContent = project.title;
  popupImg.src = project.img;
  popupReferences.textContent = project.client;
  popupReferences.textContent += project.role;
  popupReferences.textContent += project.year;
  //   popupReferences.innerHTML = `<p class="project__reference"><span class="project__client">${projects[i].client}</span> <svg width="8" height="8"
  //   viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
  // </svg> <span class="project__role">${projects[i].role}</span> <svg width="8" height="8" viewBox="0 0 8 8"
  //   fill="none" xmlns="http://www.w3.org/2000/svg">
  //     <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
  //   </svg> <span class="project__year">${projects[i].year}</span>
  // </p>`;
  popupDesc.textContent = project.desc;
  popupTechs.innerHTML = '';
  for (let i = 0; i < project.tech.length; i += 1) {
    const li = document.createElement('li');
    li.className = 'technology';
    li.textContent = project.tech[i];
    popupTechs.appendChild(li);
  }
}

const exitPopUp = document.getElementById('exitPopUp');

exitPopUp.addEventListener('click', () => {
    popUpContainer.classList.add('display-none');
})



