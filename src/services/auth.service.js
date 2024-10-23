import API from '../conection/conection'

const AuthServices = {
    
    login: async (credentials) => {
        try {
            return await API.post('/http://localhost:8090/api/', credentials, { headers: {'Content-Type': 'multipart/form-data'} })
        } catch (e) {
            console.log(e)
        }
    },

}

export default AuthServices
