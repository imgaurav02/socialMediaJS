import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css"
// import { Posts } from "../../DummyData";
import axios from "axios"

export default function Feed({username}) {
    const [posts,setPosts] = useState([]);
    
    // console.log(username);
    useEffect(() => {

        const fetchPosts = async() => {
            const res = username ? await axios.get("/posts/profile/aman") :await axios.get("posts/timeline/6443c02a35d20611ffbc0056")
            setPosts(res.data)
            // console.log(res.data);
        };

        fetchPosts();
    },[]);

    return(
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map(p => 
                    <Post key={p._id} post={p} />
                )}
                
            </div>

        </div>
    );
}