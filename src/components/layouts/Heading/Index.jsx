import './styles-module.scss';
const Heading = ({ children, ...props }) => {
	return (
		<>
			<h2 {...props}>
				{children}
			</h2>
		</>
	)
}

export default Heading