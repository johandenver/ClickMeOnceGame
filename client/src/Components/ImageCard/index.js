import React from "react";
import "./style.css";
import ImageArray from "../Images";

// const image = ({ props }) => <img alt={props} src={"../Images/" + props} />;

class ImageCard extends React.Component {
  constructor() {
    super();
    this.state = {
      chars: sChars
    };
  }

  render() {
    return (
      <div className="row">
        {this.state.chars.map((char, i) => (
          <div
            className="card"
            key={char.id}
            onClick={() => this.handleCharClick(char.id, i)}
          >
            <img
              src={`./Images/${char.image}`}
              alt={char.name}
              className="char"
            />
          </div>
        ))}
      </div>
    );
  }
}

// first way i tried.
//     const pictures = ImageArray.map((image, i) => {
//       return (
//         <div className="card">
//           <div className="img-container">
//             <img src={image} alt="" key={i} />
//           </div>
//         </div>
//       );
//     });
//     return <div className="container characters">{pictures}</div>;
//   }

export default ImageCard;
