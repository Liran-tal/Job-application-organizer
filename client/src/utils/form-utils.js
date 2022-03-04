import * as Axios from '../api/Axios.Api';

export const handleSubmit = async (userData, setUserData, update, isNew) => {
	console.log(userData._id);
	try {
		if (!update._id) {
			const createRes = await Axios.addJob(userData._id, update);
			userData.applications.push(createRes);
			return userData.applications;
		}
		else {
			const updateRes = await Axios.updateJob(userData._id, update)
			const jobs = userData.applications;
			const updateIndex = jobs.findIndex((job) => update._id === job._id);
			updateIndex > -1 && jobs.splice(updateIndex, 1, updateRes.data);
			return jobs;
		}
	} catch (error) {
			console.error(error);	
	}
};


export const handleJobDelete = async (userData, delitionId) => {
	try {
		await Axios.deleteItem (userData._id, delitionId);
		const jobs = userData.applications;
		const updateIndex = jobs.findIndex((job) => delitionId === job._id);
		updateIndex > -1 && jobs.splice(updateIndex, 1);
		return jobs;
	} catch (error) {
		console.error(error);	
		throw error;
	}
}