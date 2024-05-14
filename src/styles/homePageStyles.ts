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
};
