const currentlyActive = 0;

class Project{
constructor(name){
    this.name=name;
    this.elements=[];
}
}
class ProjectElements{
    constructor(title, desctription, dueDate){
        this.title=title;
        this.desctription=desctription;
        this.dueDate=dueDate;
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
    let projectContentInputTitle = document.createElement('input');
    let projectContentInputDescription = document.createElement('input');
    let projectContentInputDueDate = document.createElement('input');
    projectContentInputDueDate.type='date';
    let projectContentBtn = document.createElement('button');
    let contentDiv = document.createElement('div');
    content.appendChild(projectContentInputTitle);
    content.appendChild(projectContentInputDescription)
    content.appendChild(projectContentInputDueDate);
    content.appendChild(projectContentBtn);
    content.appendChild(contentDiv);
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
        contentDiv.textContent="";
        projectContentBtn.addEventListener('click',()=>{
            let projectElement = new ProjectElements(projectContentInputTitle.value, projectContentInputDescription.value, projectContentInputDueDate.value);
            projectsTab[index].elements.push(projectElement);
            projectElementDisplay(project,index);
        });
        let ListDiv = document.createElement('div');
        projectsTab[index].elements.forEach(element=>{
            let el = document.createElement('h3');
            el.appendChild(element);
           ListDiv.appendChild(el); 

        });
        contentDiv.appendChild(ListDiv);
        }
    }

const defaultProject = new Project("Default");
projectsTab.push(defaultProject);
console.log(projectsTab);

DOM();

const getList = () => {
    return JSON.stringify(projectsTab,["name"]);
}
