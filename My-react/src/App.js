import logo from"./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "./card";



var cardDetails=[
  {
  planName:"FREE",
  month:0,
  feauter:[
    {
     user:"Single User",
     muttiUser:"",
     gb:"5GB Storage",
     publicProject:"Unlimted Public Projects",
     community:"Community Access",
     check1:false,
     check2:false,
     check3:false,
     check4:false,
     muted1:"text-muted",
     muted2:"text-muted",
     muted3:"text-muted",
     muted4:"text-muted",
     unlimited:""
    }
  ]
},

{
  planName:"PLUS",
  month:9,
  feauter:[
    {
     user:"",
     multiUser:"5 Users",
     gb:"50GB Storage",
     publicProject:"Unlimted Public Projects",
     community:"Community Access",
     check1:true,
     check2:true,
     check3:true,
     check4:false,
     muted1:"",
     muted2:"",
     muted3:"",
     muted4:"text-muted",
     unlimited:""
     }
  ]
},

{
  planName:"PRO",
  month:49,
  feauter:[
    {
     user:"",
     multiUser:"Unlimited Users",
     gb:"150GB Storage",
     publicProject:"Unlimted Public Projects",
     community:"Community Access",
     check1:true,
     check2:true,
     check3:true,
     check4:true,
     muted1:"",
     muted2:"",
     muted3:"",
     muted4:"",
     unlimited:"Unlimited"
    }
  ]
}
]
function App(){
  return (
    <section className="pricing py-5 ">
    <div className="container p-1">
    <div className="row">
          {
            cardDetails.map((card) => {
              return <Card
               card={card}></Card>;
           })}
        </div>
      </div>
    </section>
  );
}

export default App;
