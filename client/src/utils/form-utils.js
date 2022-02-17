import * as Axios from '../api/Axios.Api';

// const updateJobsArray = (jobs, update) => {
// 	const updateIndex = jobs.findIndex((job) => update._id === job._id);
// 	jobs[updateIndex] = update;
// 	update 
// 		? jobs.splice(updateIndex, 1, update) 
// 		: jobs.splice(updateIndex, 1);
// 	return jobs;
// }

export const handleSubmit = async (userData, setUserData, update, isNew) => {
	console.log(userData);
	try {
		if (!update._id) {
			const createRes = await Axios.addJob(userData._id, update);
			console.log("createRes: ", createRes);
			// setUserData({
			// 	...userData,
			// 	applications: [...userData.applications, createRes.data]
			// });
		}
		else {
			const updateRes = await Axios.updateJob(userData._id, update)
			console.log("updateRes: ", updateRes);
			const jobs = userData.applications;
			const updateIndex = jobs.findIndex((job) => update._id === job._id);
			return jobs.splice(updateIndex, 1, update);
			// setUserData({
			// 	...userData,
			// 	applications: jobs
			// });
		}
	} catch (error) {
			console.error(error);	
	}
};


export const handleJobDelete = async (userData, delitionId, setUserData) => {
	try {
		await Axios.deleteItem (userData._id, delitionId);
		const jobs = userData.applications;
		const updateIndex = jobs.findIndex((job) => delitionId === job._id);
		jobs.splice(updateIndex, 1);
		setUserData({
			...userData,
			applications: jobs
		});
	} catch (error) {
		console.error(error);	
	}
}