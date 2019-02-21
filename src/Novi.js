import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import SimpleReactValidator from 'simple-react-validator'


class Novi extends Component {
    constructor(props){
        super(props)
        this.validator = new SimpleReactValidator();
    }


    state = {
        brojKartona: "",
        ime: "",
        prezime: "",
        datumRodjenja: "",
        spol: "",
    }

    onChange = name => (e) => {
        this.setState({
            [name]: e.target.value, id: this.props.children
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addPerson(this.state)
        this.refs.myForm.reset();
        this.refs.brojKartona.focus();
    }

    render() {

        return (
            <div className="container">
                <h2 style={{color: "gray"}}>Unesi Podatke</h2>
                <Form ref={"myForm"} onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Control name="brojKartona"
                                      required
                                      type="number"
                                      min={"100000000"}
                                      max={"999999999"}
                                      placeholder="Broj Kartona 9 brojeva"
                                      onChange={this.onChange("brojKartona")}
                                      ref={"brojKartona"}


                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control name="ime"
                                      required
                                      type="text"
                                      placeholder={"Ime"}
                                      onChange={this.onChange("ime")}
                                      ref={"ime"}

                        />

                    </Form.Group>

                    <Form.Group>
                        <Form.Control name="prezime"
                                      required
                                      type="text"
                                      placeholder={"Prezime"}
                                      onChange={this.onChange("prezime")}
                                      ref={"prezime"}

                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control name="datumRodjenja"
                                      required
                                      type={"date"}
                                      onChange={this.onChange("datumRodjenja")}
                                      ref={"datumRodjenja"}

                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control as="select"
                                      name={"spol"}
                                      required
                                      onChange={this.onChange("spol")}
                                      ref={"spol"}
                        >
                            <option name="spol" ref={"spol"}>Spol</option>
                            <option name="male" ref={"male"} value={"Muški"}>Muški</option>
                            <option name="female" ref={"female"} value={"Ženski"}>Ženski</option>

                        </Form.Control>
                    </Form.Group>

                    <button className="btn btn-primary btn-block"
                    > Spremi
                    </button>
                </Form>

            </div>
        );
    }
}

export default Novi;