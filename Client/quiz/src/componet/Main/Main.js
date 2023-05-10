import "./Main.css";
import Quiz from "../Quiz/Quiz";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className="main_container">
			<nav className="navbar">
				<h1>Quiz-Page</h1>
				<button className="white_btn" onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<Quiz/>

		</div>
	);
};

export default Main;