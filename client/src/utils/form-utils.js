import * as Axios from '../api/Axios.Api';

const updateJobsArray = (jobs, update) => {
	const updateIndex = jobs.findIndex((job) => update.id === job.id);
	jobs[updateIndex] = update;
	return jobs
}

export const handleSubmit = async (userData, setUserData, job, isNew) => {
	// let res;
	console.log("userData: ", userData);
	console.log("job: ", job);
	console.log("isNew: ", isNew);
	// try {
	// 	if (isNew) {
	// 		res = await Axios.addJob(userData.id, job);
	// 		setUserData({
	// 			...userData,
	// 			application: [...userData.application, res.data]
	// 		});
	// 	}
	// 	else {
	// 		res = await Axios.updateJob(userData.id, job)
	// 		const jobs = [...userData.application];				
	// 		setUserData({
	// 			...userData,
	// 			application: updateJobsArray(jobs, res.data)
	// 		});
	// 	}
		
	// } catch (error) {
	// 		console.error(error);	
	// }
};