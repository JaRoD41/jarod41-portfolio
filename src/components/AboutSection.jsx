'use client'

import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
	{
		id: 'skills',
		title: 'Skills',
		content: (
			// <ul className='list-disc pl-2'>
			<ul className='grid grid-cols-3 gap-4'>
				<li>HTML</li>
				<li>CSS</li>
				<li>JavaScript</li>
				<li>React</li>
				<li>Next.js</li>
				<li>Tailwind</li>
			</ul>
		),
	},
	{
		id: 'education',
		title: 'Education',
		content: (
			<ul>
				<li>Computer Science</li>
				<li>Information Technology</li>
			</ul>
		),
	},
	{
		id: 'experience',
		title: 'Experience',
		content: (
			<ul>
				<li>Software Engineer</li>
				<li>Software Developer</li>
			</ul>
		),
	},
]

const AboutSection = () => {
	const [tab, setTab] = useState('skills')
	const [isPending, startTransition] = useTransition()

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id)
		})
	}
	return (
		<section className='text-white'>
			<div className='md:grid md:grid-cols-2 gap-8 items-center py-8  xl:gap-16 sm:py-16 xl:px-16'>
				<Image src='/images/desk-181818.png' alt='about' width={500} height={500} />
				<div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
					<h2 className='text-4xl font-bold text-white mb-4 mt-4 sm:mt-0'>About Me</h2>
					<p className='text-base md:text-lg'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum sit iusto provident iure nisi vitae aperiam
						est quisquam iste hic. Natus sunt excepturi porro consequuntur maiores possimus vero sed sit ullam qui?
						Natus fugiat nobis error debitis cumque nulla ducimus laboriosam cupiditate tenetur reiciendis numquam sed
						amet, autem, omnatur. Harum aliquid at, rem, natus perferendis,
						autem fugiat corporis eligendi quo iure odit ducimus dolorum nostrum consequuntur? Aliquam temporibus ab
						accusamus, quia fuga, beatae sint saepe maiores
						harum et? Quisquam corrupti omnis, quae esse quasi officia a!
					</p>
					<div className='flex flex-row mt-8'>
						<TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
							{' '}
							Skills{' '}
						</TabButton>
						<TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
							{' '}
							Education{' '}
						</TabButton>
						<TabButton selectTab={() => handleTabChange('experience')} active={tab === 'experience'}>
							{' '}
							Experience{' '}
						</TabButton>
					</div>
					<div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
