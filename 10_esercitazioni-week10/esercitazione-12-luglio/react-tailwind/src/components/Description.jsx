import valueIcon from "../../public/images/icon-ethereum.svg";
import clockIcon from "../../public/images/icon-clock.svg";

function Description() {
	return (
		<>
			<h1 className='text-xl font-bold text-sky-50'>Equilibrium #3429</h1>
			<p className='text-[#859dbd] break-normal'>Our Equilibrium collection promotes balance and calm.</p>
			<div className='flex justify-between items-center '>
				<span className='flex items-center gap-x-2'>
					<img src={valueIcon} alt='Value icon' width='12' height='12' />
					<h3 className='text-cyan-300 font-bold'>0.041 ETH</h3>
				</span>
				<span className='flex items-center gap-x-2'>
					<img src={clockIcon} alt='Value icon' width='16' height='16' />
					<h4 className='text-[#859dbd] font-bold'>3 days left</h4>
				</span>
			</div>
		</>
	);
}

export default Description;
