import { ButtonCustom } from "../../shared/ButtonCustom/custom-button";

export function AddProject() {
    return (
        <div className="bg-[#8CC63F] p-10 rounded-xl border-2 border-white w-[900px]">
      <h2 className="text-white text-3xl font-bold mb-6 uppercase">Project</h2>
      
      <div className="flex gap-6">
        <div className="w-1/3 h-[300px] border-2 border-white flex items-center justify-center text-white text-3xl font-bold rounded-lg">
          PHOTO
        </div>
        <div className="w-1/3 h-[300px] border-2 border-white p-4 rounded-lg">
          <textarea 
            placeholder="discribe..." 
            className="bg-transparent w-full h-full text-white placeholder-white/70 outline-none resize-none text-xl"
          />
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Name..." 
            className="bg-transparent border-2 border-white p-3 rounded-lg text-white placeholder-white/70 outline-none"
          />
          <input 
            type="text" 
            placeholder="price..." 
            className="bg-transparent border-2 border-white p-3 rounded-lg text-white placeholder-white/70 outline-none"
          />
          <input 
            type="text" 
            placeholder="category..." 
            className="bg-transparent border-2 border-white p-3 rounded-lg text-white placeholder-white/70 outline-none"
          />
          
          <div className="mt-auto">
             <ButtonCustom text="add"  />
          </div>
        </div>
      </div>
    </div>
    )
}