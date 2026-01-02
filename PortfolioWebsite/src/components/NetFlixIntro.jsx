import React , {useEffect} from "react";
import logoVideo from '../data/logoVideo.mp4';

const NetFlixIntro = ({onEnd}) => {
    useEffect(() => {
        const timer = setTimeout(onEnd,4000);
        return() => clearTimeout(timer);
    },[onEnd]);

    return(
        <div className="flex items-center justify-center h-screen bg-black">
            <video src = {logoVideo}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
            />
        </div>
    )
}
export default NetFlixIntro;

