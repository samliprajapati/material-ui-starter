import React from "react";
const base_url = ""
class Main extends React.Component {
  componentDidMount() {
    fetch(`${base_url}/user`)
      .then(res => res.json())
      .then(data => console.log(data))
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}
export default Main;