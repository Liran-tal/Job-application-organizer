import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import * as FormMethods from '../../utils/form-fns.utils'
import DateTimeWidget from '../data-time-picker/date-time-picker.component'
import USER_MOCK_DATA from '../../USER_MOCK_DATA.json'
import Position from "../form-fields/position.component";
import Company from "../form-fields/company.component";
import Contact from "../form-fields/contact.component";
import Interview from "../form-fields/interview.component";
// "position": {
// 			"title": "Environmental Tech",
// 			"description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
// 			"dateApplied": "2022-05-10T15:04:31Z"
// 		},
// 		"company": {
// 			"name": "Oyoba",
// 			"location": "Sarishābāri"
// 		},
// 		"contact": {
// 			"name": "Tragelaphus angasi",
// 			"position": "VP Quality Control",
// 			"email": "cbarca0@dropbox.com",
// 			"phone": "313-424-4087"
// 		},
// 		"interview": {
// 			"date": "2022-04-27T17:46:49Z",
// 			"format": "Online"
// 		},
// 		"followUp": null,
// 		"applicationStatus"


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
      {/* <input type="submit" /> */}
    </form>
  );
}

export default JobForm;
