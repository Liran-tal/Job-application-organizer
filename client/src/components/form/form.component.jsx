import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import * as FormMethods from '../../utils/form-fns.utils';
import { Stack, Typography } from "@mui/material";
import USER_MOCK_DATA from '../../USER_MOCK_DATA.json'
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
	// console.log(USER_MOCK_DATA);
	// const demoData = JSON.parse(USER_MOCK_DATA);
	const [job, setJob] = useState(USER_MOCK_DATA[0]);

  return (
    <form onSubmit={FormMethods.handleSubmit}>
			<Typography variant="h5" gutterBottom component="div">
        Position:
      </Typography>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={{ sm: 1, md: 2, lg: 4 }}
			>
				<TextField
						required
						label="Title"
						defaultValue={job.position.title}
						variant="standard"
						// helperText="Position Title is requiered"
				/>
				<TextField
						label="Description"
						defaultValue={job.position.description}
						// variant=""
						multiline
          	rows={4}
				/>
			</Stack>
      {/* <input type="submit" /> */}
    </form>
  );
}

export default JobForm;
