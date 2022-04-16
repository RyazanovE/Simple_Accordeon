import "./App.css";
import Accordeon from "./Accordeon"

function App() {
  return (  
  
     <div className="flex justify-center flex-col items-center min-h-screen">
          <Accordeon title={"Press"}>
            <div>sadadasd</div>
            <div>sadadasd</div>
            <div>sadadasd</div>
          </Accordeon>
          <Accordeon title={"2Press"}>
            <div>sadadasd</div>
            <div>sadadasd</div>
            <div>sadadasd</div>
          </Accordeon>
          <Accordeon title={"3Press"}>
            <div>sasddasd</div>
            <div>sadasddasd</div>
            <div>sadadasd</div>
          </Accordeon>
         
     </div>
 
  );
}

export default App;
