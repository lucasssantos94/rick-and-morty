import { ContainerCard } from "./style"
import PropTypes from 'prop-types'

export default function CardCharacter({ image, name, gender, species
}) {
    return (
        <ContainerCard>
            <div className="image">
                <img src={image} alt={`image of ${name} character from Rick and Morty`} />
            </div>

            <div className="info">
                <h3>{name}</h3>
                <ul>
                    <li>Gender: {gender}</li>
                    <li>Species: {species}</li>
                </ul>
            </div>
        </ContainerCard>
    )
}

CardCharacter.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
}
