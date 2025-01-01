AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Engineering Intern",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "National commission for science, technolgy and innovation (NACOSTI)",
    time: "(April - July 2024)",
    desp: "<li>Participated in code reviews.</li> <li>Supported feature implementation tasks.</li> <li>Assisted in software development.</li> <li>Adapted to project requirements.</li><li>Gained hands-on engineering experience.</li>",
  },
  {
    title: "Full-Stack Developer",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "Edureka",
    time: "(May - Aug,2024)",
    desp: "<li>Built scalable web applications.</li><li>Implemented secure backend systems. </li><li>Integrated databases with precision.</li><li>Collaborated with cross-functional teams.</li> <li>Utilized modern development frameworks. </li>",
  },
  {
    title: "Freelance Graphic Designer",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "Remote (online)",
    time: "(July, 2022- Present)",
    desp: "<li>Created User-centered digital Experience.</li><li>Developed dynamic social media Graphics.</li> <li>Collaborated with diverse clients.</li> </li> <li>Enhanced Brand through Creativity.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);