import { useState} from "react"

export default function Star(): JSX.Element {
    const [isFilled, setIsFilled] = useState(false)
    let clicked: JSX.Element = isFilled ? filledStar : emptyStar
return (
    <div>
        <button onClick={() => {
            setIsFilled(!isFilled)
        }}>
            {clicked}
        </button>
    </div>
)
}

const filledStar = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"  fill="yellow"  viewBox="0 0 48 48">
<path d="m11.65 44 3.25-14.05L4 20.5l14.4-1.25L24 6l5.6 13.25L44 20.5l-10.9 9.45L36.35 44 24 36.55Z"  />
</svg>

const emptyStar = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"  viewBox="0 0 48 48">
<path d="m11.65 44 3.25-14.05L4 20.5l14.4-1.25L24 6l5.6 13.25L44 20.5l-10.9 9.45L36.35 44 24 36.55Z"  />
</svg>