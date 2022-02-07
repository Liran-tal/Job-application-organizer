import axios from "axios";


const uri = process.env.ENV === "production" 
	? "https://job-application-organizer.herokuapp.com/api" 
	: "http://localhost:8080/users/api";
const ApiHeader = axios.create({ baseURL: uri, })

export default class Axios {

  static getUsers = async (id) => {
		try {
			const {data} = await ApiHeader.get('/users', {
        query: {
          id: id ? `${id}` : ""
        }
      }); 
			return data;
			
		} catch (error) {
			console.error(error);
			return error
		}
  } 

  static addItem = async (item) => {
    return await ApiHeader.post('/users',item);
  }
  
  static editItem = async (itemId, newItem) => {
    return await ApiHeader.put('/users', itemId, newItem);
  }
  
  static deleteItem = async (itemId) => {
    return await ApiHeader.delete('/users', itemId);
  }
}