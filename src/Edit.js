import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'

class Edit extends Component {

    constructor(props) {
        super(props);
        console.log("props", props);
        this.state = {
            id:this.props.person.id,
            brojKartona: this.props.person.brojKartona,
            ime:this.props.person.ime,
            prezime:this.props.person.prezime,
            datumRodjenja:this.props.person.datumRodjenja,
            spol:this.props.person.spol,


        }

    }

    onChange = name => (e) => {
        this.setState({
            [name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addPerson(this.state)
        // this.setState({
        //     id:this.props.person.id,
        //     brojKartona: this.props.person.brojKartona,
        //     ime:this.props.person.ime,
        //     prezime:this.props.person.prezime,
        //     datumRodjenja:this.props.person.datumRodjenja,
        //     spol:this.props.person.spol,
        // })
        // let id = this.props.id
        // const brojKartona = e.target.elements.brojKartona.value;
        // const ime = e.target.elements.ime.value;
        // const prezime = e.target.elements.prezime.value;
        // let datumRodjenja = e.target.elements.datumRodjenja.value;
        // let spol = e.target.elements.spol.value

    }

    render() {
            console.log("ID",this.props.editId)
            console.log(this.props.person)
            console.log(this.state)
        return (
            <Form key={this.props.person.id}  onSubmit={this.onSubmit}>
                <Form.Group>
                    <Form.Control name="brojKartona"
                                  type="text"
                                  placeholder="Broj Kartona"
                                  defaultValue={this.state.brojKartona}
                                  required
                                  onChange={this.onChange("brojKartona")}


                    />
                </Form.Group>

                <Form.Group>
                    <Form.Control name="ime"
                                  type="text"
                                  placeholder={"Ime"}
                                  defaultValue={this.state.ime}
                                  required
                                  onChange={this.onChange("ime")}


                    />
                </Form.Group>

                <Form.Group>
                    <Form.Control name="prezime"
                                  type="text"
                                  placeholder={"Prezime"}
                                  defaultValue={this.state.prezime}
                                  required
                                  onChange={this.onChange("prezime")}


                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control name="datumRodjenja"
                                  type="text"
                                  defaultValue={this.state.datumRodjenja}
                                  required
                                  onChange={this.onChange("datumRodjenja")}


                    />
                </Form.Group>

                <Form.Group>
                    <Form.Control as="select"
                                  name={"spol"}
                                  defaultValue={this.state.spol}
                                  onChange={this.onChange("spol")}

                    >
                        <option name="spol">Spol</option>
                        <option name="male" value={"Muški"}>Muški</option>
                        <option name="female" value={"Ženski"}>Ženski</option>
                    </Form.Control>
                </Form.Group>
                <button  className="btn btn-primary btn-block" onClick={this.props.editPerson}
                > Spremi
                </button>

            </Form>
        )
    }
}

export default Edit;