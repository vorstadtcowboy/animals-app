import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zaehler: 0,
    };

    //binden des keywords this
    this.hochzaehler = this.hochzaehler.bind(this);
    this.runterzaehler = this.runterzaehler.bind(this);
  }

  //zählt hoch Methode
  hochzaehler() {
    //useState
    this.setState({ zaehler: this.state.zaehler + 1 });
  }

  //zähltrunter Methode
  runterzaehler() {
    //useState
    this.setState({ zaehler: this.state.zaehler - 1 });
  }

  //SideEffect Title verändert in der Funktionalen Komponente useEffect()

  componentDidMount() {
    //Data fetch
    document.title = 'Huhu';
  }

  componentDidUpdate() {
    document.title = this.state.zaehler;
  }

  //Methode ist Pflicht
  render() {
    //die kennen aus der Funktion Komponente
    //Für props immer mit this
    return (
      <div>
        Hallo {this.props.name} {this.props.counter}
        <div>
          <button onClick={this.hochzaehler} style={{ background: 'black' }}>
            hochzählen {this.state.zaehler}
          </button>
          <span> </span>
          <button onClick={this.runterzaehler} style={{ background: 'black' }}>
            runterzählen {this.state.zaehler}
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
