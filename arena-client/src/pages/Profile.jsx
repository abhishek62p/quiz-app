import { useLocation } from "react-router-dom";
import Button from "../components/Button";

export default function Profile() {
  const localtion = useLocation()
  const userId = localtion?.state.userId
  console.log(userId);

  const dashboardNav = [
    { label: "Create Quiz" },
    { label: "Create Question" },
    { label: "View All Ques" },
    { label: "View Quiz-Ques" },
    { label: "Score Card" },
  ];
  
   return (
    <div className="profile-container">
      <div className="user-card">
        <div style={{borderBottom: "2px solid #00000014", width: "100%",paddingBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "start", gap: "2rem"}}>
          <div className="user-profile-picture"></div>
          <div><p>esfvwas</p></div>
        </div>
        <div style={{display: "flex", flexDirection: "column", gap: ".75rem"}}>
          <p style={{border: "2px solid", padding: ".5rem 1.25rem"}}>User Name</p>
          <p style={{border: "2px solid", padding: ".5rem 1.25rem"}}>Full Name</p>
          <p style={{border: "2px solid", padding: ".5rem 1.25rem"}}>User Name</p>
          <p style={{border: "2px solid", padding: ".5rem 1.25rem"}}>User Name</p>
          <p style={{border: "2px solid", padding: ".5rem 1.25rem"}}>User Name</p>
          <p style={{fontSize: "1rem",}}>creaateAt</p>
          <div style={{display: "flex", flexDirection: "column"}}>
            <button style={{background: "transparent",border: "2px solid", padding: ".5rem 1.25rem"}}>Edit Profile</button>
            <button style={{border: "2px solid", padding: ".5rem 1.25rem"}}>Logout</button>
          </div>
        </div>
      </div>
      <div style={{padding:"2rem" ,height: "80%",width: "65%", backgroundColor: "white",borderRadius: ".75rem" }}>
        <div>
          <p>User Dashboard</p>
          <div style={{fontSize: "1rem", display: "flex", justifyContent: "space-between",border: "2px solid", padding: "1rem"}}>
            {dashboardNav.map((dashnav) => <Button data={dashnav.label} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
