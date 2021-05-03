import Header from '../components/Header';
import ImgCard from '../components/Cards/ImgCard';
import Headshotpic from '../../src/assets/Images/Headshotpic.jpg';
import List from '../components/List';

function Home() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <Header heading="About Me" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Header heading="Quick Introduction" />
          <div className="row">
            <p>
              My name is Joseph Soria, and I currently work in the Oil and Gas industry. My experience is diverse, as I have worked in Quality, Engineering, and Supply Chain.
            </p>
            <p>
              In the future, I see myself branching out into Full Stack Web Development with the goal to deploy both web and mobile applications.
            </p>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <ImgCard
            src={Headshotpic}
            alt="A headshot of me taken in Houston"
            caption="My favorite headshot taken in Houston, 2019"
          />
        </div>
        <div className="col">
          <Header heading="Education" />
          <div className="row">
            <p>
              I'm currently undertaking a bootcamp from Rice University to continue my education and eventually make
              a career change; this bootcamp will make me Employer-competitive as I learn skills such as HTML, CSS, Javascript, and much more.
            </p>
            <p>
              As of now, I have used different technologies, such as Node.js, Express.js, Sequelize for ORM in MySQL, Mongoose for ODM in MongoDB. I now have a couple of projects that
              use these technologies to build a full stack application!
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <List />
      </div>
    </>
  )
}

export default Home;