const generateTeam = team => {
    //manager
    const generateManager = manager => {
        return `
    <div class="card m-3 shadow" style="width: 300px">
    <div class="card-header bg-success text-white">
     <p class="h3">${manager.getName()}</p>
     <p class="h4">
     <i class="fas fa-glasses mr-1"></i>
     ${manager.getPosition()}
    </p> 
  </div>
 <div class="card-body bg-light">
  <ul class="list-group>
   <li class="list-group-item">
   <span class="font-weight-bold">ID: </span>
   ${manager.getId()}
   </li>
   <li class="list-group-item">
   <span class="font-weight-bold">Email: </span>
   <a href="mailto:${manager.getEmail()}">$<manager.getEmail()}</a>
   </li>
   <li class="list-group-item">
   <span class="font-weight-bold">Office: </span>
   ${manager.getOffice()}
   </li>
  </ul>
 </div>
</div>
    `;
};
  //engineer
  const generateEngineer = engineer => {
    return `
 <div class="card m-3 shadow" style="width: 300px">
    <div class="card-header bg-success text-white">
     <p class="h3">${engineer.getName()}</p>
     <p class="h4">
     <i class="fas fa-glasses mr-1"></i>
     ${engineer.getPosition()}
    </p>
  </div>
 <div class="card-body bg-light">
  <ul class="list-group>
   <li class="list-group-item">
   <span class="font-weight-bold">ID: </span>
   ${engineer.getId()}
   </li>
   <li class="list-group-item">
   <span class="font-weight-bold">Email: </span>
   <a href="mailto:${engineer.getEmail()}">$<profile.getEmail()}</a>
   </li>
   <li class="list-group-item">
   <span class="font-weight-bold">GitHub: </span>
   <a href="https://www.github.com/${engineer.getGithub()}">${engineer.getGithub()}</a>
   </li>
  </ul>
 </div>
</div>
`;
};

//intern
const generateInteren = interen => {
    return `
 <div class="card m-3 shadow" style="width: 300px">
    <div class="card-header bg-success text-white">
     <p class="h3">${interen.getName()}</p>
     <p class="h4">
     <i class="fas fa-glasses mr-1"></i>
     ${interen.getPosition()}
    </p>
  </div>
 <div class="card-body bg-light">
  <ul class="list-group>
   <li class="list-group-item">
   <span class="font-weight-bold">ID: </span>
   ${interen.getId()}
   </li>
   <li class="list-group-item">
   <span class="font-weight-bold">Email: </span>
   <a href="mailto:${interen.getEmail()}">$<interen.getEmail()}</a>
   </li>
   <li class="list-group-item">
   <span class="font-weight-bold">School: </span>
   ${interen.getSchool()}
   </li>
  </ul>
 </div>
</div>
`;
};
const html = [];
}

