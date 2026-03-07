
export default function Saidbar(){
    return (
           <aside className="w-full md:w-1/4 bg-[#487D49] p-6 rounded-lg text-white">
                <div className="mb-6">
                    <label className="block text-xl mb-2">category</label>
                    <input type="text" className="w-full bg-transparent border-2 border-white/50 rounded p-2 outline-none" />
                </div>

                <div className="mb-6">
                    <label className="block text-xl mb-2">price</label>
                    <input type="text" className="w-full bg-transparent border-2 border-white/50 rounded p-2 outline-none" />
                </div>

                <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <label key={i} className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" className="w-5 h-5 accent-[#87CF3E]" />
                            <span className="text-lg group-hover:text-gray-200">text</span>
                        </label>
                    ))}
                </div>
            </aside>
    )
}