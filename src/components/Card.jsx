import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	border-radius: var(--radius);
	background-color: var(--ui-base-color);
	box-shadow: var(--shadow);
	cursor: pointer;
	overflow: hidden;
`;
const CardImage = styled.img`
	display: block;
	width: 100%;
	height: 150px;
	object-fit: cover;
	object-position: center;
	box-shadow: var(--shadow);
`;
const CardBody = styled.div`
	padding: 1rem 1.5rem 2rem;
`;
const CardName = styled.h3`
	margin-bottom: 1rem;
	font-size: var(--fs-md);
	font-weight: var(--fw-bold);
`;
const CardList = styled.ul``;
const CardListItem = styled.li`
	font-size: var(--fs-sm);
	line-height: 1.5;
	font-weight: var(--fw-light);

	& span {
		font-weight: var(--fw-normal);
	}
`;

const Card = ({ img, name, info = [], onclick }) => {
	return (
		<Wrapper>
			<CardImage src={img} alt={name} />
			<CardBody>
				<CardName>{name}</CardName>
				<CardList>
					{info.map((item) => {
						return (
							<CardListItem key={item.title}>
								<span>{item.title}:</span> {item.description}
							</CardListItem>
						);
					})}
				</CardList>
			</CardBody>
		</Wrapper>
	);
};

export default Card;
