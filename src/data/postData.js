import user1 from '../images/user1.svg';
import user2 from '../images/user2.svg';
import user3 from '../images/user3.svg';
import user4 from '../images/user4.svg';
import post_img1 from '../images/post_img1.png';
import post_img2 from '../images/post_img2.png'; 
import write_icon from '../images/write_icon.PNG';
import bag_icon from '../images/bag_icon.PNG';
import lamp_icon from '../images/lamp_icon.PNG';
import calender_icon from '../images/calender_icon.PNG';
import white_img from '../images/white_img.PNG';
const Posts = [
    {
        post_img : post_img1,
        title_img : write_icon,
        type: 'Article',
        Title : 'What if famous brands had regular fonts? Meet RegulaBrands!',
        description : "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
        user_img :user1,
        name : 'Sarthak Kamra',
        date : '',
        company : '',
        location : '',
        website : '',
        jobsite : '',
    },
    {
        post_img : post_img2,
        title_img: lamp_icon,
        type: 'Article',
        Title : 'Tax Benefits for Investment under National Pension Scheme launched by Government',
        description : "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
        user_img : user2,
        name : 'Sarah West',
        date : '',
        company : '',
        location : '',
        website : '',
        jobsite : '',
    },
    {
        post_img : white_img,
        title_img: calender_icon,
        type: 'Meetup',
        Title : 'Finance & Investment Elite Social Mixer @Lujiazui',
        description : "",
        user_img: user3,
        name : 'Ronal Jones',
        date : 'Fri, 12 Oct, 2018',
        company : '',
        location : 'Ahmedabad, India',
        website : '#',
        jobsite : '',
        
    },
    {
        post_img :white_img,
        title_img: bag_icon,
        type: 'Job',
        Title : 'Software Developer',
        user_img :user4,
        name : 'Joseph Gray',
        date : '',
        company : 'Innovaccer Analytics Private Ltd.',
        location : 'Noida, India',
        website : '',
        jobsite : '#',
    },

]

export default Posts;