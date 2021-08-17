import React,{Component} from 'react'
import ProductService from '../services/ProductService'

class ListProducts extends Component {

    constructor() {
        super();
        this.state = {
            products : []
        }
    }

    componentDidMount() {
        ProductService.getProducts().then(response => {
            console.log(response.data)
            this.setState({products : response.data})
        })
    }

    render() {
        return (
            <div width="100%" className="text-center">
                <table>
                    <thead>
                      <tr>
                          <td>Product ID</td>
                          <td>Product Name</td>
                          <td>Product Type</td>
                      </tr>
                    </thead>
                    {
                        this.state.products.map( product =>
                             <tr>
                                 <td>{product.id}</td>
                                 <td>{product.name}</td>
                                 <td>{product.type}</td>
                                 <td><input type="button" value="delete"/> </td>
                             </tr>
                        )
                    }

                </table>
            </div>
        );
    }
}

export default ListProducts