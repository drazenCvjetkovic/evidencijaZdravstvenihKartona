import React, {Component} from 'react';
import Novi from './form1'
import Header from './Header'
import {Route, BrowserRouter as Router} from 'react-router-dom';
import ListaSvih from './ListaSvih'
import Search from './Search';
import uuid from "uuid";
import Edit from './Edit'

class App extends Component {
    state = {
        persons: [],
        filter: '',
        tempId: null,
        onEditPerson: '',
    }

    componentWillMount() {
        const persons = this.getPersons();
        this.setState({persons})

    }

    getPersons = () => {
        let persons = localStorage.getItem('persons')
        return persons ? JSON.parse(persons) : []
    }

    ////set to localhost
    setPersons = (persons) => {
        localStorage.setItem('persons', JSON.stringify(persons))
    }

    addPerson = (person) => {
        // person.datumRodjenja = this.formatDate(datumRodjenja)
        ///ako dođe bez id,prvi unos,Edit dolazi sa id
        // let newPerson;
        let persons;
        if (!person.id) {/////ako dođe od inputa:
            const id = uuid.v4();
            person = Object.assign({}, person, {id})
            persons = [...this.state.persons];

        } else {
            ////ako dođe od edita
            persons = [...this.state.persons]
            persons = persons.filter(item => item.id !== person.id)
        }
        persons.push(person)

        this.setState({persons})
        this.setPersons(persons);


    }
    searchChange = (e) => {
        this.setState({filter: e.target.value})
    }

    editPerson = (id) => {
        const persons = this.getPersons()
        const person = persons.filter(item => item.id === id)
        this.setState({tempId: id, tempPerson: person})


    }

    removePerson = (id) => {
        const persons = this.state.persons.filter(person => person.id !== id);
        this.setState({persons})
        this.setPersons(persons)
    }
    setNull = () => {
        this.setState({tempId: null})
    }


    render() {
        const {persons, filter, tempId} = this.state
        //
        let displayList = "";
        let displayEdit = "none";
        if (tempId !== null) {
            displayList = "none";
            displayEdit = "inline"

        }


        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header
                            setNull={this.setNull}
                        />
                        {/*Za prvu rutu se dodaje exact*/}
                        <Route exact path={"/"} render={() => (
                            <div>
                                <div style={{display: displayList}}>

                                    <Search
                                        onChange={this.searchChange}
                                        filter={filter}
                                    />
                                    <ListaSvih
                                        persons={persons}
                                        filter={filter}
                                        removePerson={this.removePerson}
                                        editPerson={this.editPerson}
                                    />

                                </div>
                                <div style={{display: displayEdit}}>
                                    <Edit
                                        id={this.state.tempId}
                                        getPersons={this.getPersons}
                                        editPerson={this.editPerson}
                                        addPerson={this.addPerson}
                                        person={this.state.tempPerson}
                                        setPersons={this.setPersons}

                                    >{this.state.tempId}</Edit>
                                </div>
                            </div>
                        )}/>
                        <Route path={"/form"} render={() => (
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
