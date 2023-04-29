import { Chat, Event, Group, HelpOutline, MusicVideo, Person, RssFeed, School, VideoCall, VideoCameraBack, WorkOutline } from "@mui/icons-material";
import "./sidebar.css"
import { Users } from "../../DummyData";
import CloseFriend from "../closeFriend/CloseFriend";
export default function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoCall className="sidebarIcon" />
                        <span className="sidebarItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon" />
                        <span className="sidebarItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        <span className="sidebarItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon" />
                        <span className="sidebarItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">

                    {Users.map(u => {
                        return <CloseFriend key={u.id} user={u} />

                    })}

                </ul>
            </div>
        </div>
    );
}