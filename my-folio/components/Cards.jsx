
import React from 'react'
import styles from "../styles/projects.module.css" ;
const Cards = ({items}) => {
  
  return (
    <div className={styles.pro}>
       {
            items?.map((item)=>{
                return <div key={item.id} className={styles.box} onClick={()=> window.location.href(`${item.html_url}`)}>
                    <h3 >Project Name:-- {item.name}</h3>
                     <p >Project Url:-{item.html_url}</p>
                     <h3>Star count:- {item.stargazers_count}</h3>
                     <p>Starred Url:-{item.stargazers_url}</p>
                     <h3>Forks count:- {item.forks}</h3>
                      <h3>Language:- {item.language}</h3>
                    
                </div>
            })
          }
    </div>
  )
}

export default Cards;