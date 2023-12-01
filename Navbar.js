// // // import React from 'react';
// // // import PropTypes from 'prop-types';
// // // import {a} from 'react-router-dom';
// // // export default function Navbar(props)  {
// // //   return (
// // //     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
// // //       <div className="container-fluid">
// // //         <a className="navbar-brand" to="#"  style={{backgroundColor:props.mode === 'light' ? 'black' : 'white'}}>{props.title}</a>
// // //         <button
// // //           className="navbar-toggler"
// // //           type="button"
// // //           data-bs-toggle="collapse"
// // //           data-bs-target="#navbarNav"
// // //           aria-controls="navbarNav"
// // //           aria-expanded="false"
// // //           aria-label="Toggle navigation"
// // //         >
// // //           <span className="navbar-toggler-icon"></span>
// // //         </button>
// // //         <div className="collapse navbar-collapse" id="navbarNav">
// // //           <ul className="navbar-nav ms-auto">         
// // //             <Link className="nav-item">
// // //               <a className="nav-a active" aria-current="page" to="/">
// // //                 Home</a>
             
// // //             </Link>
// // //             <Link className="nav-item">
// // //               <a className="nav-a" to="/about">
// // //                 Features
// // //                 </a>
// // //             </Link>
// // //             <Link className="nav-item">
// // //               <a className="nav-a" to="#">
// // //                 {props.price}
// // //               </a>
// // //             </Link>
// // //             <Link className="nav-item">
// // //               <a className="nav-a disabled" aria-disabled="true">
// // //                 Disabled
// // //               </a>
// // //             </Link>
// // //           </ul>
// // //         </div>
// // //         <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
// // //           <input
// // //             className="form-check-input"
// // //             onClick={props.toggleMode}
// // //             type="checkbox"
// // //             id="flexSwitchCheckDefault"
// // //           />
// // //           <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
// // //             Enable DarkMode
// // //           </label>
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // Navbar.propTypes = {title: PropTypes.string, price: PropTypes.number}; 

// // // Navbar.defaultProps = {
// // //     title: 'Set title here',
   
// // // };


// // // //a er jaygay link  to r jaygay to r close a


// // import React from 'react'
// // import PropTypes from 'prop-types'
// // import { a } from 'react-router-dom';

// // export default function Navbar(props) {
// //     return (
// //         <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
// //             <div className="container-fluid">
// //                 <a className="navbar-brand" to="/">{props.title}</a>
// //                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// //                     <span className="navbar-toggler-icon"></span>
// //                 </button>
// //                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// //                         <Link className="nav-item">
// //                             <a className="nav-a" aria-current="page" to="/">Home</a>
// //                         </Link>
// //                         <Link className="nav-item">
// //                             <a className="nav-a" to="/about">{props.aboutText}</a>
// //                         </Link>
// //                     </ul>
// //                     <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
// //                         <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
// //                         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
// //                     </div>
// //                 </div>
// //             </div>
// //         </nav>
// //     )
// // }

// // Navbar.propTypes = {
// //     title: PropTypes.string.isRequired,
// //     aboutText: PropTypes.string.isRequired
// // }

// // Navbar.defaultProps = {
// //     title: 'Set title here',
// //     aboutText: 'About'
// //   };
// import React, {useState} from 'react'


// export default function TextForm(props) {
//     const handleUpClick = ()=>{
//         let newText = text.toUpperCase();
//         setText(newText)
//         props.showAlert("Converted to uppercase!", "success");
//     }

//     const handleLoClick = ()=>{ 
//         let newText = text.toLowerCase();
//         setText(newText)
//         props.showAlert("Converted to lowercase!", "success");
//     }

//     const handleClearClick = ()=>{ 
//         let newText = '';
//         setText(newText);
//         props.showAlert("Text Cleared!", "success");
//     }

//     const handleOnChange = (event)=>{
//         setText(event.target.value) 
//     }

//     // Credits: A
//     const handleCopy = () => {
//         navigator.clipboard.writeText(text); 
//         props.showAlert("Copied to Clipboard!", "success");
//     }

//     // Credits: Coding Wala
//     const handleExtraSpaces = () => {
//         let newText = text.split(/[ ]+/);
//         setText(newText.join(" "));
//         props.showAlert("Extra spaces removed!", "success");
//     }

//     const [text, setText] = useState(''); 
//     // text = "new text"; // Wrong way to change the state
//     // setText("new text"); // Correct way to change the state
//     return (
//         <>
//         <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
//             <h1 className='mb-4'>{props.heading}</h1>
//             <div className="mb-3"> 
//             <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
//             </div>
//             <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
//             <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
//             <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
//             <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
//             <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
//         </div>
//         <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
//             <h2>Your text summary</h2>
//             <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
//             <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
//             <h2>Preview</h2>
//             <p>{text.length>0?text:"Nothing to preview!"}</p>
//         </div>
//         </>
//     )
// }

import React from 'react';
import { Link } from 'react-router-dom';
// document.style.backgroundColor="pink"
const flexContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  border:'solid black 10px',
  backgroundColor:'pink',
  color:'black',
  width:'1300px',
  height:'80px',
  paddingLeft:"100px"
};

const Navbar = (props) => {
  return (
    <div >
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <div className="boi" style={flexContainerStyle}>
               
              <li className="nav-item">
                <Link className="nav-a" aria-current="page" to="/">Home</Link>
              </li>
             
                
                <li className="nav-item">
                  <Link className="nav-a" to="/science" style={{color:"black"}}>Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-a" to="/entertainment" style={{color:"black"}}>entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-a" to="/technology" style={{color:"black"}}>Technology</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-a" to="/sports" style={{color:"black"}}>sports</Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
