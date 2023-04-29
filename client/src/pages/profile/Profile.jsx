import "./profile.css"
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
        <>
            <Topbar />
            <div className="profile">

                <Sidebar />
                <div className="profileRight">
                    <div className="profileRIghtTop">
                    <div className="profileCover">
                        <img src={ `${PF}post/3.jpeg`} className="profileCoverImg" alt="" />
                        <img src={ `${PF}post/7.jpeg`} className="profileUserImg" alt="" />
                    </div>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Gaurav Singh</h4>
                        <span className="profileInfoDesc">Hello!! my friends</span>
                    </div>
                    <div className="profileRIghtBottom">
                        <Feed username="aman" />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;