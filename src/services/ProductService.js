import axios from "axios";

const PRODUCT_URL = "http://localhost:8081/api/v1/products"

class ProductService {
    getProducts() {
        return axios.get(PRODUCT_URL)
    }
}

export default new ProductService()