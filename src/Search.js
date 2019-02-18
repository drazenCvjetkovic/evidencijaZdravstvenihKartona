
import React, {Component} from 'react';

///search komponenta
class Search extends Component {


    render() {

        // const { onChange} = this.props;
        return (
            <div  className=" container mt-2 " style={{maxWidth:"800px"}} >
                <input type="text"
                       value={this.props.value}
                       onInput={ this.props.onChange }
                       className={"form-control"}
                       placeholder={"Pretraži"}/>
            </div>


        )
    }
}

export default Search;
