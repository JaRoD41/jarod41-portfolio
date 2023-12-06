"use client"

import React , { useState, useTransition } from 'react'
import Image from 'next/image'

const AboutSection = () => {
  const [tab, setTab] = useState("skills")
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
				<div>
					<h2 className='text-4xl font-bold text-white mb-4 mt-4 sm:mt-0'>About Me</h2>
					<p className='text-base md:text-lg'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum sit iusto provident iure nisi vitae aperiam
						est quisquam iste hic. Natus sunt excepturi porro consequuntur maiores possimus vero sed sit ullam qui?
						Natus fugiat nobis error debitis cumque nulla ducimus laboriosam cupiditate tenetur reiciendis numquam sed
						amet, in odit perferendis animi optio quisquam aperiam aspernatur. Harum aliquid at, rem, natus perferendis,
						autem fugiat corporis eligendi quo iure odit ducimus dolorum nostrum consequuntur? Aliquam temporibus ab
						nostrum dolorum culpa officiis quod sit labore obcaecati, accusantium, quia fuga, beatae sint saepe maiores
						harum et? Quisquam corrupti omnis, quae esse quasi officia a!
					</p>
					<div className='flex flex-row mt-8'>
						<span className='text-[#ADB7BE] mr-3 font-semibold hover:text-white border-b border-purple-500'>Skills</span>
						<span>Education</span>
						<span>Experience</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
