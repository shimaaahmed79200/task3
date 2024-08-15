/* eslint-disable react/no-unescaped-entities */
import Avatar from '../Profile/avatar-jessica.jpeg';
function Profile(){
    return (
        <div id='Title'>
            <img src={Avatar} alt="Profile Photo" />
            <h1>Jessica Randall</h1>
            <h2>London,United Kingdom</h2>
            <p>"Front-end developer and Avid reader"</p>
            <div id='list'>
                <li>GitHub</li>
                <li>Frontend Mentor</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </div>
        </div>
    )
}
export default Profile;