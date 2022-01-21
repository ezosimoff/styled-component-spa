import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const InputLabel = styled.label`
	background-color: var(--ui-base-color);
	display: flex;
	align-items: center;
	border-radius: var(--radius);
	margin-bottom: 1rem;
	padding: 0.5rem;
	box-shadow: var(--shadow);

	@media (min-width: 767px) {
		width: 288px;
	}
`;

const Input = styled.input.attrs((props) => ({
	type: "search",
	placeholder: props.placeholder,
}))`
	background-color: var(--ui-base-color);
	margin-left: 1rem;
	border: none;
	outline: none;
	color: var(--tetx-color);
	width: 100%;
`;

const Search = ({ search, setSearch }) => {
	return (
		<>
			<InputLabel>
				<FaSearch />
				<Input
					placeholder={"Search"}
					onChange={(e) => setSearch(e.target.value)}
					value={search}
				/>
			</InputLabel>
		</>
	);
};

export default Search;
