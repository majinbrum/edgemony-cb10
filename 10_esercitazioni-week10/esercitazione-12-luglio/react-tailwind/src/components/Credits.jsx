import authorPic from "../../public/images/image-avatar.png";

function Credits() {
	return (
		<div className='flex items-center gap-x-4'>
			<img className='border-sky-50 border-2 rounded-full' src={authorPic} alt='Author picture' width='35' height='35' />
			<div className='text-[#859dbd]'>
				<h2>
					Creation of <span className='text-sky-50'>Jules Wyvern</span>
				</h2>
			</div>
		</div>
	);
}

export default Credits;
