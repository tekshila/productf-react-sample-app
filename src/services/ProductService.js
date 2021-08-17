import axios from "axios";

const PRODUCT_URL = "http://localhost:8081/api/v1/products"

class ProductService {
    getProducts() {
        return axios.get(PRODUCT_URL)
    }

    addProduct(productName,productType) {
        console.log('productName : ' + productName)
        console.log('productType : ' + productType)
        return axios.post(PRODUCT_URL,{
            name: productName,
            type: productType
        })
    }
}

export default new ProductService()