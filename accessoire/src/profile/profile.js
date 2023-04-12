import PropTypes from 'prop-types';

const Profile = ({ fullName = "Gabe Christian", bio = "No bio available", profession = "Unknown", handleName, children }) => {
  return (
    <div style={{ backgroundColor: "lightblue", padding: "80px", borderRadius: "20px",  }}>
    <h1>{fullName}</h1>
    <div> {children} </div> 
      <p>{bio}</p>
      <br></br>
      <p>{profession}</p>
      
      <button onClick={() => handleName(fullName)} style={{ backgroundColor: "lightblue", width:"120px", height:"50px",margin:"40px", cursor:"pointer"}}>Show Name</button>
    </div>
    
  );
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default Profile;
