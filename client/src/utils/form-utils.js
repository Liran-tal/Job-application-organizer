import * as Axios from '../api/Axios.Api';

export const handleSubmit = async (userData, update) => {
	console.log(userData._id);
	console.log(update);
	try {
		if (!update._id) {
			const createRes = await Axios.addJob(userData._id, update);
			userData.applications.push(createRes);
			return userData.applications;
		}

		const updateRes = await Axios.updateJob(userData._id, update);
		console.log("updateRes:",updateRes);
		const jobs = userData.applications;
		console.log("jobs:", jobs);
		const updateIndex = jobs.findIndex((job) => update._id === job._id);
		updateIndex > -1 && jobs.splice(updateIndex, 1, updateRes.data);
		return jobs;
	} catch (error) {
			console.error(error);
			return;	
	}
};


export const handleJobDelete = async (userData, delitionId) => {
	try {
		await Axios.deleteItem (userData._id, delitionId);
		return userData.applications.filter((job) => delitionId !== job._id);
	} catch (error) {
		console.error(error);	
		throw error;
	}
}
