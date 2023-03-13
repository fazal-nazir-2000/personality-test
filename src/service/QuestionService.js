import axios from "axios";
import { API_URL } from "../constants";
class QuestionsService{
  static fetchQuestions = async () => {
    try{
      const result = await axios.get(API_URL);
      return {
        data: result.data['assessment_questions'],
        error: null,
        hasError: false
      }
    }
    catch(error){
      return {
        data: [],
        error: error.message,
        hasError: true
      };
    }
  };
}
export default QuestionsService;
