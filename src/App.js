import { AddItem } from './AddItem.js'

function App() {
	return (
		<div className="flex flex-col App h-svh px-4 gap-8 md:w-[80%] mx-auto py-4">
			<div className={'animate-dialog overflow-hidden'}>
				<h1 className=" p-4 mx-auto mt-8 mb-4 md:mt-16 text-center text-white rounded-lg bg-linear-to-r/hsl from-red-700 to-yellow-600 font-display text-display">
					Hola soy una app ejecutada con Bun y Vite
				</h1>
				<p className="line-clamp-3 font-body text-primary">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
					aspernatur, debitis non blanditiis unde et architecto? Aut eos alias
					mollitia. Quibusdam, in. Tempora, nesciunt tenetur. Est magnam porro
					ratione beatae?. Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Iusto neque quia cum unde, dolorem nam incidunt odio laboriosam
					harum omnis corporis sint pariatur id accusantium dolore quas sapiente
					sed quo.
				</p>
			</div>
			<div className="grid grid-cols-fit-100 *:nth-3:border *:bg-red-500 *:last:bg-green-500 border border-black text-black">
				<div className="box">Lorem ipsum dolor sit .</div>
				<div className="box">Lorem ipsum dolor sit .</div>
				<div>Lorem ipsum dolor sit .</div>
				<div className="">Lorem ipsum dolor sit .</div>
				<div>Lorem ipsum dolor sit .</div>
				<span>hola</span>
				<span>hola</span>
				<span>hola</span>
				<span>hola</span>
				<span className="">hola</span>
			</div>
			<AddItem />
		</div>
	)
}

export default App
