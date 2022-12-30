
import { useEffect, useMemo, useState } from 'react';
import './app.css'
import Kbc from './components/Kbc';
import Timer from './components/Timer';
import Start from './components/Start';
import Footer from './components/Footer';
function App() {
const [username,setUsername]=useState(null)
  // which is active amount 
  const [questionNumber,setQuestionNumber]=useState(1);
  const [stop,setStop]=useState(false);
  const [earned,setEarned]=useState("Rs 0");


  const data =[{

    id:1,
    question:"Where is Ravindra Bhatt house located ?",
    answers:[
      {
        text:"Pittrogarh",
        correct:false,
      },
      {
        text:"Gotan",
        correct:false,
      },
      
      {
        text:"Dharchula",
        correct:true,
      },
      {
        text:"IKG BH1",
        correct:false,
      },
    ],
  },
  {
  id:2,
    question:"Will Ravindra Bhatt take Pay after placement Programme in Future ?",
    answers:[
      {
        text:"Yes",
        correct:false,
      },
      {
        text:"No",
        correct:false,
      },
      
      {
        text:"Cannot say",
        correct:true,
      },
      {
        text:"Either Yes or No",
        correct:false,
      },
    ],
  },
  {
  id:3,
    question:"When Will Bhatt get Marriage ?",
    answers:[
      {
        text:"2023",
        correct:false,
      },
      {
        text:"2027",
        correct:false,
      },
      
      {
        text:"2025",
        correct:true,
      },
      {
        text:"Will be bachelor",
        correct:false,
      },
    ],
  },
  {
    id:4,
      question:"Bhatt Origin name is belong to which religion ?",
      answers:[
        {
          text:"Christian",
          correct:false,
        },
        {
          text:"Hindu",
          correct:false,
        },
        
        {
          text:"Sikh",
          correct:false,
        },
        {
          text:"Muslim",
          correct:true,
        },
      ],
    },

    {
      id:5,
        question:"What is the favorite song of Vishal ?",
        answers:[
          {
            text:"Lolipop lagelu",
            correct:false,
          },
          {
            text:"Chora Zamidara",
            correct:true,
          },
          
          {
            text:"Zuda Hoke Bhi",
            correct:false,
          },
          {
            text:"O La La ",
            correct:false,
          },
        ],
      },
      {
        id:6,
          question:"Will Vishal Project will be Success in External Exam ?",
          answers:[
            {
              text:"Yes",
              correct:false,
            },
            {
              text:"Never",
              correct:false,
            },
            
            {
              text:"No",
              correct:false,
            },
            {
              text:"cannot say",
              correct:true,
            },
          ],
        },

      {
        id:7,
          question:"Will Vishal be fall love any girl in Cognizant  ?",
          answers:[
            {
              text:"Yes",
              correct:false,
            },
            {
              text:"No",
              correct:false,
            },
            
            {
              text:"Cannot say",
              correct:false,
            },
            {
              text:"depend on Vishal mood",
              correct:true,
            },
          ],
        },

        {
          id:8,
            question:"Name the Person that signify Hodophile ?",
            answers:[
              {
                text:"Vishal",
                correct:false,
              },
              {
                text:"Rahul",
                correct:false,
              },
              
              {
                text:"Pawan",
                correct:false,
              },
              {
                text:"Adrash",
                correct:true,
              },
            ],
          },

        {
          id:9,
            question:"Eventually Adrash eat chicken in interval of how many days ?",
            answers:[
              {
                text:"after two days",
                correct:false,
              },
              {
                text:"after one day",
                correct:false,
              },
              
              {
                text:"cannot say",
                correct:false,
              },
              {
                text:"he can eat every day",
                correct:true,
              },
            ],
          },

          {
            id:10,
              question:"Name the Person tha fit the word 'Chamar' ?",
              answers:[
                {
                  text:"Ridham",
                  correct:false,
                },
                {
                  text:"Bhim",
                  correct:false,
                },
                
                {
                  text:"Vipul",
                  correct:false,
                },
                {
                  text:"Pawan PC",
                  correct:true,
                },
              ],
            },

            


];

  const moneyPyramid = useMemo(()=>
    [

      {id:1,amount:"RS 10000"},
      {id:2,amount:"RS 20000"},
      {id:3,amount:"RS 30000"},
      {id:4,amount:"RS 40000"},
      {id:5,amount:"RS 50000"},
      {id:6,amount:"RS 60000"},
      {id:7,amount:"RS 70000"},
      {id:8,amount:"RS 80000"},
      {id:9,amount:"RS 90000"},
      {id:10,amount:"RS 100000"},
      
  
      
    ].reverse(),

  []);


  useEffect(()=>{
    questionNumber >1 && setEarned(moneyPyramid.find((m)=>m.id === questionNumber-1).amount)
  },[moneyPyramid,questionNumber]);
  return (
    <div>
    
    <div className="app">
    
    {!username ? (
      <Start setUsername={setUsername}/>) :(
<>
<div className="main">
      {stop ? (<h1 className='endText'>You Won: {earned} </h1>) : 
      (
        <>

     
        <div className="top">
          <div className="timer">
            <Timer setStop={setStop} questionNumber={questionNumber}/>
          </div>
        </div>
        <div className="bottom">
          <Kbc data={data} setStop={setStop} 
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}/>
        </div>
        </>
      )}
      </div>
        <div className="pyramid">
        <ul className="moneyList">
        {moneyPyramid.map((m)=>(
          <li className={questionNumber ===m.id ? "moneyListItem active" :"moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
        )

       ) }
          
          

        </ul>
      </div>
        
         </>
        )}

        
      </div>
      <Footer/>

      </div>

      

    
      
     
    
  );
}

export default App;
