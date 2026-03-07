import { Avatar } from "@mui/material";

export function ProfileRegtengel() {
    return (
        <div className="w-[675px] mb-10 rounded-2xl h-[80px] bg-[#487D49] text-amber-50">
            <div className="flex items-center gap-10 pt-3 ml-10 text-xl text-white">
                <Avatar sx={{ bgcolor:"-moz-initial",height:60,width:60 }}>OP</Avatar>
                <h1>NAME</h1>
                <h1>@NAME</h1>
            </div>
        </div>
    ) 
}