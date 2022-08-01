'use strict'
var gProjects
function onInit() {
    gProjects = getProjects()
    renderProjects(gProjects)

}

function renderProjects(projects) {
    console.log(projects);
    var strHTMLs = projects.map(project =>
        ` <div class="col-md-4 col-sm-6 portfolio-item">
        <a onclick="renderPortModal('${project.id}')" class="portfolio-link" data-toggle="modal" href="#${project.id}">
    <div class="portfolio-hover">
      <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
      </div>
    </div>
    <img class="img-fluid" src="img/portfolio/${project.id}.png" alt="">
  </a>
  <div class="portfolio-caption">
    <h4>${project.name}</h4>
    <p class="text-muted">${project.title}</p>
  </div>
  </div>`)

    var elRow = document.querySelector('#portfolio > div > div:nth-child(2)')
    elRow.innerHTML = strHTMLs.join('')
}

function onSubmit() {
    var elSubject = document.querySelector('#subject')
    var elMessage = document.querySelector('#message')

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=me@example.com&su=${elSubject.value}&b ody=${elMessage.value}`)
}

function renderPortModal(id) {
    console.log('id:', id)
    var proj = getProjectId(id)
    var elPortModal = document.querySelector('.portfolio-modal')
    elPortModal.id = id

    var elModalBody = document.querySelector('.modal-body')
    elModalBody.innerHTML = `<h2>${proj.name}</h2>
    <p class="item-intro text-muted">${proj.title}</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.png" alt="">
    <p>${proj.desc}</p>
    <ul class="list-inline">
      <li>Date: ${proj.publishedAt}</li>
      <li>Client: Threads</li>
      <li>Category: ${proj.labels}</li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
      <i class="fa fa-times"></i>
      Close Project</button>`
}

function getProjectId(id) {
    var project = gProjects.find(project => project.id === id)
    return project
}

