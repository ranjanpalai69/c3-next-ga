
import Cards from '../../components/Cards';
import styles from "../../styles/projects.module.css";
const projects = ({repos}) => {
    const{items}=repos;
    console.log(items);
  return (
    <div className={styles.projects}>
      
      <h1>My Projects</h1>
      <h1>Total repositories:- {repos.total_count}</h1>
      <Cards items={items}/>

    </div>
  )
}


export async function getStaticProps(){
    const res=await fetch("http://localhost:8080/repos");
    const data=await res.json();
    return {
        props:{
            repos:data
        }
    }
}

export default projects;