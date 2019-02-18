import React, {Component} from 'react';
//
// function isSearched(searchTerm) {
//     return function (item) {
//         return (
//             item.ime.toLowerCase().includes(searchTerm.toLowerCase())
//             || item.prezime.toLowerCase().includes(searchTerm.toLowerCase())
//             || item.brojKartona.toString().includes(searchTerm.toLowerCase())
//             || item.spol.toLowerCase().includes(searchTerm.toLowerCase())
//
//         )
//     }
const formatDate = (dateB) => {
    const y = new Date(dateB).getFullYear();
    const m = new Date(dateB).getMonth() + 1;
    const d = new Date(dateB).getDate();
    return `${d}-${m}-${y}`;
}

const isSearched = searchTerm => item =>
    //ova druga funkcija će biti map()
    item.ime.toLowerCase().includes(searchTerm.toLowerCase())
    || item.prezime.toLowerCase().includes(searchTerm.toLowerCase())
    || item.brojKartona.toString().includes(searchTerm.toLowerCase())
    || item.spol.toLowerCase().includes(searchTerm.toLowerCase())

class ListaSvih extends Component {



    render()
    {
        const {persons, filter, removePerson ,editPerson} = this.props
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
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                    {persons.filter(isSearched(filter)).map(item =>
                        <tr key={item.id} className={"table-row"}>
                            <td>{item.brojKartona} </ td>
                            <td>{item.ime}</ td>
                            <td>{item.prezime}</td>
                            <td>{item.datumRodjenja = formatDate(item.datumRodjenja)}</ td>
                            <td style={{width: '10%'}}>{item.spol}</ td>
                            <td>

                                <a href={"#"} className={" btn btn-danger btn-sm"}
                                   onClick={() => removePerson(item.id)}>Delete</a>

                                <a href={"#"} className={" btn btn-primary btn-sm ml-1"}

                                   onClick={() => editPerson(item.id) }>

                                    Edit</a>
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