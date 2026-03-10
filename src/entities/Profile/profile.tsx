
import { CustomCard } from "../CustomCard/castom-card";
import { ProfileRegtengel } from "../ProfileRectangle/profile-regtengel";

export function Profile() {
    return (
        <div>
            <ProfileRegtengel/>
            <CustomCard id={1} amount={200} category="#487D49" description=" sss" money={222} title="222"/>
        </div>
    )
}