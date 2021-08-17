import React,{Component} from "react"
import ProductService from "../services/ProductService"

class AddProduct extends Component {
    constructor() {
        super();
        this.state = {
            productName : '',
            productType : ''
        }
    }

    render() {
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        {
                            this.getTitle()
                        }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> Product Name: </label>
                                    <input placeholder="Product Name" name="productName" className="form-control"
                                           value={this.state.productName} onChange={this.changeProductName}/>
                                </div>
                                <div className = "form-group">
                                    <label> Product Type: </label>
                                    <input placeholder="Product Type" name="productType" className="form-control"
                                           value={this.state.productType} onChange={this.changeProductType}/>
                                </div>

                                <button className="btn btn-success" onClick={this.createOrUpdateProduct}>Save</button>
                                <button className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    getTitle() {
        return <h1>Add Product from title</h1>
    }

    changeProductName = (event) => {
        this.setState({productName : event.target.value})
    }

    changeProductType = (event) => {
        this.setState({productType : event.target.value})
    }

    createOrUpdateProduct = (e) => {
        e.preventDefault()
        ProductService.addProduct(this.state.productName, this.state.productType).then(response => {
            console.log(response.data)
            alert("Product : " + this.state.productName + " is added")
        })
    }
}

export default AddProduct