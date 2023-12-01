// // import React, { useState } from 'react';
// // import Navbar from './components/Navbar';
// // import Text from './components/Text';
// // import Alert from './components/Alert';
// // import About from './components/About';




// // import {
// //   BrowserRouter as Router,
// //   Switch,
// //   Route,
// //   Link
// // } from "react-router-dom";

// // function App() {
// //   const [mode, setMode] = useState('light');
// //   const [alert, setAlert] = useState(null);
// //   const [text, setText] = useState('');

// //   const toggleMode = () => {
// //     if (mode === 'light') {
// //       setMode('dark');
// //       document.body.style.backgroundColor = 'black';
// //       setAlert("dark mode has been activated")
// //       document.body.style.color="blue"
// //       setTimeout(() => {
// //        setAlert(null)
// //       }, 3000);
// //     } else {
// //       setMode('light');
// //       document.body.style.backgroundColor = 'white';
      
// //       setAlert("light mode has been activated")
// //       document.body.style.color="blue"
// //       setTimeout(() => {
// //         setAlert(null)
// //        }, 3000);
// //     }
// //   };

// //   const sets = (text) => {
// //     if (text.length % 2 === 0) {
// //       setAlert('even');
// //       document.body.style.color="blue"
// //     } else {
// //       setAlert('odd');
// //       document.body.style.color="blue"
// //     }
// //   };

// //   const handleTextChange = (newText) => {
// //     setText(newText);
// //     sets(newText);
// //     console.log('Length of the text:', newText.length);
// //   };

// //   return (
// //     <>
// //     <Router>
// //       <Navbar title="mera website" price={3} mode={mode} toggleMode={toggleMode} />
// //       <Alert title={alert} sets={text} />
    
// //       <Switch>
// //           <Route exact path="/about">
// //           <About mode={mode}  content="Mahendra Singh Dhoni  born 7 July 1981) is an Indian professional cricketer, who plays as a wicket-keeper-batsman. Widely regarded as one of the world's greatest wicket-keeper-batsmen and captains in the history of the sport,[a] he is known for his explosive batting, wicket-keeping and leadership skills.[9] He was the captain of the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. Dhoni is the first cricketer to be a winning captain of all three major ICC trophies, as under his captaincy, India won the 2007 ICC World Twenty20, the 2011 Cricket World Cup, and the 2013 ICC Champions Trophy, the most by any captain. He also led India to victory in the 2010 and 2016 Asia Cup. Additionally, under his leadership, India won the 2010 and 2011 ICC Test Mace and 2013 ICC ODI Championship. He plays for and captains Chennai Super Kings franchise in the Indian Premier League." />

// //           </Route>
          
// //           <Route exact  path="/">
// //           <Text t="enter your text"  mode={mode} onChange={handleTextChange} />
// //           </Route>
// //         </Switch>
// //         </Router>
// //     </>
// //   );
// // }

// // export default App;
// import './App.css';
// import Navbar from './components/Navbar';
// import Text from './components/Text';
// import About from './components/About';
// import React, { useState } from 'react';
// import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

 
// function App() {
//   const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type)=>{
//       setAlert({
//         msg: message,
//         type: type
//       })
//       setTimeout(() => {
//           setAlert(null);
//       }, 1500);
//   }

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743'; // Dark mode background color
//       showAlert("Dark mode has been enabled", "success");
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white'; // Light mode background color
//       showAlert("Light mode has been enabled", "success");
//     }
//   };
//   return (
//     <>
//     <Router>
//     <Navbar title="TextUtils" mode={mode} showAlert={showAlert} toggleMode={toggleMode} key={new Date()} />
//     <Alert alert={alert}/>
//     <div className="container my-3">
//     <Switch>
//     {/* /users --> Component 1
//         /users/home --> Component 2 */}
//           <Route exact path="/about">
//             <About mode={mode} />
//           </Route>
//           <Route exact path="/">
//             <Text showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
//           </Route>
//     </Switch>
//     </div>
//     </Router>
//     </> 
//   );
// }

// export default App;

import React, { Component } from 'react'
import Navbar from './components/Navbar';
// import LoadingBar from 'react-top-loading-bar'

import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


const App=()=> {
  
    return (
      
      // <div style={{backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD9HUpUDljjxn4GkW3VB3NCxYmbYcbWGKJ6A&usqp=CAU")', paddingRight: '400px'}}>

      <div style={{backgroundColor:"cyan",paddingRight:"400px"}}>
            <p style={{backgroundColor:"red",border:"solid 3px black",display:"flex",justifyContent: 'center',height:"50px",alignItems:"center",marginLeft:"300px",fontSize:"large"}}>INDIA NEWSSZZ TODAY</p>
        <Router>
        <Navbar />
        {/* <LoadingBar
        color='#f11946'
        progress={10}
       
      /> */}
        <Switch>
        <Route exact path="/">
          <News key="business"country="in" category="business"/>
          </Route>
          <Route exact path="/science">
          <News key="science"country="in" category="science"/>
          </Route>
          <Route exact path="/technology">
          <News key="technology"country="in" category="technology"/>
          </Route>
          <Route exact path="/entertainment">
          <News key="entertainment"country="in" category="entertainment"/>
          </Route>
          <Route exact path="/sports">
          <News key="sports"country="in" category="sports"/>
          </Route>
        </Switch>
        </Router>
      </div>
    );
  }

  export default App;
// import './App.css';

// import React, { useState } from 'react'
// import Navbar from './components/Navbar';
// import News from './components/News';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

// const App = ()=> {
//   const pageSize = 5;
//   const apiKey = process.env.REACT_APP_NEWS_API
//   const [progress, setProgress] = useState(0)
 
//     return (
//       <div>
//         <Router>
//         <Navbar/> 
//         <LoadingBar
//         height={3}
//         color='#f11946'
//         progress={progress} 
//       />
//         <Switch>
//           <Route exact path="/"><News key=""setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
//           <Route exact path="/business"><News key=""setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
//           <Route exact path="/entertainment"><News key=""setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
//           <Route exact path="/general"><News key=""setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
//           <Route exact path="/health"><News key=""setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
//           <Route exact path="/science"><News key=""setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
//           <Route exact path="/sports"><News key=""setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
//           <Route exact path="/technology"><News key=""setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
//         </Switch>
//         </Router>
//       </div>
//     )
 
// }

// export default App;