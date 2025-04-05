import img1 from '../assets/13.jpg';
const x = true;

export default function Profile() {
  return (
    <div className="profile-container">
      <div style={{height: "70%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2rem", width: "30%", border: "2px solid"}}>
            <div style={{width: "7rem", height: "7rem", borderRadius: "50%",border: "2px solid"}}></div>
        <div style={{display: "flex", flexDirection: "column", gap: ".75rem", fontSize: "1.25rem"}}>
            <p style={{border: "2px solid", padding: ".5rem 1.25rem"}}>User Name</p>
            <p style={{border: "2px solid", padding: ".5rem 1.25rem"}}>Full Name</p>
            <p style={{fontSize: "1rem",}}>creaateAt</p>
            <div style={{display: "flex", flexDirection: "column"}}>
                <button style={{border: "2px solid", padding: ".5rem 1.25rem"}}>edit</button>
                <button style={{border: "2px solid", padding: ".5rem 1.25rem"}}>logout</button>
            </div>
        </div>
      </div>
      <div style={{width: "70%", border: "2px solid green"}}>
        <div>
        </div>
      </div>
    </div>
  );
}
