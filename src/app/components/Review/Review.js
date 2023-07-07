import { bebasNeue, dosisSemibold } from '../../fonts';

export default function Review({rating, reviewTitle, reviewContent}){
    return (
        <div className="flex flex-col w-full border border-t-blitzBlack mt-2">
            <h3 className={bebasNeue.className + " text-blitzYellow"}>{rating}</h3>
            <h3 className={dosisSemibold.className + " text-blitzBlack"}>{reviewTitle}</h3>
            <p class={" text-blitzBlack"}>{reviewContent}</p>
        </div>
    )
}