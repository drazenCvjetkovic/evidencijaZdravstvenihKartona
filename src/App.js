import React, {Component} from 'react';
import Novi from './Novi'
import Header from './Header'
import {Route, BrowserRouter as Router} from 'react-router-dom';
import ListaSvih from './ListaSvih'
import Search from './Search';
import uuid from "uuid";
import moment from 'moment';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            filter: '',
            onEditPerson: '',
            edit: "none",
            editId: ""
        }
    }

    formatDate = (date) => {
        return moment(date).format("DD/MM/YYYY")
    }

    componentWillMount() {
        const persons = this.getPersons();
        this.setState({persons})

    }
    //dohvati iz localStorage
    getPersons = () => {
        let persons = localStorage.getItem('persons')
        return persons ? JSON.parse(persons) : []
    }

    ////set to localStorage
    savePersons = (persons) => {
        localStorage.setItem('persons', JSON.stringify(persons))
    }

    addPerson = (person) => {

        let persons;
        if (!person.id) {/////ako dođe od inputa:
            const id = uuid.v4();
            const datumRodjenja = this.formatDate(person.datumRodjenja)
            person = Object.assign({}, person, {id}, {datumRodjenja})
            persons = [...this.state.persons];

        } else {
            ////ako dođe od edita
            persons = [...this.state.persons]
            persons = persons.filter(item => item.id !== person.id)
        }
        persons.push(person)
        this.setState({persons})
        this.savePersons(persons);

    }
    searchChange = (e) => {
        this.setState({filter: e.target.value})
    }

    removePerson = (id) => {
        const persons = this.state.persons.filter(person => person.id !== id);
        this.setState({persons})
        this.savePersons(persons)
    }

    editPerson = (id) => {
        this.setState(prevState => {
            if (prevState.edit === "none")
                return {edit: "inline", editId: id}
            else
                return {edit: "none", editId: ""}

        })


    }

    render() {
        const {persons, filter} = this.state

        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header
                        />
                        <Route exact path={"/"} render={() => (
                            <div>
                                <div>

                                    <Search
                                        onChange={this.searchChange}
                                    />
                                    <ListaSvih
                                        persons={persons}
                                        filter={filter}
                                        removePerson={this.removePerson}
                                        getPersons={this.getPersons}
                                        addPerson={this.addPerson}
                                        savePersons={this.savePersons}
                                        edit={this.state.edit}
                                        editID={this.state.editID}
                                        editPerson={this.editPerson}
                                    />
                                </div>
                            </div>
                        )}/>
                        <Route path={"/Novi"} render={() => (
                            <Novi
                                addPerson={this.addPerson}
                                id={this.state.tempId}
                                getPersons={this.getPersons}
                            />
                        )
                        }
                        />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
