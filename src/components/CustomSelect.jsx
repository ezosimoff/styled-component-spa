import styled from 'styled-components';
import Select from 'react-select';

const CustomSelect = styled(Select).attrs({
	styles: {
		control: (provided) => ({
			...provided,
			backgroundColor: 'var(--ui-base-color)',
			color: 'var(--text-color)',
			borderRadius: 'var(--radius)',
			padding: '0.25rem',
			border: 'none',
			boxShadow: 'var(--shadow)',
			height: '42px',
		}),
		option: (provided) => ({
			...provided,
			cursor: 'pointer',
			color: 'var(--text-color)',
			backgroundColor: 'var(--ui-base-color)',
		}),
		menuList: (provided) => ({
			...provided,
			boxShadow: 'var(--shadow)',
			backgroundColor: 'var(--ui-base-color)',
		}),
		singleValue: (provided) => ({
			...provided,
			color: 'var(--text-color)',
		}),
	},
})`
	width: 175px;
`;

export default CustomSelect;
