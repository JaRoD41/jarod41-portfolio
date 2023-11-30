import Image from 'next/image'
import HeroSection from '@/components/HeroSection'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col bg-[#181818] '>
			<div className='container mt-24 mx-auto px-12 py-4'>
				<HeroSection />
			</div>
		</main>
	)
}
