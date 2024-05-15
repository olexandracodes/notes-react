import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import { color } from "framer-motion";

const { primaryColor, accentColor, backgroundColor, textColor } = {
	primaryColor: "#fe5805",
	accentColor: "#1e38b2",
	backgroundColor: "#f7f7f8",
	textColor: "#333",
};

const StyledContainer = styled("div")`
	margin: 40px auto;
	max-width: 600px;
	min-height: 0.8vh;
	color: ${textColor};

	@media (max-width: 600px) {
		padding: 0 8px;
	}
`;

const containerStyles = {
	"&": StyledContainer,
};

const listItemStyles = {
	"&:hover": {
		backgroundColor: backgroundColor,
	},
	marginBottom: "8px",
	borderRadius: "4px",
	overflow: "hidden",
	textOverflow: "ellipsis",
	cursor: "pointer",
	transition: "background-color 1s ease",
	color: accentColor,
	fontWeight: "bold",
	fontSize: "18px",
};

const listItemTextSecondaryStyles = {
	display: "-webkit-box",
	WebkitLineClamp: "1",
	WebkitBoxOrient: "vertical",
	overflow: "hidden",
	textOverflow: "ellipsis",
	fontSize: "14px",
};

const paginationContainerStyles = {
	display: "flex",
	justifyContent: "center",
	margin: "16px 0",
};

const paginationButtonStyles = {
	"& .MuiPaginationItem-root": {
		backgroundColor: primaryColor,
		color: "white",
		"&:hover": {
			backgroundColor: accentColor,
		},
	},
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
	paginationButtonStyles,
	StyledContainer,
	primaryColor,
	accentColor,
	backgroundColor,
	textColor,
	AddNoteButton,
	ButtonBox,
};
