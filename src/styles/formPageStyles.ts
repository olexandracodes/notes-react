import { Button, styled } from "@mui/material";

const primaryColor = "#fe5805";
const accentColor = "#1e38b2";
const textColor = "#333";

const FormPageContainer = styled("div")`
	margin: 40px auto;
	max-width: 600px;
	color: ${textColor};

	@media (max-width: 600px) {
		padding-left: 0;
		padding-right: 0;
	}
`;

const SubmitButton = styled(Button)`
	border: none;
	padding: 10px 20px;
	font-size: 16px;
	background-color: ${primaryColor};
	color: white;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
	transition: box-shadow 0.3s ease;

	&:hover {
		box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
		cursor: pointer;
		background-color: ${accentColor};
	}
`;

const ResetButton = styled(Button)`
	border: none;
	padding: 10px 20px;
	font-size: 16px;
	border: 1px solid ${accentColor};
	color: grey;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
	transition: box-shadow 0.3s ease;

	&:hover {
		box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
		cursor: pointer;
		color: ${primaryColor};
	}
`;


export { FormPageContainer, SubmitButton, ResetButton };
