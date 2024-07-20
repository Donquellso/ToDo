const currentlyActive = 0;

class Project{
constructor(name){
    this.name=name;
}

getProject(){
    console.log(tab[0]);
}

}

const tab = [
{
}


]; 
const addProject = () =>{
tab.push(el);
}

const addItems = (items) =>{

}

const activeProject = () =>{

}

function DOM(){
    let projectname = document.getElementById("projectname");
    let navbar = document.getElementById('navbar');
    let submitbtn = document.getElementById("submitbtn");
    let projectxt = document.createElement('p');
    navbar.appendChild(projectxt);
        submitbtn.addEventListener('click',()=>{
        let project = new Project(projectname.value);
        tab.push(project);
            updateNavbar()
        });
        function updateNavbar(){
            projectxt.textContent="";
            tab.map(project =>{
                projectxt.textContent+=project.name;
            })
        }
    }
const defaultProject = new Project("Default");
tab.push(defaultProject);


DOM();
console.log(tab);
