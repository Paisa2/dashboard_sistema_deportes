import API from "../conection/conection"
// import authHeader from './autHeader'

const CrudServices = {

    // getUsers: async (filters = {}) => {
    //     let response = {}
    //     await API.get('/usuario/index', { params: filters, headers: authHeader()})
    //         .then(res => response = res)
    //         .catch(error => response = error.response)
    //     return response
    // },
    // getUsersByRole: async (role) => {
    //     let response = {}
    //     await API.get('/usuario/get-users-by-role', { params:{role: role}, headers: authHeader() })
    //         .then(res => response = res )
    //         .catch(error => response = error.response)  
    //     return response
    // },

    // getUserInfo: async () => {
    //     let response = {}
    //     await API.get('/usuario/get-user-info', { headers: authHeader() })
    //         .then(res => response = res )
    //         .catch(error => response = error.response)  
    //     return response
    // },

    // getAllUsers: async () => {
    //     let response = {}
    //     await API.get('/usuario/get-all-users', { headers: authHeader() })
    //         .then(res => response = res )
    //         .catch(error => response = error.response)  
    //     return response
    // },

    // createUser: async (data) => {
    //     let response = {}
    //     await API.post('/usuario/create', data, { headers: authHeader({'Content-Type': 'multipart/form-data'}) })
    //         .then(res => response = res)
    //         .catch(error => response = error.response)
    //     return response
    // },

    // updateUser: async (data, id) => {
    //     let response = {}
    //     await API.put('/usuario/update', data, { params: {id: id}, headers: authHeader({'Content-Type': 'application/x-www-form-urlencoded'}) })
    //         .then(res => response = res)
    //         .catch(error => response = error.response)  
    //     return response
    // },

    // deleteUser: async (id) => {
    //     let response = {}
    //     await API.delete('/usuario/delete', { params: {id: id}, headers: authHeader() })
    //         .then(res => response = res)
    //         .catch(error => response = error.response)  
    //     return response
    // },

    // getUserRoles: async () => {
    //     let response = {}
    //     await API.get('/usuario/get-user-roles', { headers: authHeader() })
    //         .then(res => response = res)
    //         .catch(error => response = error.response)  
    //     return response
    // },

    // getRolesByAssignment: async (id) => {
    //     let response = {}
    //     await API.get('/usuario/get-roles-by-assignment', { params: {id:id}, headers: authHeader() })
    //         .then(res => response = res)
    //         .catch(error => error.response)
    //     return response
    // },

    // assignRoles: async (data) => {
    //     let response = {}
    //     await API.post('/usuario/assign-roles', data, { headers: authHeader({'Content-Type': 'multipart/form-data'}) })
    //         .then(res => response = res)
    //         .catch(error => response = error.response)
    //     return response
    // },

    getProducts: async (filters= {}) => {
        let response = []
        await API.get('products', { params: filters })
        .then(res => response = res.data)
        .catch(error => response = error.response)
        return response
    },

    createProduct: async (data) => {
        let response = {}
        await API.post('/product/create', data)
            .then(res => {
                response= res
            })
            .catch(error => {
                response = error.response.data ? error.response : {}
            })
        return response
    },

    getProductById: async (id) => {
        let response = {}
        await API.get('/product/view', { params: { id: id } })
            .then(res => {
                response = res.data
            })
            .catch(error => {
                response = error.response.data
            })
        return response
    },

    updateProduct: async (data, id) => {
        let response = {}
        await API.put('/product/update', data, { params: { id: id } } )
            .then(res => {
                response =res
            }).catch(error => {
                response = error.response ? error.response : {}
            })
        return response
    },

    deleteProduct: async (id) => {
        let response = {}
        await API.delete('/product/delete', {params: {id: id }})
            .then(res => {
                response = res
            })
            .catch(error => {
                response = error.response ? error.response : {}
            })
        return response
    },
}

export default CrudServices
