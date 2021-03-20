import React from 'react';
import resumeFile from '../../assets/Resume/'


function Resume() {
    return(
        <section>
    <div>
        <p>HTML,CSS, Javascript, React</p>
    </div>
    <div>
        <p>Bootstrap, Node.js, Mongoose, Materlize</p>
    </div>
    <div>
        <a href={resumeFile} download ={resumeFile}>Da'Vonta Resume</a>
    </div>
    </section>
    )
}


export default Resume