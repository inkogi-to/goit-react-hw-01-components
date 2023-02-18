import {Section, StatList, Title} from "./Statistics.styled";
import PropTypes from "prop-types";

export const Statistics = ({title, stats}) => {
  const randomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }
  const addTitle = (title) => {
    return title ? <Title>{title}</Title> : false
  }
  return (
    <Section>
      {addTitle(title)}
      <StatList>
        {stats.map(item => (
          <li key={item.id} style={{backgroundColor: `${randomColor()}`}}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </li>
        ))}
      </StatList>
    </Section>
  )
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })).isRequired,
}
