import Header from "./Header"
import Image from "./Image"
import Card from "./Card"
import data from "./data"

console.log(data);

function App() {
  return (
    <div className="container">
        <Header />
        <div className="main-content">
          <Image />
          <div className="cards">
            {data.map(activity => {
              return ( <Card 
                img = {activity.coverImg}
                title = {activity.title}
                price = {activity.price}
                rating = {activity.stats.rating}
                revCount = {activity.stats.reviewCount}
                location = {activity.location}
                />
            )})}
          </div>
        </div>
    </div>
  );
}

export default App;
