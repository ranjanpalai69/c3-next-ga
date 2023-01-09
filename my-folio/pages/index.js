
import Cards from '../components/Cards'
import Profile from '../components/Profile'
import styles from '../styles/Home.module.css'
export default function Home({profile}) {
  
  return (
    <div>
      
      
      <Profile profile={profile}/>
       
       <h1 className={styles.heading}>My projects</h1>
       
       
       <br/>
       <br/>
       <Cards/>



          
       
         
    </div>
  )
}


export async function getStaticProps(){
  const res=await fetch("http://localhost:8080/profile");
  // console.log(res)
  const data=await res.json();
  // console.log(data)
  return {
      props:{
          profile:data
      }
  }
}

