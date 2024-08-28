import React from "react";

export interface IPost {
	id: string;
	category: string;
	title: string;
	description: string;
	author: IAuthor;
}

interface IAuthor {
	imageUrl?: string;
	name: string;
	role: string;
}

interface ICardProps {
	post: IPost;
}

const Card = ({ post }: ICardProps) => {
	return (
		<article key={post.id} className='flex max-w-xl flex-col items-start justify-between'>
			<div className='flex items-center gap-x-4 text-xs'>{post.category}</div>
			<div className='group relative'>
				<h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>{post.title}</h3>
				<p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>{post.description}</p>
			</div>
			<div className='relative mt-8 flex items-center gap-x-4'>
				<img alt='' src={post.author.imageUrl} className='h-10 w-10 rounded-full bg-gray-50' />
				<div className='text-sm leading-6'>
					<p className='font-semibold text-gray-900'>{post.author.name}</p>
					<p className='text-gray-600'>{post.author.role}</p>
				</div>
			</div>
		</article>
	);
};

export default Card;
