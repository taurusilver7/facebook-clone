import React, { useEffect, useState } from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel.js';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';
import db from '../../firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snap => {
            setPosts(snap.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        })
    }, [])
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map(post => {
                return (
                    <Post 
                        key={post.id}
                        profilePic={post.data.profilePic}
                        message={post.data.message}
                        username={post.data.username}
                        image={post.data.image} />
                )
            })}
        </div>
    )
};

export default Feed;
