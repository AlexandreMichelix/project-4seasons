import "./Season.css";

function Card() {
  return (
    <div className="card">
      <img src={this.props.img} />
      <div className="card-body">
        <h2>{this.props.title}</h2>
        <p>test</p>
        <h5>{this.props.author}</h5>
      </div>
    </div>
  );
}

export default Card;
