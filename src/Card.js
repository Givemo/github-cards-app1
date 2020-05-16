import React from "react";
import "./App.css";

const testData = [
  {
    name: "Givemore",
    avatar_url: "https://avatars0.githubusercontent.com/u/59787301?v=4",
    company: "Twitter",
  },
  {
    name: "Lisa Seelye",
    avatar_url: "https://avatars2.githubusercontent.com/u/18159?v=4",
    company: "Red Hat",
  },
  {
    name: "Tylor Sherman",
    avatar_url: "https://avatars1.githubusercontent.com/u/104885?v=4",
    company: "Denim & Steel",
  },
];

/*We can write Components either as class Components or as function Components. The one below is a class Component. I'll be mixing the two throughout this project to get a feel of all the types*/
class Card extends React.Component {
  /* handleDelete = (e) => {
    const cardToDelete = this.props;
    cardToDelete.remove();
  }; */
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt="" />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>

        {/*Delete button to be added
         <button className="delBtn" onClick={this.handleDelete}>
          X
        </button> */}
      </div>
    );
  }
}

export { testData };
export default Card;
