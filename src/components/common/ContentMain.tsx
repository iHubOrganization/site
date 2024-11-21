import Button from "./Button"

const ContentMain = () => {
	return (
		<div className='flex gap-24 mt-24'>
			<img src='/public/icons/headphone.svg' alt='' className="w-[500px] h-[500px]"/>
			<div className='flex gap-10 flex-col'>
				<div>
					<h2 className='text-xl text-white'>HEAR IT. FEEL IT</h2>
					<h1 className='text-8xl w-[517px] font-bold text-white'>
						MOVE WITH THE MUSIC
					</h1>
				</div>
				<div className="flex items-center gap-10">
					<div className='text-white text-5xl font-bold'>$ 435</div>
          <div className="line-through text-red-50 text-3xl">$ 465</div>
				</div>
      <Button onClick={() => {}} type="tertiary">BUY NOW</Button>
			</div>
		</div>
	)
}

export default ContentMain
