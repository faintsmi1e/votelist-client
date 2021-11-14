import axios from 'axios';
import { IVote } from '../models/IVote';
const API_URL = 'http://localhost:8080';

class VoteService {
  
  static async getAll(): Promise<IVote[]> {
    
      const response = await axios.get(API_URL + '/api' + '/votes');
      return response.data;
    
  }

}

export default VoteService;
