import data from '../data.json';
import StaticticsCss from './Statistics.module.css'

const Statistics = ({ stats, title }) => {

  return (
     <>
      <section className={StaticticsCss.statistics}>
      <h2 className={StaticticsCss.title}>{data.title}</h2>

      <ul className={StaticticsCss.statList}>
      <li className={StaticticsCss.item}>
        <span className={StaticticsCss.label}>.docx</span>
        <span className={StaticticsCss.percentage}>{data.stats[0].percentage}%</span>
    </li>
    <li className={StaticticsCss.item}>
      <span className={StaticticsCss.label}>.mp3</span>
      <span className={StaticticsCss.percentage}>{data.stats[2].percentage}%</span>
    </li>
    <li className={StaticticsCss.item}>
      <span className={StaticticsCss.label}>.pdf</span>
      <span className={StaticticsCss.percentage}>{data.stats[1].percentage}%</span>
    </li>
    <li className={StaticticsCss.item}>
      <span className={StaticticsCss.label}>.mp4</span>
      <span className={StaticticsCss.percentage}>{data.stats[3].percentage}%</span>
    </li>
  </ul>
</section>
        </> 
    )
     
    
}

export default Statistics