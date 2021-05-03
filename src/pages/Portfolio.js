import Header from '../components/Header';
import ImgCard from '../components/Cards/ImgCard';
import Poolpic from '../assets/Images/Poolpic.jpg';
import Posepic from '../assets/Images/Posepic.jpg';
import Fountainpic from '../assets/Images/Fountainpic.jpg';
import Citypic from '../assets/Images/Citypic.jpg';
import Gradpic from '../assets/Images/Gradpic.jpg';



function Portfolio() {
  return (
    <>
      <Header heading="Portfolio" />
      <div className="row my-3">
        <div className="col d-flex justify-content-center">
          <ImgCard 
            alt="Shooting pool at the University of Houston" 
            src={Poolpic}
            caption="Focusing on a shot during a billiards game, University of Houston"
          />
        </div>
        <div className="col d-flex justify-content-center">
          <ImgCard 
            src={Posepic}
            alt="Posing for a graduation picture" 
            caption="A graduation photo in front of the Cullen College of Engineering, University of Houston"
          />
        </div>      
      </div>
      <div className="row my-3">
        <div className="col d-flex justify-content-center">
          <ImgCard 
            src={Fountainpic}
            alt="Posing for a graduation picture" 
            caption="A graduation photo at the University of Houston" 
          />
        </div>
        <div className="col d-flex justify-content-center">
          <ImgCard 
            src={Citypic}
            alt="A trip in downtown Houston" 
            caption="A beautiful outing in downtown Houston" 
          />
        </div>      
      </div>
      <div className="row my-3">
        <div className="col d-flex justify-content-center">
          <ImgCard 
            src={Gradpic} 
            alt="Posing for a graduation picture" 
            caption="A graduation photo in my cap and gown, University of Houston"
          />
        </div>
      </div>
    </>
  )
}

export default Portfolio;