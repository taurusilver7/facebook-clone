import React from 'react';
import Story from './Story';
import './StoryReel.css';

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story 
                image="https://images.unsplash.com/photo-1566031687073-e328f7343951?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80" 
                profileSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb" title="Sonny" />

            <Story 
                image="https://images.unsplash.com/photo-1553061592-03b4b2df2f66?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" 
                profileSrc="https://avatars.githubusercontent.com/u/24712956?s=400" title="Rafeh Qazi" />

            <Story 
                image="https://media.gettyimages.com/illustrations/painted-muslin-illustration-id97744371?s=612x612" 
                profileSrc="https://uifaces.co/our-content/donated/N5PLzyan.jpg" title="Frankie" />

            <Story 
            image="https://www.wallpapertip.com/wmimgs/3-37780_abstract-wallpaper-portrait-hd.jpg" 
            profileSrc="https://uifaces.co/our-content/donated/vIqzOHXj.jpg" 
            title="Aaron Bernath" />

        </div>
    )
};

export default StoryReel;
