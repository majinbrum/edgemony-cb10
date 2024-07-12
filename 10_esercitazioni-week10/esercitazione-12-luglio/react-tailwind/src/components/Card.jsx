import heroImage from "../../public/images/image-equilibrium.jpg";
import Credits from "./Credits.jsx";
import Description from "./Description.jsx";

function Card() {
	return (
		<div className='bg-[#15273F] w-80 rounded-lg shadow-xl flex flex-col p-4 gap-y-4 '>
			<img className='rounded-md w-full' src={heroImage} alt='Equilibrium image' width='250' height='250' />
			<Description />
			<hr className='border-[#859dbdc0] border-t' />
			<Credits />
		</div>
	);
}

export default Card;
