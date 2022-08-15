
const generateTeam = team => {
    //manager
    const generateManager = manager => {
        return `
    <div class="card m-3 shadow" style="width: 300px">
    <div class="card-header bg-success text-white">
     <p class="h3">${manager.getName()}</p>
     <p class="h4">
     <i class="fas fa-glasses mr-1"></i>
     ${manager.getRole()}
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
     ${engineer.getRole()}
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
const generateInteren = intern => {
    return `
 <div class="card m-3 shadow" style="width: 300px">
    <div class="card-header bg-success text-white">
     <p class="h3">${intern.getName()}</p>
     <p class="h4">
     <i class="fas fa-glasses mr-1"></i>
     ${intern.getRole()}
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
html.push(team
    .filter(employee => employee.getRole() === "Manager")
    
    .map(manager =>generateManager(manager)));

    html.push(team
        .filter(employee => employee.getPosition() === "Engineer")
        
        .map(engineer =>generateEngineer(engineer)).join(""));

        html.push(team
            .filter(employee => employee.getRole() === "Intern")
            
            .map(intern =>generateIntern(intern)).join(""));    
return html.join("");
}

module.exports = team => {
    return `
    <!Document>
    <html lang="en">
     <head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Team Profiles</title>
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous"/>
       <link rel="stylesheet" href="style.css">
     </head>
     <body class="pb-5">
      <header class="bg-info py-4 mb-5">
       <h1 class="text-center text-white">
       <i class="fas fa-users mr-1"></i>
        Team Profile
       </h1>
      </header>
   <!-- Profile main section -->
   <main>
     <div class="container">
       <div class="row d-flex justify-content-center align-items-center">   
         ${generateTeam(team)}       
       </div>
     </div>
   </main>
      
   
     </body>
   
    </html>
    
    `;
}

