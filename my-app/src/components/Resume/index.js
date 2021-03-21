import React from 'react';
import resumeFile from '../../assets/Resume/Da’Vonta_Williamson_Coding_Resume.pdf'

function Resume() {
    return(
        <section>
    <div>
        <h2 className='resumeInfo'> Skills and Languages</h2>
        <ul className='skills'>
  <ol>HTML</ol>
  <ol>CSS</ol>
  <ol>Javascript</ol>
  <ol>React</ol>
</ul>
    </div>
    <div>
        <ul className='language'>
  <ol>Bootstrap</ol>
  <ol>Node JS</ol>
  <ol>Mongoose</ol>
  <ol>Materialize</ol>
</ul>
    </div>
    <div className = "resume">
        <a href={resumeFile} download ={resumeFile}>Da'Vonta Resume</a>
    </div>
    </section>
    )
}


export default Resume;