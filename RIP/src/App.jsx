import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
//functional Components
function App() {
  return(
    <>
    <Header />
    <Body name="Ralph " food ="Chicken" isHealthy={true} age={20}/>
    <Body name="Ralph " food ="Beef" isHealthy={true} age={20}/>
    <Body name="Ralph " food ="Pork" isHealthy={true} age={20}/>
    <Footer />
    </>
  );

}
export default App