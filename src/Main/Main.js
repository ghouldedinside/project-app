import articles from "../articles.json";
import "./Main.css";
function Main() {
  return (
    <div className="Main">
      {articles.map((item) => (
        <div className="rows">
          <img src={item.img} alt="img" />
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Main;
