import axios from "axios";

const uri = process.env.ENV === "production"
  ? "https://job-application-organizer.herokuapp.com/api"
  : "http://localhost:8080/api";
const ApiHeader = axios.create({ baseURL: uri, })


export const addUser = async (newUser) => {
  try {
    return await ApiHeader.post('/users/create-user', {
      body: {
        newUser
      }   
    });
  } catch (error) {
    console.error(error);
    throw error
  }
}

export const getUserById = async (id) => {
  try {
    const { data } = await ApiHeader.get('/users/get-user-by-id', {
      query: {
        id
      }      
    });
    return data;

  } catch (error) {
    console.error(error);
    throw error
  }
}

export const addJob = async (userId, newJob) => {
  try {
    return await ApiHeader.post('/users/create-job', {
      query: {
        userId
      },   
      body: {
        newJob
      }
    });
  } catch (error) {
    console.error(error);
    throw error
  }
}

export const getJobs = async (userId) => {
  try {
    const { data } = await ApiHeader.get('/users/get-jobs', {
      query: {
        userId
      }
    });
    return data;

  } catch (error) {
    console.error(error);
    throw error
  }
}

export const updateJob = async (userId, jobId) => {
  try {
    return await ApiHeader.put('/users/update-job', {
      query: {
        userId
      },   
      body: {
        jobId
      }
    });
  } catch (error) {
    console.error(error);
    throw error
  }
}

export const deleteItem = async (userId, jobId) => {
  try {
    return await ApiHeader.delete('/users/delete-job', {
      query: {
        userId
      },   
      body: {
        jobId
      }
    });
  } catch (error) {
    console.error(error);
    throw error
  }
}


export const loginUser = async (email, password) => {
  try {
    return await ApiHeader.get('/sign-in/verify-user', {
      params: {
        email,
        password
      }
    });
  } catch (error) {
    console.error(error);
    throw error
  }
}