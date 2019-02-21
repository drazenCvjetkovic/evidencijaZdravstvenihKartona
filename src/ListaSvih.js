import React, {Component} from 'react';
import Edit from "./Edit";

class ListaSvih extends Component {

    isSearched = searchTerm => item =>
        //ova druga funkcija će biti map()
        item.ime.toLowerCase().includes(searchTerm.toLowerCase())
        || item.prezime.toLowerCase().includes(searchTerm.toLowerCase())
        || item.brojKartona.toString().includes(searchTerm.toLowerCase())
        || item.spol.toLowerCase().includes(searchTerm.toLowerCase())

    render() {
        return (
            <div className="container ">
                <table className="table table-striped mt-5">
                    <thead>
                    <tr>
                        <th>Broj Kartona</th>
                        <th>Ime</th>
                        <th>Prezime</th>
                        <th>Datum Rođenja</th>
                        <th>Spol</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.persons.filter(this.isSearched(this.props.filter)).map(item =>

                        <tr key={item.id} className={"table-row"}>
                            <td>{item.brojKartona} </ td>
                            <td>{item.ime}</ td>
                            <td>{item.prezime}</td>
                            <td>{item.datumRodjenja}</ td>
                            <td style={{width: '10%'}}>{item.spol}</ td>
                            <td>

                                <button  className={" btn btn-danger btn-sm"}
                                   onClick={() => this.props.removePerson(item.id)}>Delete</button>

                                <button  className={" btn btn-primary btn-sm ml-1"}
                                   onClick={ () => this.props.editPerson (item.id)}>Edit</button>
                            </td>

                            <td style={{display:this.props.edit}}>
                                <Edit
                                    editId={this.props.editId}
                                    person={item}
                                    getPersons={this.props.getPersons}
                                    addPerson={this.props.addPerson}
                                    savePersons={this.props.savePersons}
                                    editPerson={this.props.editPerson}

                                />
                            </td>


                        </tr>

                    )}

                    </tbody>
                </table>

            </div>
        );
    }
}

export default ListaSvih;