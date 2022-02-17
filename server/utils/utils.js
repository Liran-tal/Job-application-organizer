const updateJobsArray = (jobs, update) => {
	console.log(`\n\n index to search: \n`, update._id);
	console.log(` index of array[0]: \n\n`, jobs[0]._id);

	const updateIndex = jobs.findIndex((job) => update._id === job._id);
	console.log("found index: ", updateIndex);
	jobs[updateIndex] = update;
	return jobs
}

module.exports = {
	updateJobsArray,
}