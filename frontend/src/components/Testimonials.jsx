import "../styles/Testimonials.css";

function Testimonials() {

const users=[
{
name:"Rahul Sharma",
role:"Software Engineer",
text:"CareerPilot AI helped me improve my resume and crack my first job interview."
},
{
name:"Priya Reddy",
role:"Java Full Stack Student",
text:"The AI roadmap guided me step-by-step to become job-ready."
},
{
name:"Arjun Kumar",
role:"Web Developer",
text:"Amazing platform. The interview preparation was extremely useful."
}
];

return(

<section className="testimonials">

<h2>Success Stories</h2>

<div className="testimonial-grid">

{users.map((user,index)=>(

<div className="testimonial-card" key={index}>

<h3>{user.name}</h3>

<span>{user.role}</span>

<p>"{user.text}"</p>

</div>

))}

</div>

</section>

);

}

export default Testimonials;