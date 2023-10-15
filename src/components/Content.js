import React from 'react'
import Posts from '../data/postData'
import location_icon from '../images/location_icon.svg';
import error_icon from '../images/error_icon.svg';
import edit_icon from '../images/edit_icon.svg';
import eye_icon from '../images/eye_icon.svg';
import share_icon from '../images/share_icon.svg';

export default function Content() {
  return (
    <div className='content-div'>
        <div className='posts-div'>
        {Posts.map((post, index) => (
        <div className="post-container" key={index}>
          <div className="card post-card">
   
   <img src={post.post_img} className=" post_img" alt="..." /> 
  <div className="card-body">
    <div className='card-title'> 
    <img src={post.title_img} className='title_img' />
    {post.type}
        </div>
    
    <p className="card-text"></p>
    <div className='post_heading'>
        <div> {post.Title}</div><div>...</div>
    </div>
    {post.description ? <div className='post-description'>
        {post.description}</div> : null}
        <div  className='post-details'>
    { post.date? <div>{post.date}</div>: null}
    {post.company ? <div>{post.company}</div> : null}
    {post.location ? <div><img src={location_icon} />{post.location}</div> :null}
    </div>
    {post.website ? <div className='link-div'><a href={post.website} style={{ color:'orange' }}>Visit Website</a></div>:null}
    {post.jobsite ? <div className='link-div'><a href={post.jobsite} style={{ color:'green' }}>Apply on Timesjob</a></div> : null}
    <div style={{ display:'flex',justifyContent:'space-between', marginTop: '1rem'}}>
        
    <div>
        <img src={post.user_img} className='user_img'/>{post.name}
    </div>
    <div>
        <img src={eye_icon} /> 1.4k views <button className='share-btn'><img src={share_icon} /></button>
    </div>
    </div>
  </div>
</div>
        </div>
      ))}
      </div>  
      <div className='side-content-div'>
            <div className='side-search-div'>
                <img src={location_icon} />
                <input type='text' placeholder='Noida, India' className='location-input'/>
                <img src={edit_icon} />
            </div>
            <div className='warning-div'>
                <img src={error_icon} />
                Your location will help us serve better and extend a personalised experience.
            </div>
      </div>
    </div>
  )
}
