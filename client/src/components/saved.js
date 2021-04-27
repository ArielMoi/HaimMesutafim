const Card = require('./Card.js')

const Saved = (props) => {
    return <div>{props.saved.map(savedVolunteer => {
        <Card img={savedVolunteer.img} title={savedVolunteer.title} />
    })}</div>;
}

export default Saved;