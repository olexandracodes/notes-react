import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";

const primaryColor = "#fe5805";
const accentColor = "#1e38b2";
const backgroundColor = "#f7f7f8";
const textColor = "#333";

const StyledContainer = styled("div")`
	margin: 40px auto;
	max-width: 600px;
	min-height: 0.8vh;
	color: ${textColor};

	@media (max-width: 600px) {
		padding-left: 0;
		padding-right: 0;
	}
`;

const containerStyles = {
	"&": StyledContainer,
};

const listItemStyles = {
	"&:hover": {
		backgroundColor: "lightgrey",
	},
	marginBottom: "8px",
	borderRadius: "4px",
	overflow: "hidden",
	whiteSpace: "nowrap",
	textOverflow: "ellipsis",
};

const listItemTextSecondaryStyles = {
	display: "-webkit-box",
	WebkitLineClamp: "1",
	WebkitBoxOrient: "vertical",
	overflow: "hidden",
	textOverflow: "ellipsis",
};

const paginationContainerStyles = {
	display: "flex",
	justifyContent: "center",
	marginTop: "16px",
};

const AddNoteButton = styled(Button)`
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

const ButtonBox = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export {
	containerStyles,
	listItemStyles,
	listItemTextSecondaryStyles,
	paginationContainerStyles,
	StyledContainer,
	primaryColor,
	accentColor,
	backgroundColor,
	textColor,
	AddNoteButton,
	ButtonBox,
};
