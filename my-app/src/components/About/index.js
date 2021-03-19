import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p> "I'm Da'Vonta Williamson born and raised in the beautiful city of Orlando,FL.
            Learning the skills to become a a great coder. Hopefully landing a job to becoming a Web developer,
            Computer systems engineer,  or Database administrator. Feel free to take a look at my recent work project
            on my work page. Any other questions feel free to contact me.
        </p>
      </div>
    </section>
  );
}

export default About;