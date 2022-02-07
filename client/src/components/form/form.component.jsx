import React, { useState } from "react";
import * as FormMethods from '../../utils/form-fns.utils'
import USER_MOCK_DATA from '../../USER_MOCK_DATA.json'
import Position from "../form-fields/position.component";
import Company from "../form-fields/company.component";
import Contact from "../form-fields/contact.component";
import Interview from "../form-fields/interview.component";
import MiscFields from "../form-fields/misc-fields.component";


function JobForm() {

	const [job, setJob] = useState(USER_MOCK_DATA[0]);

	const handleInterviewChange = ({ target: {value} }) => {

	}

  return (
    <form onSubmit={FormMethods.handleSubmit}>
			<Position 
				position={job.position}
			/>
			<Company 
				company={job.company}
			/>
			<Contact
				contact={job.contact}
			/>
			<Interview
				interview={job.interview}
				handleInterviewChange={handleInterviewChange}
			/>
			<MiscFields 
				followUp={job.followUp}
				applicationStatus={job.applicationStatus}
			/>
      {/* <input type="submit" /> */}
    </form>
  );
}

export default JobForm;
