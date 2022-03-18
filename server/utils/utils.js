const updateJobsArray = (jobs, update) => {
	const updateIndex = jobs.findIndex((job) => update._id === job._id);
	jobs[updateIndex] = update;
	return jobs
}

const findJobById = (applications, id) => {
	return applications.find((elm) => elm._id.toString() === id); 
}

module.exports = {
	updateJobsArray,
	findJobById,
}

