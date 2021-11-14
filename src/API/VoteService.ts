import axios from 'axios';
const API_URL = 'http://localhost:8080';
class VoteService {
  
  static async getAll(): Promise<any[]> {
    
      const response = await axios.get(API_URL + '/api' + '/votes');
      return response.data;
    
  }

}

export default VoteService;
