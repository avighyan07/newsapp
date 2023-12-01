import React, { Component } from 'react'
import PropTypes from 'prop-types'
const mystyle = {
    width:"700px"
   };
const Newsitem=(props)=>{
 

    let {title,desc,urlToImage,url,publishedAt,author}=props
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={urlToImage} style={mystyle} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text" style={{border:"solid black 5px"}}>{desc}</p>
    <a href={url} className='btn'>read more</a>
    <p> author:{author}</p>
   <p> time:{new Date (publishedAt).toGMTString()}</p>
  </div>
</div>
      </div>
    )
  }


export default Newsitem


// import React from 'react'

// const Newsitem = (props)=> {
//         let { title, description, imageUrl, newsUrl, author, date, source } = props;
//         return (
//             <div className="my-3">
//                 <div className="card">
//                     <div style={{
//                         display: 'flex',
//                         justifyContent: 'flex-end',
//                         position: 'absolute',
//                         right: '0'
//                     }
//                     }> 
//                         <span className="badge rounded-pill bg-danger"> {source} </span>
//                     </div>
//                     <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">{title}  </h5>
//                         <p className="card-text">{description}</p>
//                         <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
//                         <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
//                     </div>
//                 </div>
//             </div>
//         )
     
// }

// export default Newsitem