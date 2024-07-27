const currentlyActive = 0;

class Project{
constructor(name){
    this.name=name;
}
}
class ProjectElements{
    constructor(title){
        this.title=title;
    }
}

const projectsTab = [
// new Project({
//     name: "Test",
//     })
]; 

// Object.assign(projectsTab[0], testing);

const addProject = () =>{
projectsTab.push(el);
}

const addItems = (items) =>{

}

const activeProject = () =>{

}

function DOM(){
    let projectname = document.getElementById("projectname");
    let content = document.getElementById('content');
    let navbar = document.getElementById('navbar');
    let projectCreateBtn = document.getElementById("submitbtn");
    let projectList = document.createElement('ul');
    let projectContentList = document.createElement('ul');
    let projectContentInput = document.createElement('input');
    let projectContentBtn = document.createElement('button');
    content.appendChild(projectContentInput);
    content.appendChild(projectContentBtn);

    projectCreateBtn.addEventListener('click',()=>{
        let project = new Project(projectname.value);
        projectsTab.push(project);
            displayProjects();
        });
    function displayProjects(){
        projectList.innerHTML="";
        let list = JSON.parse(getList());
            list.forEach((project,index) => {
                let projectListElement = document.createElement('li');
            projectListElement.innerHTML=project.name;
            projectList.appendChild(projectListElement);
            navbar.appendChild(projectList);
            projectListElement.addEventListener('click',()=>projectElementDisplay(project,index));
            });
            
        };
    function projectElementDisplay(project,index){
        projectContentList.innerHTML="";
        projectContentBtn.addEventListener('click',()=>{
            let projectElement = new ProjectElements(projectContentInput.value);
            Object.assign(projectsTab[index], projectElement);
            projectElementDisplay(project,index);
        });
        
        console.log("EEE");
        let projectContentListElement = document.createElement('li');
        projectContentListElement.innerHTML=projectsTab[index].title;
        projectContentList.appendChild(projectContentListElement);
        content.appendChild(projectContentList);
        }
    }

const defaultProject = new Project("Default");
projectsTab.push(defaultProject);
console.log(projectsTab);

DOM();

const getList = () => {
    return JSON.stringify(projectsTab,["name"]);
}
