const Button = ({ toggler }) => {
	return (
		<button className="Button" onClick={() => toggler()}>
			Toggle
		</button>
	);
};

export default Button;
