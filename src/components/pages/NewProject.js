 import styles from './NewProject.module.css'

 import ProjectForm from '../project/ProjectForm'

function NewProject(){
    return(
        <div className={styles.newproject_container}>
            <h1>Create Project</h1>
            <p>Create your project and then add the services</p>
            <ProjectForm btnText="Criar Projeto"/>
        </div>       
    )
}

export default NewProject;