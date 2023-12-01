// import React, { useEffect,useState } from 'react'
// import Newsitem from './Newsitem'
// import PropTypes from 'prop-types'

// const hui = {
//   display: 'flex',
//   flexDirection: 'column', // or 'column' for a column layout
//   justifyContent: 'space-between', // or other justify-content values
//   alignItems: 'center', // or other align-items values
// };

// const News=()=> {
  

  
//   const [articles, setArticles] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [page, setPage] = useState(1)

// const  componentDidMount=async()=>{

// // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=be9699cf175a494bb5e86b799fbdaaed&page=1&pageSize=2`;
// // let data=await fetch(url)
// // let fetchdata=await data.json()
// // this.setState({articles:fetchdata.articles})

// const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=be9699cf175a494bb5e86b799fbdaaed&page=1&pageSize=2`;

// let data = await fetch(url);

// let fetchdata = await data.json()

// setArticles(fetchdata.articles)
// setTotalResults(fetchdata.totalResults)

// }
// const handleNextClick = async () => {
//   console.log("Next");
  
  
//   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=be9699cf175a494bb5e86b799fbdaaed&page=${setPage + 1}&pageSize=2`;

// let data = await fetch(url);

// let fetchdata = await data.json()
// setArticles(fetchdata.articles)
// setTotalResults(fetchdata.totalResults)
// }

// const handlePrevClick = async () => {
//   console.log("Previous");
  
//   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=be9699cf175a494bb5e86b799fbdaaed&page=${setPage- 1}&pageSize=2`;

// let data = await fetch(url);

// let fetchdata = await data.json()
// setArticles(fetchdata.articles)
// setTotalResults(fetchdata.totalResults)
// }

//   return (
//     <div style={hui}>
//       {articles.map((element) => (
//          return <div className="col-md-4" key={element.url}>
//         <Newsitem 
//           key={index} // Add a unique key to each Newsitem
//           title={element.title}
//           desc={element.description}
//           urlToImage={element.urlToImage}
//           url={element.url}
//           author={element.author}
//           publishedAt={element.publishedAt}
//         />
//         </div>
//       ))}
//       <div className="container d-flex justify-content-between">
//       <button type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
// <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

// </div>
//     </div>
    
//   );
// }

// News.defaultProps = {
//   country: 'in',
 
//   category: 'general',
// }

// News.propTypes = {
//   country: PropTypes.string,
  
//   category: PropTypes.string,
// }

// export default News


import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import PropTypes from 'prop-types';

const hui = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=be9699cf175a494bb5e86b799fbdaaed&page=${page}&pageSize=2`;
      const data = await fetch(url);
      const fetchdata = await data.json();
      setArticles(fetchdata.articles);
      setTotalResults(fetchdata.totalResults);
    };

    fetchData();
  }, [page, props.country, props.category]);

  const handleNextClick = async () => {
    setPage(page + 1);
  };

  const handlePrevClick = async () => {
    setPage(page - 1);
  };

  return (
    <div style={hui}>
      {articles.map((element, index) => (
        <div className="col-md-4" key={element.url}>
          <Newsitem
            key={index}
            title={element.title}
            desc={element.description}
            urlToImage={element.urlToImage}
            url={element.url}
            author={element.author}
            publishedAt={element.publishedAt}
          />
        </div>
      ))}
      <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-dark" onClick={handlePrevClick}>
          &larr; Previous
        </button>
        <button type="button" className="btn btn-dark" onClick={handleNextClick}>
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: 'in',
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
