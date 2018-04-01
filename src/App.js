import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Title = props => <h1>React base project</h1>;

function Description(props) {
    return (
        <p>
            This project is a demonstration of what can be done using{" "}
            <strong>react</strong>.
        </p>
    );
}

class Advice extends Component {
    render() {
        return <p>Advice: This is an useless advice using a component.</p>;
    }
}

class Person extends Component {
    render() {
        const { showEmail, person, header } = this.props;

        return (
            <div>
                <h3>{header}</h3>
                <div>
                    <p>
                        {person.first_name} {person.last_name}
                    </p>
                    <p>{person.billing_address_street}</p>
                    <p>
                        {person.billing_address_postalcode}{" "}
                        {person.billing_address_city}
                    </p>
                    <p>
                        {person.billing_address_state},{" "}
                        {person.billing_address_country}
                    </p>
                </div>
                <p>{this.props.phone_office}</p>
                {showEmail && <p>{person.email}</p>}
            </div>
        );
    }
}

Person.defaultProps = {
    header: "Person"
};

class Counter extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
        setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1000);
    }

    render() {
        const count = this.state.count;
        return <span>Count: {count}</span>;
    }
}

class Counter2 extends Component {
    constructor(props) {
        super(props);
        this.state = { count: this.props.initialCount };
        setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1000);
    }

    render() {
        const count = this.state.count;
        return <span>Count2: {count}</span>;
    }
}

Counter2.defaultProps = {
    initialCount: 100
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Title />
                </header>
                <Description />
                <Advice />
                <Person
                    person={{
                        first_name: "Perico",
                        last_name: "Pendante",
                        billing_address_street: "Calle falsa, 123",
                        billing_address_postalcode: "25300",
                        billing_address_city: "Tàrrega",
                        billing_address_state: "Lleida",
                        billing_address_country: "España",
                        phone_office: "973 97 39 73",
                        email: "perico.pendante@example.com"
                    }}
                    showEmail
                />
                <p>
                    <Counter />
                </p>
                <p>
                    <Counter2 />
                </p>
            </div>
        );
    }
}

export default App;
