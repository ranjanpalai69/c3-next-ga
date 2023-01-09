


import styles from '../styles/Home.module.css';
const skills=[
    "HTML" ,"CSS" ,"JAVASCRIPT"," NODE JS" ,"MONGO DB","REACT JS","NEXT JS","REDUX","TYPESCRIPT"
]
const Profile = ({profile}) => {
    
    console.log(profile);
  return (
    <div className={styles.profile}>
        <h1>My Profile</h1>
         <img src={profile.avatar_url} alt={profile.name} />
         <h2>Name:-- {profile.name}</h2>
         <h3>Proffesion:-- {profile.bio}</h3>
         <div>
         <h3>Skills:- </h3>
            {
                
                skills?.map((skill)=>{
                    return <span key={Math.random()+Date.now()}>
                      &nbsp; {skill} &nbsp; &nbsp; |
                      
                    </span>
                    
                })
            }
         </div>
         <br />
         <br />
         <div>
         <button onClick={()=>window.location.href("https://github.com/ranjanpalai69")}>Follow</button>
         <button onClick={()=>window.location.href("https://drive.google.com/file/d/1UtxxK7TwmZPjRIDb9zk2S7D4WI8tMj-3/view?usp=share_link")}>Resume</button>
         </div>
    </div>
  )
}



export default Profile