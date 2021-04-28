import HeaderCard from './HeaderCard'

const FeedWindow = (props) => {
    return (
        <div>
            {Object.entries(props.feed).map((title, img, href) => <HeaderCard img={img} title={title} onClick={() => props.onClick(href)}/>)}
        </div>
    )
}

export default FeedWindow;