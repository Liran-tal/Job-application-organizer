const updateJobsArray = (jobs, update) => {
	// console.log("jobs Array before updete: ", jobs);
	console.log(" index to search: ", update._id);
	console.log(" index to search: ", jobs[0]._id);

	const updateIndex = jobs.findIndex((job) => update._id === job._id);
	console.log("found index: ", updateIndex);
	jobs[updateIndex] = update;
	// console.log("job after update: ", update);
	return jobs
}

module.exports = {
	updateJobsArray,
}