import { Rating } from 'react-simple-star-rating'

export function CustomRating(props) {
    // console.log(props.rating /2)

    return (
        <div
            className='rating'

        >
            <Rating
                initialValue={Math.round(props.rating)}
                readonly={true}
                size={25}
            />
        </div>
    )
}