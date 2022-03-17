import axios from "axios";

const uri = process.env.ENV === "production"
  ? "https://job-application-organizer.herokuapp.com/api"
  : "http://localhost:8080/api";
const ApiHeader = axios.create({ baseURL: uri, })


export const addUser = async (newUser) => {
  try {
    return await ApiHeader.post('/users/user', { newUser });
  } catch (error) {
    console.error(error);
    throw error
  }
}

export const getUserById = async (userId) => {
  try {
    const { data } = await ApiHeader.get('/users/user', {
      params: {
        userId
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
    return await ApiHeader.post('/users/job', { userId, newJob });
  } catch (error) {
    console.error(error);
    throw error
  }
}

export const getJobs = async (userId) => {
  try {
    const { data } = await ApiHeader.get('/users/jobs', {
      params: {
        userId
      }
    });
    return data;

  } catch (error) {
    console.error(error);
    throw error
  }
}

export const updateJob = async (userId, jobData) => {
  try {
    return await ApiHeader.put('/users/job', {
      userId,
      jobData
    });
  } catch (error) {
    console.error(error);
    throw error
  }
}

export const deleteItem = async (userId, jobId) => {
  try {
    return await ApiHeader.delete('/users/job', {
      params: {
        userId,
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
    return await ApiHeader.get('/sign-in/user', {
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
