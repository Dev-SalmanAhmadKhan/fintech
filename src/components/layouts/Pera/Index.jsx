import './styles-module.scss';
const Pera = ({ children, ...props }) => {
	return (
		<>
			<p {...props}>
				{children}
			</p>
		</>
	)
}

export default Pera