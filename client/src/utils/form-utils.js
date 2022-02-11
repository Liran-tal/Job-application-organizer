import * as Axios from '../api/Axios.Api';

const updateJobsArray = (jobs, update) => {
	const updateIndex = jobs.findIndex((job) => update._id === job._id);
	// jobs[updateIndex] = update;
	update 
		? jobs.splice(updateIndex, 1, update) 
		: jobs.splice(updateIndex, 1);
	return jobs;
}

export const handleSubmit = async (userData, setUserData, job, isNew) => {
	console.log("userData: ", userData);
	console.log("job: ", job);
	console.log("isNew: ", isNew);
	try {
		if (isNew) {
			const addRes = await Axios.addJob(userData.id, job);
			console.log("addRes: ", addRes);
			setUserData({
				...userData,
				applications: [...userData.applications, addRes.data]
			});
		}
		else {
			const updateRes = await Axios.updateJob(userData.id, job)
			console.log("updateRes: ", updateRes);
			setUserData({
				...userData,
				applications: updateJobsArray(userData.applications, updateRes.data)
			});
		}
	} catch (error) {
			console.error(error);	
	}
};


export const handleJobDelete = async (userData, jobId, setUserData) => {
	try {
		await Axios.deleteItem (userData._id, jobId);
		setUserData({
			...userData,
			applications: updateJobsArray(userData.applications)
		});
	} catch (error) {
		console.error(error);	
	}
}