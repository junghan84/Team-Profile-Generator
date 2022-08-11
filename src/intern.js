//Inter profile template
const interen = (profile) => `
 <div class="card m-3 shadow" style="width: 300px">
    <div class="card-header bg-success text-white">
     <p class="h3">${profile.getName()}</p>
     <p class="h4">
     <i class="fas fa-glasses mr-1"></i>
     ${profile.getPosition()}
    </p>
  </div>
 <div class="card-body bg-light">
  <ul class="list-group>
   <li class="ilst-group-item">
   <span class="font-weight-bold">ID: </span>
   ${profile.getId()}
   </li>
   <li class="ilst-group-item">
   <span class="font-weight-bold">Email: </span>
   <a href="Email${profile.getEmail()}">$<profile.getEmail()}</a>
   </li>
   <li class="ilst-group-item">
   <span class="font-weight-bold">School: </span>
   ${profile.getSchool()}
   </li>
  </ul>
 </div>
</div>
`;

module.exports = interen;