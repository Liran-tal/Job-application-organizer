import * as Axios from '../api/Axios.Api';

export const handleSubmit = async (userData, setUserData, update, isNew) => {
	try {
		if (!update._id) {
			const createRes = await Axios.addJob(userData._id, update);
			return userData.applications.push(createRes);
		}
		else {
			const updateRes = await Axios.updateJob(userData._id, update)
			const jobs = userData.applications;
			const updateIndex = jobs.findIndex((job) => update._id === job._id);
			jobs.splice(updateIndex, 1, updateRes.data);
			return jobs;
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