import { Component } from "react";

export default class Typing extends Component {
  state = {
    text: "",
    interval: null,
  };
  string = "My name is Tyler Fann and I'm a web developer";


  // could refactor this to be recursive like they do here:
  // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_typewriter
  typing = () => {
    const interval = setInterval(this.setText, 65);
    this.setState({ interval });
  };

  setText = () => {
    if (this.state.text !== this.string) {
      if (this.state.text) {
        const index = this.state.text.length;
        const letter = this.string[index];
        this.setState({ text: this.state.text + letter });
      } else {
        const letter = this.string[0];
        this.setState({ text: letter });
      }
    } else {
      console.log("this.state", this.state);
      clearInterval(this.state.interval || undefined);
      return;
    }
  };

  componentDidMount() {
    this.typing();
  }

  componentWillUnmount() {
    clearInterval(this.state.interval || undefined);
  }

  render() {
    return <h1>{this.state.text}</h1>;
  }
}
